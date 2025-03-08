import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Header() {
    return (
      <header className="fixed top-3 right-3 left-3 z-[10] flex h-14 items-center justify-between rounded-sm bg-black/60 px-4 font-bold text-white sm:px-4">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center rounded-sm border-1 border-white p-[2px]"
          >
            <p className="rounded-[2px] bg-[#e5a00d] px-2 py-1 font-black text-[black]">
              HK <span className="text-[12px]">Movie</span>
            </p>
          </Link>
          <Link className="text-center" to="/">
            Home
          </Link>
          <Link to="/movie">Movie</Link>
        </div>
        <Link to="/search">
          <div>
            <CiSearch className="cursor-pointer text-2xl" />
          </div>
        </Link>
      </header>
    );
}

export default Header;
