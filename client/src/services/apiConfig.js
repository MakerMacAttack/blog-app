import axios from "axios";

let apiUrl;

const apiUrls = {
    production: "https://phnx-4-blogapp.herokuapp.com/api", // Come back after local test works //
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
