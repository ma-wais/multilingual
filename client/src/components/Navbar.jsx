import React, { startTransition, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { useTranslation } from "react-i18next";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [language, setLanguage] = useState('English');

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    startTransition(() => {
      i18n.changeLanguage(lng);
    });
  };
  return (
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold cursor-pointer">NWCO'33</h1>
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          t('navbar.Market'),
          t('navbar.Exchange'),
          t('navbar.Tutorials'),
          t('navbar.Wallets')
        ].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <div class="relative inline-block text-left">
          <button
            class="bg-orange-500 py-2 px-4 rounded"
            onClick={() => setShowMenu(!showMenu)}
          >
            {i18n.language}
          </button>
          <ul
            class={`${showMenu ? 'block' : 'hidden'} dropdown-menu absolute z-10 top-10 right-0 bg-orange-300 rounded shadow w-[85px]`}
          > 
          <li>
              <button
                class="block px-4 py-2 text-sm"
                onClick={() => {
                  changeLanguage('en');
                  setShowMenu(false);
                  setLanguage('English');
                }}
              >
                English
              </button>
            </li>
            <li>
              <button
                class="block px-4 py-2 text-sm"
                onClick={() => {
                  changeLanguage('sk');
                  setShowMenu(false);
                  setLanguage('Slovak');
                }}
              >
                Slovak
              </button>
            </li>
            <li>
              <button
                class="block px-4 py-2 text-sm"
                onClick={() => {changeLanguage('ru');
                setShowMenu(false);
                setLanguage('Russian');
                }}
              >
                Russian
              </button>
            </li>
          </ul>
        </div>
          {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
          </li> */}

        </ul>
        <div className="flex relative">
          {!toggleMenu && (
            <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
              )}
            </ul>
          )}
        </div>
      </nav>
  );
};

export default Navbar;