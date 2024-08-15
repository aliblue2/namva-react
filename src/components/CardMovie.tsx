import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const CardMovie = ({ movie }) => {
  const navigator = useNavigate();

  const navigatorHandler = () => {
    navigator(`/movies/${movie.id}`);
  };

  return (
    <motion.div
      initial={{ top: 200 }}
      animate={{ top: 0 }}
      onClick={navigatorHandler}
      className="w-full h-[300px] relative rounded-lg overflow-hidden cursor-pointer"
    >
      <img src={movie.poster} alt={movie.title} className="w-full h-full" />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        whileTap={{ opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full p-3 bg-gradient-to-b from-grayColor/70 to-blackColor flex flex-col items-end justify-end gap-3"
      >
        <h6 className="md:text-lg w-full text-end">{movie.title}</h6>
        <p className="w-full flex-col flex items-end justify-start gap-1">
          {movie.genres &&
            movie.genres.map((gen) => {
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
    </motion.div>
  );
};

export default CardMovie;
