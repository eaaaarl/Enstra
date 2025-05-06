import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../Navigation/Admin";

function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{<Outlet />}</SidebarInset>
    </SidebarProvider>
  );
}

export default AppLayout;
