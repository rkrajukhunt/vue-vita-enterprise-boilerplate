import Axios from "axios";
import store from "@/store";
import router from "@/router";
import Vue from "vue";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export function isValidResponse(resp) {
  console.log(resp);
  return resp && resp.status === 200 && resp.data.status === 1;
}

export const SMSH = Axios.create({
  baseURL:
    process.env.VUE_APP_API_LOCATION !== undefined
      ? process.env.VUE_APP_API_LOCATION
      : "http://localhost:9000/api"
});

SMSH.interceptors.request.use(config => {
  const loggedInUser = localStorage.getItem("smsh:loggedInUser");
  console.log("got user info", loggedInUser);

  const token = localStorage.getItem("smsh:access_token");
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export const methods = {
  GET: "GET",
  GET_CONFIG: "GET_CONFIG",
  POST: "POST",
  POST_CONFIG: "POST_CONFIG",
  PUT: "PUT",
  PUT_CONFIG: "PUT_CONFIG",
  DELETE: "DELETE"
};

export class APIError {
  errorInfo;

  constructor(err) {
    this.errorInfo = err;
  }

  get getErrorInfo() {
    return this.errorInfo;
  }
}

export const serviceMaker = async (url, method, data = {}, config = {}) => {
  try {
    let result;
  
    switch (method) {
      case "GET": {
        result = await SMSH.get(url);
        break;
      }
      case "GET_CONFIG": {
        result = await SMSH.get(url, config);
        break;
      }
      case "POST": {
        result = await SMSH.post(url, data);
        break;
      }
      case "POST_CONFIG": {
        result = await SMSH.post(url, data, config);
        break;
      }
      case "PUT": {
        result = await SMSH.put(url, data);
        break;
      }
      case "PUT_CONFIG": {
        result = await SMSH.put(url, data, config);
        break;
      }
      case "DELETE": {
        result = await SMSH.delete(url);
        break;
      }
      default: {
        throw "InvalidMethod";
      }
    }
  
    return result;
  } catch (err) {
    console.error("got the error in service :- ", err);
    const { response } = err;
    if (response)
      throw new APIError(err.response);
    else
      throw new APIError({
        data: "Service Temporarily Unavailable"
      });
  }
};
