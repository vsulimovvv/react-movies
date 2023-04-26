import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Loading from '../components/Loading/Loading';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Row = ({ title, fetchUrl, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    setIsLoading(false);
    const res = await axios.get(fetchUrl);
    setMovies(res.data.results);
  };

  useEffect(() => {
    getMovies();
  }, [fetchUrl]);

  return (
    <div className="relative">
      {/* {isLoading && <Loading />} */}
      <div className="content-left mb-5">
        <h2 className="font-bold text-xl md:text-2xl py-4">{title}</h2>

        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          modules={[Navigation]}
          navigation
          className="w-full"
        >
          {movies?.map((item, id) => {
            return (
              <SwiperSlide className="max-w-[200px]">
                <Movie item={item} key={id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Row;
