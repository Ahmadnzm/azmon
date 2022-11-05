import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getAllCars = () => {
  const uri = `${SERVER_URL}/cars`;
  return axios.get(uri);
};




