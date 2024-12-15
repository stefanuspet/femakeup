import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { uploadPayment } from "../api/Payment";
import { useNavigate, useParams } from "react-router-dom";
import { getBookingById } from "../api/booking";

const PaymentProof = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    booking_id: param.id,
    file: null,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("booking_id", formData.booking_id);
    data.append("file", formData.file);
    uploadPayment(data)
      .then((res) => {
        console.log(res);
        navigate("/payment");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataBooking = async () => {
    getBookingById(param.id)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataBooking();
  }, []);
  console.log(data);
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-quaternary">
        {" "}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
        >
          {" "}
          <h1 className="text-2xl font-bold mb-4">Upload Payment Proof</h1>{" "}
          <div className="mb-4 hidden">
            {" "}
            <label
              htmlFor="booking_id"
              className="block text-gray-700 font-bold mb-2"
            >
              {" "}
              Booking ID{" "}
            </label>{" "}
            <input
              disabled
              type="text"
              id="booking_id"
              name="booking_id"
              value={formData.booking_id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />{" "}
          </div>{" "}
          <div className="mb-4">
            <label
              htmlFor="service"
              className="block text-gray-700 font-bold mb-2"
            >
              {" "}
              Service{" "}
            </label>{" "}
            <input
              readOnly
              type="text"
              id="service"
              name="service"
              value={data.service?.title}
              className="w-full px-3 py-2 border rounded"
              required
            />{" "}
          </div>{" "}
          <div className="mb-4">
            {" "}
            <label
              htmlFor="file"
              className="block text-gray-700 font-bold mb-2"
            >
              {" "}
              Upload File (jpg, png, pdf){" "}
            </label>{" "}
            <input
              type="file"
              id="file"
              name="file"
              accept=".jpg,.png,.pdf"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />{" "}
          </div>{" "}
          <div className="mb-4">
            <p className="block text-gray-700 font-bold mb-2">Payment Va</p>
            <p className="font-semibold italic">
              No. Rek BCA A.N. Atika Putri Fatharani 0882627703
            </p>
          </div>
          <button
            type="submit"
            className="bg-quaternary text-white px-4 py-2 rounded hover:bg-primary-dark"
          >
            {" "}
            Submit{" "}
          </button>{" "}
        </form>{" "}
      </div>
    </MainLayout>
  );
};

export default PaymentProof;
