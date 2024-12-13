import { Button, Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/acamdemicManagement.api";

type TTableData = {
  key: string;
  name: string;
};

const AcademicFaculty = () => {
  const { data: academicFaculty, isFetching } =
    useGetAllAcademicFacultyQuery(undefined);

  const tableData = academicFaculty?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Faculty Name",
      key: "name",
      dataIndex: "name",
    },

    {
      title: "Action",
      key: "x",
      render: () => <Button>Update</Button>,
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicFaculty;
