import { pathName } from "../js/common.js";

export const playAudioEffect = (src) => {
  const audio = new Audio();
  audio.src = `${pathName}music/${src}.mp3`;
  audio.play();
};

export const calcLifePercent = (currentLife, originLife) => {
  return Math.max(0, Math.min(100, (currentLife / originLife) * 100));
}

export const isPlayerWin = (monsterLife) => {
  return monsterLife === 0;
}

export const getGameRules = () => {
  return `
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <button class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#tab-ui">
          介面說明
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-rule">
          遊戲規則
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-result">
          勝負條件
        </button>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab-ui">
        <div class="d-flex align-items-center justify-content-center mt-4">
          <div class="text-start fw-bold">
            <div>
              <img class="icon" src="${pathName}images/heart.png">
              生命值
            </div>
            <div>
              <img class="icon" src="${pathName}images/punching.png">
              你的攻擊力
            </div>
            <div>
              <img class="icon" src="${pathName}images/claw.png">
              怪獸攻擊力
            </div>
            <div>
              <img class="icon" src="${pathName}images/monster1.png">
              怪獸出現次數
            </div>
          </div>

        </div>
      </div>

      <div class="tab-pane fade" id="tab-rule">
        <img class="mt-4" src="${pathName}images/9grid.jpg" style="width:100px" />
        <ul class="text-start mt-3 mb-0">
          <li>
            <strong>關卡總數：</strong>5
          </li>
          <li>
            <strong>記住順序：</strong>
            怪獸會依照出現次數，依序出現在九宮格內，例如：3 → 7 → 1
          </li>
          <li>
            <strong>依序點擊：</strong>
            怪獸出現後，按照順序點擊九宮格。
          </li>
        </ul>
      </div>

      <div class="tab-pane fade" id="tab-result">
        <ul class="text-start mt-4 mb-0">
          <li>
            <strong>正確攻擊：</strong>
            順序完全正確可攻擊怪獸一次。
          </li>
          <li>
            <strong>錯誤反擊：</strong>
            點錯順序會被怪獸攻擊一次。
          </li>
          <li>
            <strong>死亡重來：</strong>
            如果生命值歸零，遊戲將直接結束。
          </li>
        </ul>
      </div>
    </div>
  `
}