function Paginate({ data, activeMovieId, setActiveMovieId }) {
  return (
    <div className="absolute right-0 right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {data.map((movie) => {
          return (
            <li
              onClick={()=>{setActiveMovieId(movie.id)}}
              key={movie.id}
              className={`${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-500"} h-1 w-6 cursor-pointer`}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default Paginate;