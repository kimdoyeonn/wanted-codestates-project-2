import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const RankCard = () => {
  const percentage = 66;
  return (
    <div className="text-black bg-white w-60">
      <span>1</span>
      <div>법사케피</div>
      <div>
        승률
        <div className="w-20 h-20">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              strokeLinecap: 'round',
              pathColor: '#0077ff',
              trailColor: '#EBEBEB',
              textColor: '#0077ff',
              textSize: '24px',
            })}
          />
        </div>
        <div>리타이어율</div>
      </div>
    </div>
  );
};

export default RankCard;
