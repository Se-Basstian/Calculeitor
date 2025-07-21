import { Outlet } from "react-router";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
