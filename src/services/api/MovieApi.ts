import axios from 'axios';

export const Api = 'https://staging.qfxcinemas.com:2005/';

export const GET = async (url: any) => {
  const API_URL = `${Api}${url}`;

  const response = await axios.get(API_URL);
  return response;
};
