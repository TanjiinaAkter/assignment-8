import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const {
    id,
    title,
    category,
    image,
    image2,
    price,
    categoryBackgroundColor,
    textColor,
  } = donation;
  const cardStyle = {
    color: textColor,
    background: categoryBackgroundColor,
  };

  const btn1 = {
    background: textColor,
  };
  return (
    <div className="card flex flex-col md:card-side bg-base-100 shadow-xl">
      <div className="lg:w-[35%]">
        <img src={image2} className="w-full h-full" />
      </div>
      <div className="card-body rounded-b-lg lg:rounded-r-lg" style={cardStyle}>
        <h2 className="card-title rounded-md ">{category}</h2>
        <p className="text-black">{title}</p>
        <p>{price}</p>
        <div className="card-actions ">
          <Link to={`/card/${id}`}>
            <button className="btn border-none text-white" style={btn1}>
              View Details
            </button>
          </Link>
        </div>
          </div>
          
    </div>
  );
};

export default DonationCard;
