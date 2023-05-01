import React from "react";

<<<<<<< HEAD
const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-72"></div>
    </div>
  ));
=======
const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-72"></div>
    </div>
  );
>>>>>>> da56636f1a512be0ee8f54035226fa2fe3da29e5
};

export default Skeleton;
