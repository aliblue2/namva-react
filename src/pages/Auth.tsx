import { Link, useSearchParams } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import logoImg from "../images/logo.svg";

const Auth = () => {
  const [searchParmas] = useSearchParams();
  const mode = searchParmas.get("mode");
  const isLogin = mode === "login";

  return (
    <div className="flex px-5 bg-gradient-to-b from-grayColor to-blackColor text-white h-screen py-12 flex-col items-center justify-center gap-5">
      <img src={logoImg} alt="namava logo" className="w-32" />
      {isLogin ? <Login /> : <Signup />}
      {isLogin ? (
        <Link to={"?mode=signup"}>حساب کاربری ندارید؟ ثبت نام</Link>
      ) : (
        <Link to={"?mode=login"}>حساب کاربری دارید؟ ورود</Link>
      )}
    </div>
  );
};

export default Auth;
