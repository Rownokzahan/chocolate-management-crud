import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="px-2 md:px-12 lg:px-20">
      <h1 className="w-max mx-auto py-4 px-8 text-white text-3xl font-semibold my-16 bg-gradient-to-l from-primary via-orange-400 to-primary bg-primary bg-blend-soft-light rounded-lg">Chocolate Management System</h1>

      <Outlet/>
    </div>
  );
};

export default App;