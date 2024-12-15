import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import bgImage from "../assets/images/bg-img.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { getServicesById } from "../api/Service";
import { getImg } from "../api";
import { storeBooking } from "../api/booking";

const Booking = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [data, setData] = useState({
    title: "",
    description: "",
    duration: "",
    price: 0,
    additional_services: [],
    portfolio: [],
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);

  const [formData, setFormData] = useState({
    service_id: param.id,
    date_booking: "",
    total_price: 0,
    alamat: "",
    hijabdo_hairdo: "",
    waktu: "",
    jumlah_orang: 1,
    acara: "",
    no_telp: "",
    additional_services: [], // Layanan tambahan yang dipilih
  });

  const handleFromDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePeopleChange = (event) => {
    const { value } = event.target;
    const jumlahOrang = Math.max(1, parseInt(value, 10) || 1); // Pastikan minimal 1 orang
    setFormData((prevFormData) => ({
      ...prevFormData,
      jumlah_orang: jumlahOrang,
    }));
    updateTotalPrice(jumlahOrang, selectedServices);
  };

  const handleCheckboxChange = (event, service) => {
    const servicePrice = service.price || 0;
    const isChecked = event.target.checked;

    setSelectedServices((prevSelected) => {
      const newSelected = isChecked
        ? [...prevSelected, service]
        : prevSelected.filter(
            (selectedService) => selectedService.id !== service.id
          );

      setFormData((prevFormData) => ({
        ...prevFormData,
        additional_services: newSelected.map((s) => s.id),
      }));

      updateTotalPrice(formData.jumlah_orang, newSelected);
      return newSelected;
    });
  };

  const updateTotalPrice = (jumlahOrang, selectedServices) => {
    const servicePrice = data.price || 0;
    const additionalPrice = selectedServices.reduce(
      (total, service) => total + service.price,
      0
    );

    const newTotalPrice = jumlahOrang * servicePrice + additionalPrice;

    setTotalPrice(newTotalPrice);
    setFormData((prevFormData) => ({
      ...prevFormData,
      total_price: newTotalPrice,
    }));
  };

  const fetchData = async () => {
    try {
      const response = await getServicesById(param.id);
      setData(response);
      const initialPrice = response.price || 0;
      setTotalPrice(initialPrice);
      setFormData((prevFormData) => ({
        ...prevFormData,
        total_price: initialPrice,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(formData);
  const handleSubmit = async () => {
    const bookingData = {
      ...formData,
    };

    try {
      const response = await storeBooking(bookingData);
      console.log(response);
      // Redirect atau tampilkan notifikasi setelah booking berhasil
      navigate("/payment"); // Arahkan ke halaman terima kasih setelah pemesanan berhasil
    } catch (error) {
      console.error("Error creating booking", error);
    }
  };

  return (
    <MainLayout>
      <div className="pt-20 bg-[#C48085] w-full h-full lg:px-20">
        <img
          src={getImg(data.img)}
          alt=""
          className="lg:w-full lg:h-96"
          style={{ objectFit: "cover", objectPosition: "80% 35%" }}
        />
        <div className="px-4 py-5 bg-[#E3B0B0]">
          <h1 className="text-wrap text-lg font-bold text-white">
            {data?.title}
          </h1>
          <p className="text-wrap text-lg font-normal text-white">
            {data.portfolio && data.portfolio.length > 0
              ? data.portfolio[0].title
              : "No portfolio available"}
          </p>
          <p className="text-justify text-white">{data?.description}</p>
          <div className="py-5  text-white">
            <table>
              <tbody>
                <tr>
                  <td>Duration</td>
                  <td className="px-2">:</td>
                  <td>{data.duration}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td className="px-2">:</td>
                  <td>Rp {data.price}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td className="px-2">:</td>
                  <td>Customer's Place</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Services Section */}

          <div className="py-10">
            <div className="bg-white bg-opacity-25 p-6 rounded-lg w-full max-w-xl shadow-md">
              <h2 className="text-lg font-bold mb-4">Form Booking</h2>
              <div className="mb-4">
                <label
                  htmlFor="no_telp"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  No Telp
                </label>
                <input
                  type="text"
                  name="no_telp"
                  id="no_telp"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan No Telp"
                  onChange={(e) => handleFromDataChange(e)}
                  value={formData.no_telp}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="alamat"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Alamat
                </label>
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan alamat"
                  onChange={(e) => handleFromDataChange(e)}
                  value={formData.alamat}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="date_booking"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tanggal
                </label>
                <input
                  type="date"
                  name="date_booking"
                  id="date_booking"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan tanggal"
                  onChange={(e) => handleFromDataChange(e)}
                  value={formData.date_booking}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="acara"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Acara
                </label>
                <input
                  type="text"
                  name="acara"
                  id="acara"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan acara"
                  onChange={(e) => handleFromDataChange(e)}
                  value={formData.acara}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="jumlah_orang"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Jumlah Orang
                </label>
                <input
                  min={1}
                  type="number"
                  name="jumlah_orang"
                  id="jumlah_orang"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan jumlah orang"
                  onChange={(e) => handlePeopleChange(e)}
                  value={formData.jumlah_orang}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="hijabdo_hairdo"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Hijabdo/Hairdo
                </label>
                <input
                  type="text"
                  name="hijabdo_hairdo"
                  id="hijabdo_hairdo"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan pilihan"
                  onChange={(e) => handleFromDataChange(e)}
                  value={formData.hijabdo_hairdo}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="waktu"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Waktu Acara
                </label>
                <input
                  type="time"
                  name="waktu"
                  id="waktu"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan waktu acara"
                  onChange={(e) => handleFromDataChange(e)}
                  value={formData.waktu}
                />
              </div>
              <div>
                <h1 className="font-bold">Additional Costs</h1>
                {data.additional_services.map((service) => (
                  <div key={service.id} className="flex">
                    <input
                      type="checkbox"
                      id={service.id}
                      name={service.name}
                      value={service.name}
                      className="py-2"
                      onChange={
                        (e) => handleCheckboxChange(e, service) // Pass the entire service object
                      }
                    />
                    <label htmlFor={service.id} className="px-2">
                      {service.name} (+ Rp {service.price})
                    </label>
                  </div>
                ))}
              </div>
              <div className="py-5">
                <p className="text-lg font-bold">
                  Total Price : Rp {totalPrice}
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="bg-[#C48085] text-white rounded-md px-3 py-2"
                >
                  Book Now !
                </button>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="py-5">
            <h1 className="text-lg font-bold text-white">Portfolio</h1>
            <div className="overflow-x-auto">
              <div className="flex space-x-1">
                {data.portfolio.map((item) => (
                  <div key={item.id} className="text-center flex-shrink-0">
                    <img
                      src={getImg(item.img_path)}
                      alt={item.title}
                      className="w-60 h-64 object-cover rounded-lg" // Menetapkan tinggi dan menjaga rasio gambar
                    />
                    {/* <p className="text-white mt-2">{item.title}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Booking;
