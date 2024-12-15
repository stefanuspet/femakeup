import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getpayment } from "../api/Payment";

const Payment = () => {
  const [data, setdata] = useState([]);

  const getdata = async () => {
    getpayment()
      .then((res) => {
        setdata(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
  console.log("testing");

  return (
    <MainLayout>
      <div className="pt-20 bg-[#E3B0B0] w-full min-h-dvh px-5">
        <div className="px-4 pb-3">
          <h1 className="text-wrap text-lg font-bold text-white py-5">
            Payment
          </h1>
          <div className="grid grid-cols-1 justify-center gap-4">
            {data.length === 0 ? (
              <div className="bg-white w-full rounded-md h-44 p-5 flex justify-between">
                <p>No Payment</p>
              </div>
            ) : (
              data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white w-full rounded-md h-44 p-5 flex justify-between"
                >
                  <div>
                    <p>Service : {item.service?.title || "No Service Title"}</p>
                    {item.additional_services?.map((service, index) => (
                      <p key={index}>Additional Service : {service.name}</p>
                    )) || <p>No Additional Services</p>}
                    <p>Booking Date : {item.date_booking}</p>
                    <p>status : {item.status}</p>
                    <p>Total Price : {item.total_price}</p>
                  </div>
                  <div className="flex items-center">
                    {" "}
                    {item.status === "pending" ? (
                      <a
                        href={`/upload_payment/${item.id}`}
                        className="bg-primary text-white p-2 rounded-md"
                      >
                        {" "}
                        Pay Now{" "}
                      </a>
                    ) : item.status === "completed" ? (
                      <span className="bg-quaternary text-white p-2 rounded-md">
                        {" "}
                        Completed{" "}
                      </span>
                    ) : item.status === "cancelled" ? (
                      <span className="bg-[#cc1c1c] text-white p-2 rounded-md">
                        {" "}
                        failed{" "}
                      </span>
                    ) : (
                      <span className="bg-tertiary text-white p-2 rounded-md">
                        {" "}
                        Wait Review{" "}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Payment;
