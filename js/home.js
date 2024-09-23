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
const ul = document.getElementById('history-part');

const str1 = 'is Donated for Flood at Noakhali, Bangladesh';
const str2 = 'is Donated for Flood Relief in Feni, Bangladesh';
const str3 = 'is Donated for Aid for Injured in the Quota Movement';

// const item = <li class="border-2 rounded-lg px-6 py-4"></li>;

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

    const date = new Date();
    const li = document.createElement('li');
    li.innerHTML = `
    <li class="border-2 rounded-lg px-6 py-4 mb-6">
        <p class="font-bold mb-3">${taka} Taka ${str1}</p>
        <p class="font-light">Date: ${date}</p>
    </li>
    `;
    ul.appendChild(li);
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

    const date = new Date();
    const li = document.createElement('li');
    li.innerHTML = `
    <li class="border-2 rounded-lg px-6 py-4 mb-6">
        <p class="font-bold mb-3">${taka} Taka ${str1}</p>
        <p class="font-light">Date: ${date}</p>
    </li>
    `;
    ul.appendChild(li);
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

    const date = new Date();
    const li = document.createElement('li');
    li.innerHTML = `
    <li class="border-2 rounded-lg px-6 py-4 mb-6">
        <p class="font-bold mb-3">${taka} Taka ${str1}</p>
        <p class="font-light">Date: ${date}</p>
    </li>
    `;
    ul.appendChild(li);
  }
});
