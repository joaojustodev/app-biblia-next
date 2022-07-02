import axios from "axios";

const api = axios.create({
  baseURL: "https://www.abibliadigital.com.br/api",
  headers: {
    Authorizarion: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

export default api;
