import React, { useState } from 'react'
import SearchForm from '../components/SearchForm';
import RelatedMediaList from "../components/MovieDetail/RelatedMediaList";

import useFetch from '../hooks/useFetch';

const Search = () => {
const [filter, setFilter] = useState({
  mediaType: "movie",
  genres: [], // Đảm bảo genres luôn là một mảng
  rating: "All",
});

const genres = filter.genres || []; // Đảm bảo genres không undefined
const [minRating, maxRating] =
  filter.rating === "All" ? [0, 10] : filter.rating.split("-");

const { data } = useFetch({
  url: `/discover/${filter.mediaType}?with_genres=${genres.join(",")}&vote_average.gte=${minRating}&vote_average.lte=${maxRating}`,
});
  console.log({ data: data });
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-6 py-10">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex">
        <div className="flex-1">
          <SearchForm setFilter={setFilter}></SearchForm>
        </div>
        <div className="flex-[3]">
          <RelatedMediaList
            movieRelated={data.results || []}
            title={""}
          ></RelatedMediaList>
        </div>
      </div>
    </div>
  );
}

export default Search
