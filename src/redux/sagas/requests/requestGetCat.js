import axios from "axios";

export function requestGetCat() {
  return axios.request({
    method: "get",
    url: "https://api.thecatapi.com/v1/images/search"
  });
}
