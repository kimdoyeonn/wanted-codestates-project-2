import React, { useEffect, useState } from 'react';
import { matchApi } from '../api';
import RankCard from '../components/Rank/RankCard';

const Rank = () => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await matchApi.getAll();
      console.log(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const date = new Date();
    setMonth(date.getMonth() + 1);
    setYear(date.getFullYear());
    setDay(date.getDate());
  }, []);
  return (
    <div>
      <div className="h-[600px] bg-[#005FCC]  text-white">
        <div>
          <div className="text-[22px] font-normal pl-[10px] mb-[10px]">
            {month}월 TMI 랭킹
          </div>
          <div className="inline-block align-top ml-[10px] w-[35px] h-[3px] bg-white"></div>
          <div className="text-[12px] font-normal pl-[10px]">
            랭킹 산정기간 {year}년 {month}월 1일 00:00:00 ~ {year}년 {month}월{' '}
            {30}일 24:00:00
          </div>
          <div className="text-[12px] font-normal pl-[10px]">
            최근 업데이트 {year}년 {month}월 {day}일
          </div>
        </div>
      </div>
      <RankCard />
      <RankCard />
      <RankCard />
    </div>
  );
};

export default Rank;
