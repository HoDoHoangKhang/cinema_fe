function Title({ type, setType, tabs, title }) {
  // console.log({ type: type, setType: setType, tabs:tabs });
  return (
    <div className="flex items-center gap-5 pt-5">
      <p className="text-2xl font-bold">{title}</p>
      <ul className="flex rounded-md border-1 border-white">
        {tabs.map((tab)=>{
          return <li
          key={tab.id}
          onClick={() => {
            setType(tab.id);
          }}
          className={`min-w-[50px] cursor-pointer rounded-sm px-2 py-1 text-center ${type == tab.id ? "bg-white text-black" : ""}`}
        >{tab.title}</li>
        })}
      
      </ul>
    </div>
  );
}

export default Title;