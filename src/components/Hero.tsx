import { FiInfo, FiPlay } from "react-icons/fi";
import heroImg from "../images/hero.jpg";
import Primarybtn from "./common/Primarybtn";
import SecondaryBtn from "./common/SecondaryBtn";

const Hero = () => {
  return (
    <div className="w-full rounded-3xl z-0 relative h-full overflow-hidden">
      <img
        src={heroImg}
        alt="heroImage"
        className="w-full md:h-full h-[400px] object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-grayColor p-8 bg-opacity-15">
        <div className="felx flex-col items-start justify-start gap-5 h-full max-w-[600px]">
          <h4 className="md:text-4xl text-2xl font-medium">جنگل آسفالت</h4>
          <p className="md:text-base text-xs">
            هنگامه برای نجات جان برادرش نیاز به پول دارد. او برای آماده کردن این
            پول دست به خطر بزرگی می‌زند و ... ستارگان:نوید محمدزادهامیر
            جعفریمریلا زارعیفرشته حسینی کارگردان:پژمان تیمورتاش
          </p>
          <div className="flex items-center w-full justify-start gap-5 mt-5">
            <Primarybtn>
              <FiPlay size={18} />
              مشاهده
            </Primarybtn>
            <SecondaryBtn>
              <FiInfo size={18} />
              اطلاعات بیشتر
            </SecondaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
