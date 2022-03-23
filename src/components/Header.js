import React from 'react';

const Header = () => {
  return (
    <div className="flex h-14 items-center bg-[#005FCC] text-[#7CABE2] font-semibold">
      <div className="flex justify-center w-32">
        <span>LOGO</span>
      </div>
      <div className="flex-1 transition-all">
        <div className="w-14 text-center hover:text-white hover:border-b-2">
          홈
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
