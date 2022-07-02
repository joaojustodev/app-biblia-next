import Link from "next/link";

import { Book, Books, House, BookOpen, MagnifyingGlass } from "phosphor-react";
import { useRouter } from "next/router";

const menuList = [
  {
    name: "Início",
    icon: <House size={22} />,
    path: "/",
  },
  {
    name: "Livros",
    icon: <Books size={22} />,
    path: "/book",
  },
  {
    name: "Bíblias",
    icon: <BookOpen size={22} />,
    path: "/bible",
  },
];

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="fixed top-0 right-0 z-50 w-full h-[56px] bg-blue-700 shadow-md">
      <nav className="w-full h-full max-w-container m-auto flex items-center justify-between">
        <div className="flex items-center justify-center gap-2 w-[]">
          <Link href="/">
            <a>
              <Book size={32} className="text-pink-500" />
            </a>
          </Link>
          <div className="md:flex">
            <form className="hidden md:block">
              <div className="relative">
                <input
                  className="rounded w-[220px] text-sm pl-1 md:h-[24px]"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Busque por palavra chave"
                />
                <div className="absolute top-1 right-1 bg-white w-[18px]">
                  <MagnifyingGlass size={16} />
                </div>
              </div>
            </form>
            <MagnifyingGlass size={22} className="text-pink-500 md:hidden" />
          </div>
        </div>
        <ul className="flex items-center">
          {menuList.map((item) => {
            return (
              <li
                key={item.name}
                className={`w-[48px] h-[48px] flex items-center justify-center text-pink-500 opacity-70 transition-opacity hover:opacity-100 lg:w-[80px] lg:h-[52px] ${
                  pathname === item.path &&
                  "opacity-100 lg:h-[56px] lg:border-b-2 lg:border-b-pink-500"
                } lg:flex-col`}
              >
                <Link
                  className="flex items-center justify-center flex-col"
                  href={item.path}
                  about="Página principal"
                >
                  <a className="flex flex-col items-center justify-center">
                    {item.icon}
                    <span className="hidden lg:block lg:text-xs">
                      {item.name}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
