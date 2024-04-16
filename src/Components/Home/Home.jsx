import { useLoaderData } from "react-router-dom";
import HomeCards from "../HomeCards/HomeCards";
import { useContext } from "react";
import { InputContext } from "../Root/Root";

const Home = () => {
  const loadAllCards = useLoaderData();
  const { inputValue } = useContext(InputContext);
  const filteredCards = loadAllCards.filter((card) =>
    card.category.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className="grid grid-cols-1 mx-4 my-10 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-auto max-w-5xl">
      {filteredCards.map((allcards) => (
        <HomeCards key={allcards.id} allcards={allcards}></HomeCards>
      ))}
    </div>
  );
};

export default Home;

