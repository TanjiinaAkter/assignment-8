import { useContext } from "react";
import { InputContext } from "../Root/Root";

const Banner = () => {
  const { inputValue, setInputValue } = useContext(InputContext);

  // const handleInputChange = () => {
  //   // setInputValue(e.target.value);
  // };
  const handleSearchClick = () => {
    const getId = document.getElementById('inputbox').value;
    setInputValue(getId);
    console.log(inputValue);
  };
  return (
    <div className="home-container text-center md:mb-[12rem] mt-16">
      <h1 className="text-xl lg:text-3xl font-bold my-8 mx-1 lg:mx-0">
        I Grow By Helping People In Need
      </h1>
      <div className=" justify-center join m-[.6rem] lg:m-0">
        <input
          className="input-bordered join-item input outline-none focus:outline-none  w-[60%] lg:w-[80%]"
          type="text"
          name=""
          id="inputbox"
          // value={inputValue}
          // onChange={handleInputChange}
          placeholder="Search here...."
        />
        <button
          onClick={handleSearchClick}
          className="bg-red-600 text-white join-item border rounded-r-md px-4  lg:px-6 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
