import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-14 items-center bg-[#005FCC] text-[#7CABE2] font-semibold">
      <div className="flex justify-center w-32">
        <span>LOGO</span>
      </div>
      <div className="flex flex-1 transition-all">
        <div
          className="text-center border-2 border-[#005FCC] w-14 hover:text-white hover:border-b-white"
          onClick={() => navigate('/')}
        >
          홈
        </div>
        <div
          className="text-center border-2 border-[#005FCC] w-14 hover:text-white hover:border-b-white"
          onClick={() => navigate('/rank')}
        >
          랭킹
        </div>
      </div>
      <div className="">
        <input type="text" placeholder="닉네임 검색" />
        <button>검색</button>
      </div>
    </div>
  );
};

export default Header;
