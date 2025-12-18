const getRank = (rank) => {
  return rank == 1 ? `<i class="fa-solid fa-crown crown"></i>` : rank;
};

const getClass = (rank) => {
  return rank == 1 ? "top1" : "";
};

const getMorePlayers = (players) => {
  if (players.length > 0) {
    let html = "";
    for (const player of players) {
      html += `<div class="player">
                <span>${player}</span>
              </div>`
    }
    return `<button class="accordion">
              <i class="fa-solid fa-angle-up"></i>
            </button>
            <div class="more">${html}</div>`;
  }
  return "";
};

const getPlayerHtml = (players) => {
  return `<span>${players[0]}</span>
          ${getMorePlayers(players.slice(1))}`;
};

const getInfoHtml = (datas) => {
  let info = "";
  for (const data of datas) {
    info += `<tr class="${getClass(data.rank)}">
              <td>${getRank(data.rank)}</td>
              <td>${data.spentTime}</td>
              <td style="position:relative;">
                ${getPlayerHtml(data.players)}
              </td>
            </tr>`;
  }
  return info;
};

export const getRankHtml = (data, isTop5 = false) => {
  let html = "";

  if (isTop5 && data.length === 0) {
    html = "<tr><td colspan='3'>暫無勇者</td></tr>"
  } else {
    html = getInfoHtml(data)
  }

  return `<table class="table">
            <thead>
              <tr>
                <th>排名</th>
                <th>時間</th>
                <th>勇者</th>
              </tr>
            </thead>
            <tbody>${html}</tbody>
          </table>`;
};