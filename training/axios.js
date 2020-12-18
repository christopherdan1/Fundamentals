//Bookmark - https://www.npmjs.com/package/axios#features

//Performing a GET request
//async / await
//Performing a POST request
//Creating an instance
//Config Defaults
//Custom Instance

//import .JS or require axios Node.js
import axios from "axios";
const axios = require("axios").default;

//Performing a GET request
axios
  .get("/user?ID=12345")
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});

axios.get().then().catch();
axios
  .get("/user", () => {})
  .then(() => {})
  .catch(() => {});

//async / await
async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getUser();

//Performing a POST request
axios
  .post("/user", {
    firstName: "Chris",
    lastName: "Holder",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

//axios API, axios(config)
axios({
  method: "POST",
  url: "/user/12345",
  data: {
    firstName: "Chris",
    lastName: "Holder",
  },
});
axios({
  method: "GET",
  url: "http://bit.ly/2mTM3nY",
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("bbi__boo.jpg"));
});

axios.get(url[config]);

//Creating an instance
axios.create([config]);
const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

//Config Defaults
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

//Custom Instance
const instance = axios.create({
  baseURL: "https://api.example.com",
});
const instance = axios.create({
  baseURL: "https://api.spotify.com/artist",
});

// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
instance.defaults.timeout = 2500;
