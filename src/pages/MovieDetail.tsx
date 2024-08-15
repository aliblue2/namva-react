import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import { fetchMovieDetail, fethcMovieDetail, queryClient } from "../utils/http";
import LoadingPage from "../components/common/LoadingPage";
import ErrorBlock from "../components/common/ErrorBlock";
import { formatDate, formatTime } from "../utils/format";
import Primarybtn from "../components/common/Primarybtn";
import SecondaryBtn from "../components/common/SecondaryBtn";
import { FiAward, FiPlay } from "react-icons/fi";

const MovieDetail = () => {
  const data = useRouteLoaderData("movieDetail");
  console.log(data);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[500px]">
        <img
          src={data.images ? data.images[1] : data.poster}
          className="w-full h-full object-cover object-center"
          alt={data.title}
        />
        <div className="absolute h-32 flex items-end justify-end bottom-0 left-0 w-full p-5 bg-gradient-to-b from-transparent to-blackColor">
          <div className="flex flex-col items-center justify-between gap-5 w-full max-w-[1100px] mx-auto">
          <h4 className="text-4xl font-medium">{data.title}</h4>
          <div className="flex w-full items-center justify-center gap-2">
              <Primarybtn >
                <FiPlay size={24} />
                ورود و تماشا
              </Primarybtn>
              <SecondaryBtn >
                <FiAward size={24} />
                خرید اشتراک
              </SecondaryBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start mt-[420px] gap-5">
        <p className="flex w-full items-center justify-end gap-2">
          {data.genres.map((gen) => {
            return (
              <span
                className="p-1 px-2 text-sm rounded-full bg-gray-300 text-gray-600 font-medium"
                key={gen}
              >
                {gen}
              </span>
            );
          })}
        </p>
        <span className="w-full text-start">نمره : {data.imdb_rating}</span>
        <span className="w-full text-start">کارگردان : {data.director}</span>
        <span className="w-full text-start">نویسنده : {data.writer}</span>
        <span className="w-full text-start">بازیگران : {data.actors}</span>
        <span className="w-full text-start line-clamp-1">
          جوایز : {data.awards}
        </span>
        <span className="w-full text-start">زمان : {data.runtime}</span>
        <span className="w-full text-start">
          تاریخ انتشار : {formatDate(data.released)}
        </span>
        <span className="w-full text-start">محصول کشور : {data.country}</span>
        <span className="w-full text-start">خلاصه داستان :</span>
        <p className="text-end">{data.plot}</p>
        {data.images && (
          <>
            <span className="w-full text-start">تصاویر :</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {data.images.map((imgSrc, i) => {
                return (
                  <img
                    className="w-full h-[250px] object-cover rounded-xl"
                    src={imgSrc}
                    key={i}
                  />
                );
              })}
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetail;

export const loader = async ({ params }) => {
  const id = params.movieId;
  return await queryClient.fetchQuery({
    queryKey: ["movies", { movie_id: id }],
    queryFn: ({ queryKey }) => fetchMovieDetail(queryKey[1].movie_id),
  });
};
