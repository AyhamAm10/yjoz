import { useEffect, useState } from "react";
import logo from "../../assets/yjoz-logo 1.png";
import { headerList } from "../../content";
import { headerType } from "../../type/headerType";
import { useLocation } from "react-router-dom";
import search from "../../assets/Search.svg";
import login from "../../assets/Log in.svg";
import Language from "../../assets/Language.svg";
import emirates from "../../assets/emirates.png";
import { Link } from "react-router-dom";
const Header = () => {
  let location = useLocation();
  const [ListItem, setListItem] = useState<headerType[]>(headerList);

  useEffect(() => {
    const newList = ListItem.map((item) =>
      location.pathname ===item._id
        ? { ...item, active: true }
        : { ...item, active: false }
    );
    setListItem(newList);

  }, [location]);

  return (
    <header className="flex justify-center px-6 sm:px-3 md:px-6 lg:px-22  py-6 sm:py-10 2xl:py-[69px] bg-white">
      <div className="max-w-[1600px] flex justify-between items-center w-full ">
        <Link className="mr-20 md:mr-32 lg:mr-36" to="/">
          <img
            src={logo}
            alt="yjoz logo"
            className="h-5 sm:h-6 lg:h-8 2xl:h-14 "
          />
        </Link>
          <ul className="hidden md:flex gap-4 sm:gap-6 lg:gap-8 ">
            {ListItem.map((item: headerType) => (
              <Link key={item.id} to={item._id}>
                <li
                  
                  className={` md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bold cursor-pointer ${
                    item.active ? "text-yalwe" : "text-ofblack"
                  }`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-2 2xl:gap-3">
            <button>
              <img
                src={search}
                className="rounded-full w-[46px] h-[46px] 2xl:w-[56px] 2xl:h-[56px]"
                alt="search icon "
              />
            </button>
            <button>
              <img
                src={login}
                className="rounded-full w-[46px] h-[46px] 2xl:w-[56px] 2xl:h-[56px]"
                alt="search icon "
              />
            </button>
            <button className=" rounded-full border border-[#E0E0E0]  px-3 py-3 flex items-center justify-center gap-2 ">
              <img src={emirates} width={25} alt="language" />
              <h3 className="text-ofblack font-semibold ">UAE</h3>
            </button>
            <button className=" rounded-full border border-[#E0E0E0] min-w-[80px]  px-1 py-1 flex items-center justify-center gap-2 ">
              <img src={Language} width={40} alt="language" />
              <h3 className="text-ofblack font-semibold ">EN</h3>
            </button>
          </div>
      </div>
    </header>
  );
};

export default Header;
