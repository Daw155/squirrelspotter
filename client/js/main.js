import { getHealth } from "./api.js";

const apiStatusElement = document.querySelector("#api-status");

getHealth()
  .then(({ status }) => {
    apiStatusElement.textContent = status;
  })
  .catch(() => {
    apiStatusElement.textContent = "unreachable";
  });
