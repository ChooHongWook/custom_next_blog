import axios, { AxiosError, AxiosInstance } from 'axios';

interface IError {
  code: number;
  error: string;
  message: string;
}

export type TAxiosError = AxiosError<IError>;

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000/api'
    : process.env.NEXT_PUBLIC_SERVER_URL;

export const fetch: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});
