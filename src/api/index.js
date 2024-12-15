import axios from "axios";

export const BASE_URL =
  "https://palegoldenrod-llama-288760.hostingersite.com/public";
export const getImg = (image) => {
  return `${BASE_URL}/${image}`;
};

export const getpaymentimg = (image) => {
  return `${BASE_URL}/${image}`;
};

const useClient = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export default useClient;
