import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../api';

const category = [
  { value: '유저', placeholder: '카트라이더 닉네임을 입력' },
  { value: '카트', placeholder: '카트바디 이름을 입력' },
  { value: '트랙', placeholder: '트랙 이름을 입력' },
];

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSelect = (e) => {
    console.log(e.target.selectedIndex);
    const index = e.target.selectedIndex;
    setSelectedCategory(index);
  };

  const searchData = async () => {
    try {
      const accessId = await userApi.getUserId(searchValue);
      navigate(`/user`, {
        state: {
          accessId,
        },
      });
      // const data = await userApi.getMatchData(accessId);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="w-full h-[670px] bg-[#005FCC]">
      {/* <img
        src="https://tmi.nexon.com/img/assets/covid_left.png"
        alt="covid_left"
      />
      <img src="https://tmi.nexon.com/img/assets/covid_right.png" alt="" /> */}
      <div className="flex items-center justify-center w-full h-full bg-cover bg-main-back">
        <div className="w-[670px] h-[67px] border-4 rounded-full flex justify-center items-center border-white">
          <label
            htmlFor="selectCategory"
            className="text-white w-[100px] h-[40px] text-center border-r-2 font-white border-white flex items-center justify-center"
          >
            <span>{category[selectedCategory].value}</span>
          </label>
          <select
            id="selectCategory"
            className="absolute left-5 w-[90px] h-[40px] opacity-0"
            onChange={handleSelect}
          >
            <option value="유저">유저</option>
            <option value="카트">카트</option>
            <option value="트랙">트랙</option>
          </select>
          <input
            type="text"
            placeholder={category[selectedCategory].placeholder}
            className="flex-1 pl-6 text-2xl font-normal text-white placeholder-white placeholder-opacity-50 bg-transparent"
            value={searchValue}
            onChange={handleInput}
            onKeyUp={(e) => {
              if (e.key === 'Enter') searchData();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
