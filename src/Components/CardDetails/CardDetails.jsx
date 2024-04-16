import { useLoaderData, useParams } from "react-router-dom";
import "./CardDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveClickedDonateId } from "../../Utility/localstorage";

const CardDetails = () => {
  const loadCardData = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const cuurentId = parseInt(id);
  // console.log(loadCardData, cuurentId);

  const data = loadCardData.find((card) => card.id === cuurentId);
  console.log(data);

  const btnBackground = {
    backgroundColor: data.cardBackgroundColor,
  };
  const toastNotification = () => {
    toast("Donation added successfully!");
    saveClickedDonateId(cuurentId);
  };
  return (
    <div className="mx-auto max-w-5xl my-14">
      <div className="card  bg-base-100 ">
        <div className="image-container w-full image-full">
          <img src={data.image} alt="Shoes" className="image   rounded-t-md" />
          <div className="overlay p-4">
            <button
              onClick={toastNotification}
              className="px-4 py-[7px]   text-base text-white rounded-md"
              style={btnBackground}>
              Donate {data.price}
            </button>
          </div>
        </div>
        <div className="card-body p-0 text-base">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CardDetails;
