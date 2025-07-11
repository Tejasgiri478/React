import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const Display = () => {
  const Api_Url = "http://localhost:8080/hotelData";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 6;

  useEffect(() => {
    async function fetchData() {
      const Response = await axios.get(Api_Url);
      setData(Response.data);
    }
    fetchData();
  }, []);
  // Add useNavigate import

  const navigate = useNavigate();

  // Pagination logic can be added here if needed
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <button
        type="button"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 z-3"
        onClick={() => navigate("/")}
        style={{ position: "fixed", top: "20px", right: "20px" }}
      >
        Go to Inquiry
      </button>
      {currentPosts ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-15">
            {currentPosts.map((item, id) => (
              <div
                key={id}
                className="card bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-bold mb-2 text-blue-700">
                  {item.fname}
                </h2>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Email:</span> {item.email}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Room Type:</span>{" "}
                  {item.select}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Date:</span> {item.date}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Guests:</span> {item.number}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Request:</span>{" "}
                  {item.textarea}
                </p>
              </div>
            ))}
          </div>
          <Pagination
            totalPosts={data.length}
            postPerPage={postPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <p className="text-center text-gray-500 mt-10">Loading...</p>
      )}
    </>
  );
};

export default Display;
