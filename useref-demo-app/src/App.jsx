import React, { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const fname = useRef("");
  const lname = useRef("");
  const email = useRef("");
  const select = useRef("");
  const number = useRef("");
  const date = useRef("");
  const time = useRef("");
  const depdate = useRef("");
  const textarea = useRef("");
  const yes = useRef(null);
  const no = useRef(null);

  const bookingData = (e) => {
    e.preventDefault(); // Prevents page refresh

    const insert = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
      select: select.current.value,
      number: number.current.value,
      date: date.current.value,
      time: time.current.value,
      depdate: depdate.current.value,
      textarea: textarea.current.value,
      pickup: yes.current.checked ? "Yes" : "No",
    };

    axios
      .post("http://localhost:8080/hotelData", insert)
      .then(() => {
        return Swal.fire({
          title: "Thanks!",
          text: "Your key is sent to your email.",
          icon: "success",
          confirmButtonText: "OK",
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
      })
      .then((result) => {
        if (result.isConfirmed) {
          e.target.reset(); // Reset the form
          navigate("/"); // Navigate after user clicks OK
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      });
  };

  return (
    <>
      <button
        type="button"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 z-3"
        onClick={() => navigate("/display")}
        style={{ position: "fixed", top: "20px", right: "20px" }}
      >
        Go to Display
      </button>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="w-full text-blue-900 text-5xl p-2 mt-5 mx-auto text-center">
          Want To Book Hotel!
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={bookingData}
        >
          <div>
            <label className="block font-medium">Name</label>
            <div className="flex gap-2">
              <input
                type="text"
                ref={fname}
                placeholder="First Name"
                className="w-1/2 p-2 border rounded-md"
              />
              <input
                type="text"
                ref={lname}
                placeholder="Last Name"
                className="w-1/2 p-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              ref={email}
              placeholder="ex: myname@example.com"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Room Type</label>
            <select ref={select} className="w-full p-2 border rounded-md">
              <option>Please Select</option>
              <option>Single Room</option>
              <option>Double Room</option>
              <option>Suite</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">
              Number of Guests <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              ref={number}
              placeholder="e.g., 2"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">
              Arrival Date & Time <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="date"
                ref={date}
                className="w-1/3 p-2 border rounded-md"
              />
              <input
                type="time"
                ref={time}
                className="w-1/3 p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">
              Departure Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              ref={depdate}
              className="w-1/3 p-2 border rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">
              Free Pickup? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  ref={yes}
                  name="pickup"
                  className="mr-2"
                  value="Yes"
                />{" "}
                Yes Please!
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  ref={no}
                  name="pickup"
                  className="mr-2"
                  value="No"
                />{" "}
                No Thanks
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">Special Requests</label>
            <textarea
              rows="4"
              ref={textarea}
              className="w-full p-2 border rounded-md"
              placeholder="Enter any special requests here..."
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
