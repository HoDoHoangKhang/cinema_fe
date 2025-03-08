import { useState, useEffect } from "react";
import Title from "./Title";
import Loading from "../Loading";
import MovieCard from "../MovieCard";
import useFetch from "../../hooks/useFetch";

//Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
function MediaList({tabs, title}) {
  const [type, setType] = useState(tabs[0].id);

  const tabData = tabs.find((tab) => tab.id === type);
  const url = tabData ? tabData.url : ""; // Nếu không tìm thấy, để chuỗi rỗng tránh lỗi

  const { data: moviesMedia, isLoading } = useFetch({
    url: url,
  });
  const movies = (moviesMedia.results || []).slice(0,8);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //       setLoading(true);
  //     try {
  //       const res = await fetch(tabs.find((tab)=>{return tab.id===type}).url,
  //         {
  //           method: "GET",
  //           headers: {
  //             accept: "application/json",
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTA5YTAwYTIzN2FmYTg2NDljMWJhOTI4NjQwM2I3MyIsIm5iZiI6MTc0MDYyOTMyNC40MzI5OTk4LCJzdWIiOiI2N2JmZTU0YzhjMzg2YzRlNWJjOGM4NmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AAO0IjGgnpYbL8wZkrTy0OHUrFnQGgBD1WlcjnLaHp4",
  //           },
  //         },
  //       );

  //       if (!res.ok) {
  //         throw new Error(`Error: ${res.status} ${res.statusText}`);
  //       }

  //       const data = await res.json();
  //       let movieList = data.results.slice(0, 8);
  //       setMovies(movieList);
  //       // console.log(movieList);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMovies();
  // }, [type]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],

  };
  if (isLoading) {
    return (
      <div className="bg-black px-5 pt-5 text-white transition-all sm:px-8">
        <Title type={type} setType={setType} tabs={tabs} title={title}></Title>
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div className="bg-black px-5 pt-5 text-white transition-all sm:px-8">
      <Title type={type} setType={setType} tabs={tabs} title={title}></Title>
      <Slider {...settings} className="mt-6">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} data={movie} ></MovieCard>;
        })}
      </Slider>
    </div>
  );
}

export default MediaList;
