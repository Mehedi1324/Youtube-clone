import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavMenuItems from './LeftNavMenuItems';
import { categories } from '../utils/constants';
import { Context } from '../context/contextApi';

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectedCategory(name);
      case 'home':
        return setSelectedCategory(name);
      case 'menu':
        return false;

      default:
        break;
    }
  };
  return (
    <div
      className={`md:block  z-10 w-[240px] translate-x-[-240px] overflow-y-auto h-screen py-4 bg-[#000000f2] absolute md:relative  md:translate-x-0 transition-all ${
        mobileMenu ? 'translate-x-[0px]' : console.log('false')
      }`}
    >
      <div className="flex flex-col px-5 ">
        {categories.map((item) => (
          <div key={item.name}>
            <LeftNavMenuItems
              text={item.type === 'home' ? 'Home' : item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate('/');
              }}
              className={`${
                selectedCategory === item.name ? 'bg-white/[0.15]' : ''
              }`}
            />
            {item.divider && <hr className="my-5 border-white/[0.2]" />}
          </div>
        ))}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by: Mohammad Mehedi Hasan
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
