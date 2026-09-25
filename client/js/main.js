// Connects the page UI to the API and displays the current health status.
import { getHealth } from "./api.js";

const apiStatusElement = document.querySelector("#api-status");

getHealth()
  .then(({ status }) => {
    apiStatusElement.textContent = status;
  })
  .catch(() => {
    apiStatusElement.textContent = "unreachable";
  });
