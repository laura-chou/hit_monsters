import { getMonsterData, getRandomMonsters } from "../js/common.js";

const setStoreItem = (key, value) => {
  sessionStorage.setItem(key, value);
};

const getStoreItem = (key) => {
  return sessionStorage.getItem(key);
};

export const setPlayerInfo = (data) => {
  let playerInfo = data;
  if (!playerInfo) {
    playerInfo = {
      rank: 1,
      life: 100,
      attack: 20,
      originLife: 100,
      originAttack: 20
    };
  }
  if (playerInfo.life < 0) playerInfo.life = 0;
  setStoreItem("player-info", JSON.stringify(playerInfo));
};

export const getPlayerInfo = () => {
  return JSON.parse(getStoreItem("player-info"));
};

export const setMonsterInfo = (data) => {
  let monsterInfo = data;
  if (!monsterInfo) {
    const data = getMonsterData(getPlayerInfo().rank);
    monsterInfo = {
      id: getMonsterId(data.rank),
      life: data.life,
      attack: data.attack
    };
  }
  if (monsterInfo.life < 0) monsterInfo.life = 0;
  setStoreItem("monster-info", JSON.stringify(monsterInfo));
};

export const getMonsterInfo = () => {
  return JSON.parse(getStoreItem("monster-info"));
};

export const setLevelMonsters = () => {
  setStoreItem("level", getRandomMonsters().toString());
};

const getMonsterId = (rank) => {
  const level = getStoreItem("level").split(",");
  return level[rank - 1];
}