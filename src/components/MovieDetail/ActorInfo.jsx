import React from 'react'
import { Link } from 'react-router-dom';

const ActorInfo = ({ actor }) => {
  return (
    <Link
      to={`/people/${actor.id}`}
      className="shadow-xm overflow-hidden rounded-lg"
    >
      <img
        className="aspect-[3/4] w-full rounded-lg object-cover"
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
            : "https://th.bing.com/th/id/OIP.yHGzJzcR9LFioNzJf4QYkAHaHf?rs=1&pid=ImgDetMain"
        }
        alt=""
        width={188}
        height={211}
      />
      <div className="p-2">
        <p className="text-[1.6vw] font-bold">{actor.name}</p>
        <p>{actor.character}</p>
      </div>
    </Link>
  );
};

export default ActorInfo
