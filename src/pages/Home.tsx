import MovieSwiper from "../components/common/MovieSwiper";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <h4 className="my-5 text-xl font-medium">برترین فیلم های خارجی</h4>
      <MovieSwiper pageNumber={1} />
      <h4 className="my-5 text-xl font-medium">اختصاصی های نماوا</h4>
      <MovieSwiper pageNumber={3} />
      <h4 className="my-5 text-xl font-medium">اختصاصی های نماوا</h4>
      <MovieSwiper pageNumber={5} />
      <h4 className="my-5 text-xl font-medium">اختصاصی های نماوا</h4>
      <MovieSwiper pageNumber={8} />
    </div>
  );
};

export default Home;
