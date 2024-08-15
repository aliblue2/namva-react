import { Form } from "react-router-dom";

const Login = () => {
  return (
    <Form method="post" className="w-full max-w-[600px] flex flex-col items-center justify-start gap-5">
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <label htmlFor="username">ایمیل شما :</label>
        <input
          type="email"
          name="username"
          id="username"
          placeholder="example@email.com"
          className="w-full p-2 rounded-lg text-blackColor outline-none border border-transparent focus:border-primaryColor transition-all ease-in-out duration-300"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <label htmlFor="password">پسورد شما :</label>
        <input
          placeholder="******"
          type="password"
          name="password"
          id="password"
          className="w-full p-2 rounded-lg text-blackColor outline-none border border-transparent focus:border-primaryColor transition-all ease-in-out duration-300"
        />
      </div>
      <input
        type="submit"
        value={"ورود به حساب"}
        className="w-full bg-primaryColor p-2 rounded-lg hover:bg-accentColor font-medium"
      />
    </Form>
  );
};

export default Login;
