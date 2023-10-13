let cs = document.getElementById("connection-status");
let ipA = document.getElementById("ipa");
let Ns = document.getElementById("ns");

function checkstatus() {
  cs.textContent = "checking..";
  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        cs.textContent = "Connected";
        ipA.textContent = data.ip;
        let connection = navigator.connection;
        let network = connection ? connection.downlink + "Mbps" : "Unknown";
        Ns.textContent = network;
      })
      .catch(() => {
        cs.textContent = "disconneted";
        ipA.textContent = "-";
        Ns.textContent = "-";
      });
  } else {
    cs.textContent = "disconneted";
    ipA.textContent = "-";
    Ns.textContent = "-";
  }
}

window.addEventListener("load", checkstatus);
