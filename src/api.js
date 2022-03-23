import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yeon-proxy.herokuapp.com/https://api.nexon.co.kr/kart/v1.0',
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTAxMzg0MzQ4IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0ODA0NjA4NiwiZXhwIjoxNjYzNTk4MDg2LCJpYXQiOjE2NDgwNDYwODZ9.2KR3vAppCbdvKlyR3G2vN9KQrsZsrKXmyxgMb512eW0',
  },
});

export const userApi = {
  getUserId: async (nickname) => {
    const {
      data: { accessId },
    } = await api.get(`/users/nickname/${nickname}`);
    return accessId;
  },
};
