/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import Cookie from "js-cookie";
import CryptoJS from "crypto-js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const key = "secret-key";

  const [login] = useLoginMutation();

  const userDefaultValues = {
    id: "A-0001",
    password: "admin123",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      const encryptedToken = CryptoJS.AES.encrypt(
        res.data.accessToken,
        key
      ).toString();
      Cookie.set("access-token", encryptedToken);
      const result = Cookie.get("access-token");
      const bytes = CryptoJS.AES.decrypt(result as string, key);
      const originalToken = bytes.toString(CryptoJS.enc.Utf8);
      console.log(originalToken);
      navigate(`/${user.role}/dashboard`);

      toast.success("Login successful", { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("Login failed", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={userDefaultValues}>
        <PHInput type="text" name="id" label="ID" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
