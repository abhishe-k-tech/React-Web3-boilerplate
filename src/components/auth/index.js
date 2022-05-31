import { Outlet } from "react-router-dom";
import { GuestRoutesLayout, UserRoutesLayout } from "../../layout";

function LayoutWrapper({ isAuthenticated }) {
  if (isAuthenticated) {
    return (
      <UserRoutesLayout>
        <Outlet />
      </UserRoutesLayout>
    );
  }
  return (
    <GuestRoutesLayout>
      <Outlet />
    </GuestRoutesLayout>
  );
}

export default LayoutWrapper;
