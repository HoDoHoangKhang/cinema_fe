import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const FilterForm = ({ setFilter }) => {
  const [mediaType, setMediaType] = useState("movie");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [rating, setRating] = useState("All");

  const { data: CategoryList } = useFetch({ url: `/genre/${mediaType}/list` });

  useEffect(() => {
    setFilter({ mediaType, genres: selectedGenres, rating });
  }, [mediaType, selectedGenres, rating, setFilter]);

  const toggleGenre = (id) => {
    setSelectedGenres((prev) =>
      prev.includes(id) ? prev.filter((genre) => genre !== id) : [...prev, id],
    );
  };

  return (
    <div className="space-y-4 rounded-md border p-4 shadow-md">
      {/* Media Type Selection */}
      <div>
        <p className="text-md font-bold">Media Type</p>
        <label className="mr-4">
          <input
            type="radio"
            value="movie"
            checked={mediaType === "movie"}
            onChange={() => setMediaType("movie")}
          />
          Movie
        </label>
        <label>
          <input
            type="radio"
            value="tv"
            checked={mediaType === "tv"}
            onChange={() => setMediaType("tv")}
          />
          TV Show
        </label>
      </div>

      {/* Genre Selection */}
      <div>
        <p className="text-md font-bold">Genres</p>
        <div className="flex flex-wrap gap-2">
          {CategoryList?.genres?.map((category) => (
            <div
              key={category.id}
              className={`cursor-pointer rounded border px-2 py-1 ${
                selectedGenres.includes(category.id)
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              onClick={() => toggleGenre(category.id)}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>

      {/* Rating Selection */}
      <div>
        <p className="text-md font-bold">Rating</p>
        <select
          className="rounded border px-2 py-1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="All">All</option>
          <option value="0-3">0-3</option>
          <option value="3-7">3-7</option>
          <option value="7-10">7-10</option>
        </select>
      </div>
    </div>
  );
};

export default FilterForm;
