import useClient from "./index";

export const getServices = async () => {
  try {
    const res = await useClient.get("/services", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getServicesById = async (id) => {
  try {
    const res = await useClient.get(`/services/${id}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
