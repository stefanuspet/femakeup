import useClient from "./index";

export const storeBooking = async (formData) => {
  try {
    const res = await useClient.post("/bookings", formData, {
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

export const getBookings = async () => {
  try {
    const res = await useClient.get("/bookings", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getBookingAll = async () => {
  try {
    const res = await useClient.get("/bookings/all", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const confirmBooking = async (id) => {
  try {
    const res = await useClient.post("/bookings/" + id + "/confirm", null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.data;
  } catch (error) {
    return error;
  }
};

export const rejectBooking = async (id) => {
  try {
    const res = await useClient.post("/bookings/" + id + "/reject", null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.data;
  } catch (error) {
    return error;
  }
};

export const getBookingById = async (id) => {
  try {
    const res = await useClient.get("/bookings/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
