import React from 'react'

const ActorInfo = ({ actor }) => {
  return (
    <div className="shadow-xm overflow-hidden rounded-lg border border-slate-300">
      <img
      className='aspect-[3/4] object-cover w-full'
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
            : "https://th.bing.com/th/id/OIP.yHGzJzcR9LFioNzJf4QYkAHaHf?rs=1&pid=ImgDetMain"
        }
        alt=""
        width={188}
        height={211}
      />
      <div className='p-2'>
        <p className='font-bold text-[1.6vw]'>{actor.name}</p>
        <p>{actor.character}</p>
        <p>{actor.order}</p>
      </div>
    </div>
  );
};

export default ActorInfo
