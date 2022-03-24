import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { matchApi, userApi } from '../api';

const Record = (props) => {
  const {
    state: { accessId },
  } = useLocation();

  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const getMatch = async () => {
      const { nickname, matches } = await userApi.getMatchData(accessId);
      setNickname(nickname);
      console.log(matches);
      const { matchResult } = await matchApi.getMatchDetail(
        matches[0].matches[0].matchId,
      );
    };
    getMatch();
  }, []);
  return (
    <main>
      <div>
        <img src="" alt="" />
        <div>{nickname}</div>
      </div>
    </main>
  );
};

export default Record;
