/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/acamdemicManagement.api";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TResponse } from "../../../types";

const nameFacultySchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
});

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating....");
    try {
      const res = (await addAcademicFaculty(data)) as TResponse<any>;
      if (res.error) {
        toast.error(res.data.message, { id: toastId });
      } else {
        toast.success(res.data.message, { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error);
    }
  };
  return (
    <PHForm onSubmit={onSubmit} resolver={zodResolver(nameFacultySchema)}>
      <PHInput type="text" name="name" label="Faculty Name" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateAcademicFaculty;
