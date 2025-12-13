import { removeStorage } from "../js/store.js";

const getPathName = () => {
  let path = "/";
  if (window.location.pathname.includes("hit_monsters")) {
    path = "/hit_monsters/";
  }
  return path;
}

export const pathName = getPathName();

export const randNumberWithMin = (min, max) => {
  const random = Math.random() * (max - min + 1) + min;
  return Math.floor(random);
};

export const getRandomMonsters = () => {
  const nums = new Set();
  while (nums.size < 3) {
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

export const redirectToHome = () => {
  removeStorage();
  window.location.href = pathName;
};