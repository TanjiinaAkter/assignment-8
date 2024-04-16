// import { useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";

const HomeCards = ({ allcards }) => {
  const {
    id,
    image,
    categoryBackgroundColor,
    textColor,
    cardBackgroundColor,
    title,
    category,
  } = allcards;

  const categoryStyle = {
    backgroundColor: categoryBackgroundColor,
    color: textColor,
  };
  const titleColor = {
    color: categoryBackgroundColor,
    fontSize: "1.1rem",
  };
  const backBoody = {
    backgroundColor: cardBackgroundColor,
  };

  return (
    <div className="card w-full  card-compact  shadow-xl">
      <Link to={`/card/${id}`}>
        <div className="w-full mx-auto">
          <img
            className="w-full h-full  rounded-t-md"
            src={image}
            alt="Shoes"
          />
        </div>
        <div className="card-body rounded-b-lg" style={backBoody}>
          <div>
            <button
              className=" font-semibold capitalize  py-[5px] px-1 rounded"
              style={categoryStyle}>
              {category}
            </button>
          </div>
          <h2 className="card-title" style={titleColor}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default HomeCards;
