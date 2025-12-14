import { getMonsterData, getRandomMonsters, convertToBool } from "../js/common.js";

const domain = "http://localhost:3000";
const hitMonstersUrl = `${domain}/hit-monsters`;

const setStoreItem = (key, value) => {
  sessionStorage.setItem(key, value);
};

const getStoreItem = (key) => {
  return sessionStorage.getItem(key);
};

const getMonsterId = (rank) => {
  const level = getStoreItem("level").split(",");
  return level[rank - 1];
}

export const connectServer = () => {
  setStoreItem("connect", false);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: domain,
      method: "GET",
      success: function () {
        setStoreItem("connect", true)
        resolve(true)
      },
      error: function () {
        resolve(false)
      }
    });
  });
};

export const getTime = () => {
  return getStoreItem("time");
};

export const setTime = (value) => {
  setStoreItem("time", value);
};

export const setPlayerInfo = (data) => {
  let playerInfo = data;
  if (!playerInfo) {
    playerInfo = {
      rank: 1,
      life: 100,
      attack: 20,
      originLife: 100,
      originAttack: 20,
      settle: false
    };
  }
  if (playerInfo.life < 0) playerInfo.life = 0;
  setStoreItem("player-info", JSON.stringify(playerInfo));
};

export const getPlayerInfo = () => {
  return JSON.parse(getStoreItem("player-info"));
};

export const isPlayerExist = () => {
  return getPlayerInfo() != undefined;
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

export const removeStorage = () => {
  sessionStorage.removeItem("player-info");
  sessionStorage.removeItem("monster-info");
  sessionStorage.removeItem("level");
  sessionStorage.removeItem("time");
};

export const checkConnect = () => {
  return !convertToBool(getStoreItem("connect"));
}

export const getTopFivePlayers = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${hitMonstersUrl}/top5`,
      method: "GET",
      dataType: "json",
      success: function (response) {
        resolve(response.data)
      },
      error: function (xhr, ajaxOptions, thrownError) {
        resolve(null)
      }
    });
  });
};