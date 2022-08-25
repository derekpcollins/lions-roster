const container = document.getElementById("roster-container");

const cloneTemplate = (id) => {
  // Get the correct device template
  const template = document.getElementById(id);

  // Clone the template content
  const clone = template.content.cloneNode(true);

  return clone;
};

const createPlayersList = (data) => {
  const playersListEl = document.getElementById("players-list");
  // Add ballparks to the page
  data.forEach(function (player) {
    const playerCardTemplate = cloneTemplate("player-card-template");

    const playerNameForImgSrc = player.name.replaceAll(" ", "-").toLowerCase();

    // Populate the element
    playerCardTemplate.querySelector(".number").innerText = player.number;
    playerCardTemplate.querySelector(".position").innerText = player.position;
    playerCardTemplate.querySelector(".name").innerText = player.name;

    playerCardTemplate.querySelector(".photo").src =
      "../assets/img/players/" + playerNameForImgSrc + ".jpg";
    playerCardTemplate.querySelector(".photo").alt = player.name + " photo";
    playerCardTemplate.querySelector(".photo").title = player.name;

    // create the list item element and append it all to the document
    const playerListItem = document.createElement("li");

    playerListItem.appendChild(playerCardTemplate);
    playersListEl.appendChild(playerListItem);
  });
};

fetch("./assets/data/players.json")
  .then((response) => response.json())
  .then((json) => createPlayersList(json));

fetch("./assets/data/last-updated.txt")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.text();
  })
  .then((text) => {
    document.getElementById("last-updated").innerHTML = text;
  })
  .catch((error) => {
    // Handle/report error
  });
