import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
// import VideoPopup from '../components/VideoPopup/VideoPopup';
// import VideoPopup from '../components/VideoPopup/VideoPopup';
//
import LightGallery from 'lightgallery/react';
import PlayBtn from '../components/PlayBtn/PlayBtn';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

// 8e744ed83a313c9b9d991b508cbcaf51
// MOVIE SEARCH
// https://api.themoviedb.org/3/movie/343611?api_key=8e744ed83a313c9b9d991b508cbcaf51
// CREDITS
// https://api.themoviedb.org/3/movie/343611/credits?api_key=8e744ed83a313c9b9d991b508cbcaf51

// https://image.tmdb.org/t/p/original/
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [crews, setCrews] = useState([]);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Videos
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  // console.log(movie);
  // console.log(movie.genres);

  const getMovie = async () => {
    setIsLoading(false);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8e744ed83a313c9b9d991b508cbcaf51`
    );
    setMovie(res.data);
  };

  const getCast = async () => {
    setIsLoading(false);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8e744ed83a313c9b9d991b508cbcaf51`
    );
    setCast(res.data.cast);
  };

  const getCrews = async () => {
    setIsLoading(false);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8e744ed83a313c9b9d991b508cbcaf51`
    );
    setCrews(res.data.crew);
  };

  const getImages = async () => {
    setIsLoading(false);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=8e744ed83a313c9b9d991b508cbcaf51`
    );
    // console.log(res.data);
    setImages(res.data.backdrops);
  };

  const getVideos = async () => {
    setIsLoading(false);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8e744ed83a313c9b9d991b508cbcaf51`
    );
    console.log(res.data.results);
    setVideos(res.data.results);
  };

  useEffect(() => {
    setIsLoading(true);
    getMovie();
    getCast();
    getCrews();
    getImages();
    getVideos();
  }, [id]);

  const getHoursFromMins = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}h. ${minutes}m.`;
  };

  // backgroundImage: `url("https://via.placeholder.com/500")`

  // {{ backgroundImage: url{https://image.tmdb.org/t/p/original/${movie?.backdrop_path}} }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="">
          <div
            className="h-[250px] md:h-[350px] lg:h-[450px] xl:h-[500px] w-full bg-center bg-cover bg-no-repeat bg-after-top-to-bottom"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
          ></div>

          <div className="container ">
            <div className="flex flex-col md:flex-row  mt-[-50px] md:mt-[-80px] pb-[50px] ">
              <img
                className="w-[140px] h-[210px] md:w-[205px] md:h-[310px] block object-cover mr-[30px] lg:mr-[50px] z-10"
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                alt={movie?.title}
              />
              <div className="flex flex-col p-0 pt-[15px] md:p-[15px] md:pt-[100px]">
                <h3 className="text-zinc-100 mb-[30px] text-2xl md:text-[36px] leading-[1.2] font-bold">
                  {movie.title}
                </h3>

                {/* Movie About  */}

                <div className="grid gap-[20px]">
                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-[20px] md:gap-[30px] items-center text-[15px] md:text-base">
                    <span className="font-bold">Release date</span>
                    <div className="">{movie?.release_date}</div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-[20px] md:gap-[30px] items-center text-[15px] md:text-base">
                    <span className="font-bold">Genres:</span>
                    <div className="flex items-center gap-[10px] flex-wrap">
                      {movie?.genres?.map((genre) => {
                        return (
                          <Link
                            to={'/'}
                            className="leading-[1.1] p-1 px-3 bg-white text-black rounded-xl transition-all hover:bg-zinc-300"
                          >
                            {genre.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-[20px] md:gap-[30px] items-center text-[15px] md:text-base">
                    <span className="font-bold">Budget:</span>$
                    {movie?.budget?.toLocaleString()}
                  </div>
                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-[20px] md:gap-[30px] items-center text-[15px] md:text-base">
                    <span className="font-bold">Revenue:</span> $
                    {movie?.revenue?.toLocaleString()}
                  </div>
                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-[20px] md:gap-[30px] items-center text-[15px] md:text-base">
                    <span className="font-bold">Runtime</span>
                    <div className="">
                      {movie?.runtime}min / {getHoursFromMins(movie?.runtime)}
                    </div>
                  </div>
                  <p>{movie?.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Контент */}
      <div className="grid gap-[50px] !min-w-0" style={{ overflow: 'hidden' }}>
        {/* Photos */}
        <div className="container ">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-3 inline-flex items-center">
              Photos
              <span className="text-base ml-3 text-zinc-400">
                {images.length}
              </span>
            </h2>
            <Link to={'/'}>Show All Photos</Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            modules={[Grid, Navigation]}
            navigation
            className="w-full arrow-width-full !min-w-0"
          >
            {images?.map((image, id) => {
              return (
                <SwiperSlide className="max-w-[200px] md:max-w-[300px]">
                  <LightGallery
                    key={id}
                    plugins={[lgZoom, lgVideo]}
                    mode="lg-fade"
                    // className="max-w-[200px] md:max-w-[300px]"
                  >
                    <div
                      data-src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
                    >
                      <img
                        className="block h-[120px] md:h-[170px] object-cover hover:opacity-70 transition-all cursor-pointer"
                        src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
                        alt=""
                      />
                    </div>
                  </LightGallery>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Videos */}
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-3 inline-flex items-center">
              Videos
              <span className="text-base ml-3 text-zinc-400">
                {videos.length}
              </span>
            </h2>
            <Link to={'/'}>Show All Photos</Link>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            modules={[Grid, Navigation]}
            navigation
            className="w-full arrow-width-full !min-w-0"
          >
            {videos?.map((video) => {
              return (
                <SwiperSlide className="max-w-[200px] md:max-w-[300px] relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    alt="video"
                  />
                  <PlayBtn className="absolute top-[-50%] left-[-50%] translate-x-[-50%] translate-y-[-50%] z-10">
                    {video.name}
                  </PlayBtn>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        /> */}

        {/* Cast */}
        <div className="container">
          <div className="flex items-center justify-between ">
            <h2 className="text-2xl font-bold mb-3 inline-flex items-center">
              Top Cast
              <span className="text-base ml-3 text-zinc-400">
                {cast.length}
              </span>
            </h2>
            <Link to={'/'}>Show All Cast</Link>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            modules={[Grid, Navigation]}
            navigation
            className="w-full arrow-width-full !min-w-0"
          >
            {cast?.map((person) => {
              return (
                <SwiperSlide className="max-w-[250px] md:max-w-[300px]">
                  <Link
                    to={'/'}
                    className="flex items-center gap-2 bg-neutral-900 overflow-hidden rounded-md hover:opacity-70 transition-all"
                    key={person.id}
                  >
                    <img
                      className="w-[100px] h-[140px] object-cover"
                      src={`https://image.tmdb.org/t/p/original/${person?.profile_path}`}
                      alt={person.name}
                    />
                    <div>
                      <h3 className="text-white">{person.name}</h3>
                      <span className="text-zinc-300">{person.character}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/*
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-3">Top Crew</h2>
          <Link to={'/'}>Show All Crew</Link>
        </div>
        <div className="grid grid-cols-4">
          {crews?.slice(0, 8).map((person) => {
            if (
              person.job === 'Director' ||
              person.job === 'Executive Producer'
            ) {
              return (
                <div className="flex items-center gap-2" key={person.id}>
                  <img
                    className="w-[100px] h-[140px] object-cover"
                    src={`https://image.tmdb.org/t/p/original/${person?.profile_path}`}
                    alt={person.name}
                  />
                  <div>
                    <h3 className="text-white">{person.name}</h3>
                    <span className="text-zinc-300">{person.character}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div> */}
    </>
  );
};

export { MovieDetails };
