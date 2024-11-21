import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../../utils/sidebarItemGenerator";
import { adminPaths } from "../../../routes/admin.routes";
import { facultyPaths } from "../../../routes/faculty.routes";
import { studentPaths } from "../../../routes/student.routes";
import { useAppSelector } from "../../../redux/hooks";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const { user } = useAppSelector((state) => state.auth);

  let sideBarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sideBarItems = sidebarItemGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItems = sidebarItemGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBarItems = sidebarItemGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
