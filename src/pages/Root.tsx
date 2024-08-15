import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useEffect } from "react";
import "swiper/css";
import LoadingPage from "../components/common/LoadingPage";
const Root = () => {
  const pathName = useLocation().pathname;
  useEffect(() => {
    scrollTo(0, 0);
  }, [pathName]);

  const isLoading = useNavigation().state === "loading";

  return (
    <div className="min-h-screen bg-blackColor text-white">
      <Header />
      <div className="max-w-[1100px] mx-auto p-5">
        {isLoading ? <LoadingPage /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
