import React from 'react'
import MovieCard from '../MovieCard';

const RelatedMediaList = ({ movieRelated }) => {
  console.log({ movieRelated :movieRelated});
  return (
    <div className='mt-6'>
      <p className="mb-4 text-xl font-bold">Related</p>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {movieRelated.map((movie) => (
          <MovieCard key={movie.id} data={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default RelatedMediaList
