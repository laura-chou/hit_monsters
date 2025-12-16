import { removeStorage } from "../js/store.js";

const getPathName = () => {
  let path = "/";
  if (window.location.pathname.includes("hit_monsters")) {
    path = "/hit_monsters/";
  }
  return path;
}

export const pathName = getPathName();

const readJsonFile = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const monsterInfo = await readJsonFile(`${getPathName()}json/monsterInfo.json`);
const rewardInfo = await readJsonFile(`${getPathName()}json/reward.json`);

export const getMonsterData = (rank) => {
  return monsterInfo.find(info => info.rank === parseInt(rank));
};

export const getRewardData = (rank) => {
  return rewardInfo.find(info => info.rank === parseInt(rank));
};

export const convertToBool = (value) => {
  if (!value) {
    return false;
  }
  return value.toLowerCase() === "true" || value === "1";
};

export const isNullOrEmpty = (value) => {
  if (value == null) {
    return true;
  }
  return value.trim().length === 0;
};

export const accordionEffect = (element) => {
  element.classList.toggle("active");
  let state = "up";
  const angleElement = element.querySelector("i.fa-solid");
  const panel = element.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    state = "down";
  } 
  $(angleElement).attr("class", `fa-solid fa-angle-${state}`);
};

export const randNumberWithMin = (min, max) => {
  const random = Math.random() * (max - min + 1) + min;
  return Math.floor(random);
};

export const getRandomMonsters = () => {
  const nums = new Set();
  while (nums.size < monsterInfo.length) {
    nums.add(randNumberWithMin(1, 6));
  }
  return [...nums];
}

export const getRandomsNoConsecutive = (count, max) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    let num;
    do {
      num = randNumberWithMin(0, max);
    } while (i > 0 && num === result[i - 1]);
    result.push(num);
  }
  return result;
};

export const playAudioEffect = (src) => {
  const audio = new Audio();
  audio.src = `${pathName}music/${src}.mp3`;
  audio.play();
};

export const redirectToHome = () => {
  removeStorage();
  window.location.href = pathName;
};

export const serverError = async () => {
  await Swal.fire({
    icon: "error",
    title: "伺服器錯誤",
    html: `<h3 style="margin:0;">請稍後再試</h3>`,
    timer: 3000,
    showConfirmButton: false,
    allowOutsideClick: false,
    willClose: () => {
      redirectToHome()
    }
  });
};