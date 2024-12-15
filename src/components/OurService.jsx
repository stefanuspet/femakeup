import React, { useState, useEffect } from "react";
import img from "../assets/images/bg-img.jpg";
import { getServices } from "../api/Service";
import { getImg } from "../api";
const OurService = () => {
  const [data, setData] = useState([]); // State untuk menyimpan data layanan
  const [loading, setLoading] = useState(true); // State untuk loading

  const fetchData = () => {
    getServices()
      .then((response) => {
        setData(response);
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#C48085]">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div id="service" className="w-full h-full bg-[#C48085]">
      <h1 className="text-xl text-center font-bold text-white py-2">
        Our Service
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center bg-[#E3B0B0] py-10">
        {data.map((service) => (
          <div key={service.id} className="bg-white rounded-md w-4/6">
            <div className="w-full bg-white rounded-md overflow-hidden">
              <img
                src={getImg(service.img)} // Gunakan gambar dari API atau fallback ke img
                alt={service.title}
                className="w-full h-80 object-cover"
              />
              <div className="px-2">
                <h1 className="text-center py-2 font-bold">{service.title}</h1>
                <div className="py-3">
                  <p className="italic font-normal">{service.description}</p>
                  <ul className="list-disc px-5">
                    {service.details?.map((detail, index) => (
                      <li key={index}>{detail}</li> // Render list detail jika ada
                    ))}
                  </ul>
                  <div className="flex justify-center pt-5">
                    <a
                      href={`/services/${service.id}`} // Link detail untuk setiap service
                      className="bg-[#E3B0B0] text-white px-2 py-1 rounded-md"
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
