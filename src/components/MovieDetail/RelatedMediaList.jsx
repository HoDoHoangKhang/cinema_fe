import React from 'react'
import MovieCard from '../MovieCard';

const RelatedMediaList = ({ movieRelated, title }) => {
  console.log({ movieRelated :movieRelated});
  return (
    <div className='mt-6'>
      <p className="mb-4 text-xl font-bold">{title}</p>
      <div className="grid grid-cols-3 md:grid-cols-4">
        {movieRelated.map((movie) => (
          <MovieCard key={movie.id} data={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default RelatedMediaList
