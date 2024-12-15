import useClient from "./index";

export const login = async (formData) => {
  try {
    const res = await useClient.post("/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        accept: "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async (formData) => {
  try {
    const res = await useClient.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const logout = async () => {
  try {
    const res = await useClient.post("/logout");
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
