import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  confirmBooking,
  getBookingAll,
  getBookings,
  rejectBooking,
} from "../../api/booking";
import { getpaymentimg } from "../../api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const handleCount = () => {
    getBookings().then((res) => {
      setCount(res.bookings.length);
    });
  };

  const handleConfirm = (id) => {
    confirmBooking(id).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };
  const handleReject = (id) => {
    rejectBooking(id).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  useEffect(() => {
    handleCount();
    getBookingAll().then((res) => {
      setData(res.bookings);
      console.log(res);
    });
  }, []);
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-quaternary pb-3">Dashboard</h1>
      <div className="bg-quaternary w-72 h-32 rounded-md grid justify-center items-center">
        <h1 className="text-white font-bold text-lg">Total Booking: {count}</h1>
      </div>
      <h1 className="pt-10 text-xl font-bold pb-2 text-quaternary">
        Need Confirm
      </h1>
      <div className=" overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
            <tr className="bg-tertiary">
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                No HP
              </th>
              <th scope="col" className="px-6 py-3">
                Service
              </th>
              <th scope="col" className="px-6 py-3">
                Additional Service
              </th>
              <th scope="col" className="px-6 py-3">
                Waktu
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Payment proof
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((booking) => booking.status == "confirmed")
              .map((booking, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {booking.user.name}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {booking.no_telp}
                  </th>
                  <td className="px-6 py-4">{booking.service.title}</td>
                  <td className="px-6 py-4">
                    {booking.additional_services.map((service) => (
                      <p key={service.id}>{service.name}</p>
                    ))}
                  </td>
                  <td className="px-6 py-4">{booking.waktu}</td>
                  <td className="px-6 py-4">{booking.date_booking}</td>
                  <td className="px-6 py-4">{booking.total_price}</td>
                  <td className="px-6 py-4">
                    {booking.payment_proof?.file_path ? (
                      <a href={getpaymentimg(booking.payment_proof.file_path)}>
                        <img
                          src={getpaymentimg(booking.payment_proof.file_path)}
                          alt="Payment Proof"
                          className="w-52 h-52 object-cover"
                        />
                      </a>
                    ) : (
                      "No Proof"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleReject(booking.id)}
                      className="font-medium text-[#f00] dark:text-blue-500 hover:underline"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleConfirm(booking.id)}
                      className="font-medium text-[#41a81b] dark:text-blue-500 hover:underline"
                    >
                      Confirm
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <h1 className="pt-10 text-xl font-bold pb-2 text-quaternary">
        confirmed
      </h1>
      <div className=" overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
            <tr className="bg-tertiary">
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Service
              </th>
              <th scope="col" className="px-6 py-3">
                Additional Service
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Waktu
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Jumlah Orang
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Payment proof
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {data
              .filter((booking) => booking.status === "completed")
              .map((booking, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {booking.user.name}
                  </th>
                  <td className="px-6 py-4">{booking.service.title}</td>
                  <td className="px-6 py-4">
                    {booking.additional_services.map((service) => (
                      <p key={service.id}>{service.name}</p>
                    ))}
                  </td>
                  <td className="px-6 py-4">
                    <p>{booking.alamat}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{booking.waktu}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{booking.date_booking}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{booking.jumlah_orang}</p>
                  </td>
                  <td className="px-6 py-4">{booking.total_price}</td>
                  <td className="px-6 py-4">
                    {booking.payment_proof?.file_path ? (
                      <a href={getpaymentimg(booking.payment_proof.file_path)}>
                        <img
                          src={getpaymentimg(booking.payment_proof.file_path)}
                          alt="Payment Proof"
                          className="w-16 h-16 object-cover"
                        />
                      </a>
                    ) : (
                      "No Proof"
                    )}
                  </td>
                  {/* <td className="px-6 py-4">
                  <button
                    onClick={() => handleConfirm(booking.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Confirm
                  </button>
                </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <h1 className="pt-10 text-xl font-bold pb-2 text-quaternary">Rejected</h1>
      <div className=" overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
            <tr className="bg-tertiary">
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Service
              </th>
              <th scope="col" className="px-6 py-3">
                Additional Service
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Waktu
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Jumlah Orang
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Payment proof
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {data
              .filter((booking) => booking.status === "cancelled")
              .map((booking, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {booking.user.name}
                  </th>
                  <td className="px-6 py-4">{booking.service.title}</td>
                  <td className="px-6 py-4">
                    {booking.additional_services.map((service) => (
                      <p key={service.id}>{service.name}</p>
                    ))}
                  </td>
                  <td className="px-6 py-4">
                    <p>{booking.alamat}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{booking.waktu}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{booking.date_booking}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{booking.jumlah_orang}</p>
                  </td>
                  <td className="px-6 py-4">{booking.total_price}</td>
                  <td className="px-6 py-4">
                    {booking.payment_proof?.file_path ? (
                      <a href={getpaymentimg(booking.payment_proof.file_path)}>
                        <img
                          src={getpaymentimg(booking.payment_proof.file_path)}
                          alt="Payment Proof"
                          className="w-16 h-16 object-cover"
                        />
                      </a>
                    ) : (
                      "No Proof"
                    )}
                  </td>
                  {/* <td className="px-6 py-4">
                  <button
                    onClick={() => handleConfirm(booking.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Confirm
                  </button>
                </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
