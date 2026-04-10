import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getNews = async () => {
  const res = await API.get("/news");
  return res.data;
};

export const getLeaders = async () => {
  const res = await API.get("/leaders");
  return res.data;
};