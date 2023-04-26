import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Request';
import { AiFillStar } from 'react-icons/ai';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const getMovies = async () => {
    const res = await axios.get(requests.requestPopular);
    setMovies(res.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full bg-after">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[50%] translate-y-[-50%] p-4 md:p-8 z-[1]">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="flex items-center gap-[10px] my-4">
              <button className="bg-neutral-500 text-white py-2 px-5 transition-all duration-200 border border-transparent hover:bg-black">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 transition-all duration-200 hover:bg-white hover:text-black">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Released: {movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-100 mb-3">
              {truncateString(movie?.overview, 200)}
            </p>
            <div className="flex items-center gap-1">
              <AiFillStar /> {movie?.vote_average}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
