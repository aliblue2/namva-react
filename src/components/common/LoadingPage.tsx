import Lottie from "lottie-react";
import loadingAnim from "../../lottie/loading.json";
const LoadingPage = () => {
  return (
    <div className="w-full flex items-center justify-center gap-5 flex-col mx-auto p-5">
      <Lottie
        animationData={loadingAnim}
        width={300}
        height={300}
        loop
        autoPlay
      />
      <h4 className="text-xl font-medium text-white">لطفا صبر کنید....</h4>
    </div>
  );
};

export default LoadingPage;
