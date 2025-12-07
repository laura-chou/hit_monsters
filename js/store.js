const setStoreItem = (key, value) => {
  sessionStorage.setItem(key, value);
};

const getStoreItem = (key) => {
  return sessionStorage.getItem(key);
};

export const getLimitTime = () => {
  return getStoreItem("limit-time");
};

export const setLimitTime = (value) => {
  setStoreItem("limit-time", value);
};
