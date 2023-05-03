import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../context/contextApi';
import Loader from '../shared/Loader';
import { SlMenu } from 'react-icons/sl';
import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FiBell } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (
      (event?.key === 'Enter' || event === 'searchButton') &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0];
  return (
    <div className="sticky border-b border-b-gray-800  top-0 z-20 flex flex-row items-center justify-between px-4 h-14 md:px-5 bg-[#000000f2]">
      {loading && <Loader />}
      <div className="flex items-center h-5">
        {pageName !== 'video' && (
          <div
            className="flex md:hidden md:mr-6 curso items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-xl text-white" />
            ) : (
              <SlMenu className="text-xl text-white" />
            )}
          </div>
        )}

        <Link to="/" className="flex items-center h-5 ">
          <img
            src="./images/yt-logo.png"
            alt="Youtube"
            className="hidden h-full dark:md:block"
          />
          <img
            src="./images/yt-logo-mobile.png"
            alt="Youtube"
            className="h-full md:hidden "
          />
        </Link>
      </div>
      <div className="flex items-center group">
        <div className="flex h-8 md:h-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="items-center justify-center hidden w-10 group-focus-within:flex">
            <IoIosSearch className="text-xl text-white" />
          </div>
          <input
            type="text"
            className="pl-5 pr-5 text-white bg-transparent outline-none md:mp-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            placeholder="Search"
          />
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
          {' '}
          <IoIosSearch className="text-xl text-white " />
        </button>
      </div>
      <div className="flex items-center ">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-xl text-white cursor-pointer" />
          </div>
          <div className="flex items-center ml-2 justify-center w-10 h-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-xl text-white cursor-pointer" />
          </div>
        </div>
        <div className="flex w-8 h-8 overflow-hidden rounded-full md:ml-4">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/40.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
