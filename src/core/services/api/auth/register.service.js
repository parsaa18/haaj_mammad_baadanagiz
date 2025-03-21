import api from "../../interceptor/index.interceptor.js";

export const registerStep1 = async (value) => {
  console.log("fetching started");
  try {
    const response = await api.post("/auth/local/signup/step1", value);

    return response;
  } catch (error) {
    throw new error();
  }
};
export const registerStep2 = async (value) => {
  console.log("fetching started", value);

  try {
    const response = await api.post("/auth/local/signup/step2", value);
    console.log(response);
  } catch (error) {
    throw new error();
  }
};
export const registerStep3 = async (value) => {
  try {
    const response = await api.post("/auth/local/signup/step3", value);
    console.log(response);
  } catch (error) {
    throw new error();
  }
};
