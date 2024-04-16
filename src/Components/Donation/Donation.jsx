import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { checkExistStorageId } from "../../Utility/localstorage";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const donationData = useLoaderData();
  const [donationCards, setDonationCards] = useState([]);
  const [slicedcards, setSlicedcards] = useState(4);
  console.log(slicedcards);
  // console.log(donationCards);
  // console.log(slicedcards);
  useEffect(() => {
    const getLocalStorageItem = checkExistStorageId();
    // console.log(getLocalStorageItem)
    if (donationData.length > 0) {
      const putDonations = [];
      for (const id of getLocalStorageItem) {
        const donations = donationData.find((donation) => donation.id === id);
        if (donations) {
          putDonations.push(donations);
          // console.log(putDonations);
        }
      }
      setDonationCards(putDonations);
    }
  }, []);

  return (
    <div className="md:max-w-5xl md:mx-auto">
      <h1 className="mx-7 text-center text-red-600 font-semibold text-3xl my-10">
        Total donation : {donationCards.length}
      </h1>
      <div className="mx-7 mb-9 lg:mx-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        {donationCards.slice(0, slicedcards).map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
      <div
        className={`my-8 flex justify-center items-center ${
          slicedcards === donationCards.length ? "hidden" : ""
        }`}>
        <button
          onClick={() => setSlicedcards(donationCards.length)}
          className="btn text-white bg-black">
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
