import api from "../../interceptor/index.interceptor.js";

const loginUserAPI = async (value) => {
  console.log("fetching started...");
  try {
    const response = await api.post("/auth/local/login", value);
    return response;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};
export default loginUserAPI;
