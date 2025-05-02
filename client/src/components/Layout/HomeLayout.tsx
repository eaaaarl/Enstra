import { Outlet } from "react-router-dom";
import { Nav } from "../Navigation/Home";

function HomeLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Nav />
      <main className="container mx-auto py-8 px-4 flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
