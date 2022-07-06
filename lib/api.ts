import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 60 * 60,
});

const api = axios.create({
  baseURL: "https://www.abibliadigital.com.br/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
  adapter: cache.adapter,
});

export default api;
