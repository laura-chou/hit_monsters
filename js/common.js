const getPathName = () => {
  let path = "/";
  if (window.location.pathname.includes("hit_monsters")) {
    path = "/hit_monsters/";
  }
  return path;
}

export const pathName = getPathName();

export const randNumberWithMin = (min, max) => {
  const random = Math.random() * (max - min) + min;
  return Math.round(random);
};