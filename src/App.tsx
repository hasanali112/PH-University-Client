import Mainlayout from "./components/layout/Mainlayout/Mainlayout";
import ProtectedRoutes from "./components/layout/ProtectedRoutes/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <ProtectedRoutes>
        <Mainlayout />
      </ProtectedRoutes>
    </div>
  );
};

export default App;
