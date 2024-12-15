import useClient from "./index";

export const getpayment = async () => {
  try {
    const res = await useClient.get("/userbookings", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const uploadPayment = async (formData) => {
  try {
    const res = await useClient.post("/payment-proofs", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
