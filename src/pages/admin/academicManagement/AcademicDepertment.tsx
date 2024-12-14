import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicDepertmentQuery } from "../../../redux/features/admin/acamdemicManagement.api";
import { useState } from "react";
import { TQueryParams } from "../../../constant/global";

type TTableData = {
  key: string;
  name: string;
};

const AcademicDepertment = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const { data: academicDepertment, isFetching } =
    useGetAllAcademicDepertmentQuery(params);

  console.log(academicDepertment);

  const academicDepertmentData = academicDepertment?.data?.map(
    ({ _id, name }) => ({
      key: _id,
      name,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
    },

    {
      title: "Action",
      key: "x",
      render: () => <Button>Update</Button>,
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={academicDepertmentData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicDepertment;
