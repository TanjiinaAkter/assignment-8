const checkExistStorageId = () => {
  const storageData = localStorage.getItem("donationIds");
  if (storageData) {
    const firstlyConvertInJson = JSON.parse(storageData);
    return firstlyConvertInJson;
  } else {
    return [];
  }
};

const saveClickedDonateId = (id) => {
  const getStorageData = checkExistStorageId();
  const machedData = getStorageData.find((dataId) => dataId === id);
  if (!machedData) {
    getStorageData.push(id);
    localStorage.setItem("donationIds", JSON.stringify(getStorageData));
  }
};

export { saveClickedDonateId, checkExistStorageId };
