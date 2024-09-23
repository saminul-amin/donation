const donationButton = document.getElementById("donation-button");
const historyButton = document.getElementById("history-button");
const noakhali = document.getElementById("noakhali-amount");
const feni = document.getElementById("feni-amount");
const quota = document.getElementById("quota-amount");
const noakhaliSubmit = document.getElementById("noakhali-submit");
const feniSubmit = document.getElementById("feni-submit");
const quotaSubmit = document.getElementById("quota-submit");
const noakhaliGot = document.getElementById("noakhali-got");
const feniGot = document.getElementById("feni-got");
const quotaGot = document.getElementById("quota-got");
const totalAmount = document.getElementById("total-amount");

donationButton.addEventListener(
  "click",
  buttonPress("donation-button", "history-button")
);
historyButton.addEventListener(
  "click",
  buttonPress("history-button", "donation-button")
);

historyButton.addEventListener("click", function () {
  document.getElementById("donation-part").classList.add("hidden");
  document.getElementById("history-part").classList.remove("hidden");
});
donationButton.addEventListener("click", function () {
  document.getElementById("history-part").classList.add("hidden");
  document.getElementById("donation-part").classList.remove("hidden");
});

noakhaliSubmit.addEventListener("click", function () {
  const taka = amountGiven("noakhali-amount");
  if (isNaN(taka) === true || taka < 0) {
    alert("Invalid Input");
  } else {
    const prevTaka = parseFloat(noakhaliGot.innerText);
    noakhaliGot.innerText = prevTaka + taka;
    const prevTotal = parseFloat(totalAmount.innerText);
    totalAmount.innerText = prevTotal - taka;
  }
});
feniSubmit.addEventListener("click", function () {
  const taka = amountGiven("feni-amount");
  if (isNaN(taka) === true || taka < 0) {
    alert("Invalid Input");
  } else {
    const prevTaka = parseFloat(feniGot.innerText);
    feniGot.innerText = prevTaka + taka;
    const prevTotal = parseFloat(totalAmount.innerText);
    totalAmount.innerText = prevTotal - taka;
  }
});
quotaSubmit.addEventListener("click", function () {
  const taka = amountGiven("quota-amount");
  if (isNaN(taka) === true || taka < 0) {
    alert("Invalid Input");
  } else {
    const prevTaka = parseFloat(quotaGot.innerText);
    quotaGot.innerText = prevTaka + taka;
    const prevTotal = parseFloat(totalAmount.innerText);
    totalAmount.innerText = prevTotal - taka;
  }
});
