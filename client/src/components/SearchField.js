<<<<<<< HEAD
import { useContext, useState } from "react";
import { ImageContext } from "../pages/Dashboard.js";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");

  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

=======
import React from "react";

const SearchField = () => {
>>>>>>> da56636f1a512be0ee8f54035226fa2fe3da29e5
  return (
    <div className="flex items-center">
      <input
        type="search"
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        placeholder="Search Anything..."
<<<<<<< HEAD
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2  focus:ring-blue-300 disabled:bg-gray-400"
      >
=======
      />
      <button className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2  focus:ring-blue-300 disabled:bg-gray-400">
>>>>>>> da56636f1a512be0ee8f54035226fa2fe3da29e5
        Search
      </button>
    </div>
  );
};

export default SearchField;
