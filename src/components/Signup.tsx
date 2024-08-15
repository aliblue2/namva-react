import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { signupFc } from "../utils/http";
import { redirect } from "react-router-dom";

const Signup = () => {
  const email = useRef();
  const name = useRef();
  const password = useRef();

  const { data, mutate, isError, error, isPending } = useMutation({
    mutationFn: signupFc,
    onSuccess: () => {
      return redirect("/auth?mode=login");
    },
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
      name: name.current.value,
    };
    mutate(data);
  };

  console.log(data);

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-[600px] flex flex-col items-center justify-start gap-5"
      >
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label htmlFor="fullName">نام شما:</label>
          <input
            ref={name}
            placeholder="مثل علی ، رضا ، حسین ..."
            type="text"
            name="fullName"
            id="fullName"
            className="w-full p-2 rounded-lg text-blackColor outline-none border border-transparent focus:border-primaryColor transition-all ease-in-out duration-300"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label htmlFor="emailSignup">ایمیل شما :</label>
          <input
            ref={email}
            type="email"
            name="emailSignup"
            id="emailSignup"
            placeholder="example@email.com"
            className="w-full p-2 rounded-lg text-blackColor outline-none border border-transparent focus:border-primaryColor transition-all ease-in-out duration-300"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label htmlFor="passwordSignup">پسورد شما :</label>
          <input
            ref={password}
            placeholder="******"
            type="password"
            name="passwordSignup"
            id="passwordSignup"
            className="w-full p-2 rounded-lg text-blackColor outline-none border border-transparent focus:border-primaryColor transition-all ease-in-out duration-300"
          />
        </div>
        <input
          type="submit"
          value={"ثبت نام"}
          className="w-full bg-primaryColor p-2 rounded-lg hover:bg-accentColor font-medium"
        />
      </form>
    </>
  );
};

export default Signup;
