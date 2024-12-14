/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddAcademicDepertmentMutation,
  useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/acamdemicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types";

const CreateAcademicDepertment = () => {
  const { data: getAllAcademicFaculty, isLoading } =
    useGetAllAcademicFacultyQuery(undefined);

  const [addAcademicDepertment] = useAddAcademicDepertmentMutation();

  const facultyOptions = getAllAcademicFaculty?.data?.map((faculty) => ({
    value: faculty._id,
    label: faculty.name,
  }));
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating....");
    console.log(data);
    try {
      const res = (await addAcademicDepertment(data)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success(res.data.message, { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error);
    }
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
            <Col span={12}>
              <PHSelect
                name="academicFaculty"
                lebel="Academic Faculty"
                options={facultyOptions}
                disabled={isLoading}
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateAcademicDepertment;
