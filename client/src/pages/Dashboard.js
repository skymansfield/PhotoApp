import { createContext, useState } from "react";
import Jumbutron from "../components/Jumbutron";
import SearchField from "../components/SearchField";
import Images from "../components/Images";
import UseAxios from "../Hooks/useAxios";
export const ImageContext = createContext();

const Dashboard = () => {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = UseAxios(
    `search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
       <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
};

export default Dashboard;
