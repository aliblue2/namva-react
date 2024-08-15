import { BiError } from "react-icons/bi";

const ErrorBlock = ({ errorStatus, errorMessage, errorInfo }) => {
  return (
    <div className="w-full max-w-[600px] flex-col flex items-center justify-start gap-2 p-5 bg-red-900 rounded-lg mx-auto my-5">
      <BiError size={56} />
      <span className="text-xl font-medium">{errorStatus}</span>
      {errorMessage}
      <p className="text-center">{errorInfo}</p>
    </div>
  );
};

export default ErrorBlock;
