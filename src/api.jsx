import axios from "axios";

const apiCars = axios.create({
    baseURL: 'https://car-rental-api.goit.global', 
  });

export default apiCars;