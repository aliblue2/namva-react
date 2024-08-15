import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchMovies } from "../../utils/http";
import ErrorBlock from "./ErrorBlock";
import LoadingPage from "./LoadingPage";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const MovieSwiper = ({ pageNumber }) => {
  const navigator = useNavigate();
  const movieDetailHandler = useCallback(
    (id) => {
      navigator(`/movies/${id}`);
    },
    [navigator]
  );

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["movies", { pgNum: pageNumber }],
    queryFn: ({ queryKey, signal }) => fetchMovies(signal, queryKey[1].pgNum),
    staleTime: 3000,
  });

  if (isPending) {
    return <LoadingPage />;
  }

  if (isError) {
    return (
      <ErrorBlock
        errorInfo={error.info}
        errorMessage={error.message}
        errorStatus={error.status}
      />
    );
  }

  if (data && !isPending) {
    return (
      <Swiper
        className="my-5"
        slidesPerView={2.3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3.3,
          },
          768: {
            slidesPerView: 4.3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((movie) => {
          return (
            <SwiperSlide
              onClick={() => {
                movieDetailHandler(movie.id);
              }}
              className="rounded-lg overflow-hidden relative hover:border-primaryColor border-transparent cursor-pointer w-[200px] h-[200px]"
              key={movie.id}
            >
              <img src={movie.poster} alt={movie.title} />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                whileTap={{ opacity: 1 }}
                className="absolute top-0 left-0 w-full h-full p-3 bg-gradient-to-b from-grayColor/70 to-blackColor flex flex-col items-end justify-end gap-3"
              >
                <h6 className="md:text-lg w-full text-end">{movie.title}</h6>
                <p className="w-full flex-col flex items-end justify-start gap-1">
                  {movie.genres.map((gen) => {
                    return (
                      <span
                        key={gen}
                        className="bg-gray-300 font-medium rounded-full mx-1 px-1 text-xs text-gray-600"
                      >
                        {gen}
                      </span>
                    );
                  })}
                </p>
                <span className="text-xs w-full line-clamp-1 text-end">
                  country : {movie.country}
                </span>
                <span className="text-xs w-full line-clamp-1 text-end">
                  year : {movie.year}
                </span>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
};

export default MovieSwiper;
