import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  console.log(item);

  return (
    <Link
      to={`/movies/${item.id}`}
      className="flex flex-col w-full h-full cursor-pointer relative bg-neutral-900 transition-all duration-200 hover:opacity-70 overflow-hidden"
    >
      <img
        className="w-full block object-cover h-[290px] grow"
        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
        alt={item.title}
      />

      <div className="flex flex-col p-[15px] grow h-[115px]">
        <h3 className="text-zinc-100 grow mb-3">{item.title}</h3>
        <p
          className={`flex justify-end w-full ${
            item.vote_average >= 7 ? ' text-green-600' : 'text-orange-500'
          }`}
        >
          {item.vote_average.toFixed(1)}
        </p>
        <button className="absolute top-4 left-4 text-zinc-100">
          {like ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </Link>
  );
};

export default Movie;
