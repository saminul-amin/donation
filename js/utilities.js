function buttonPress(id1, id2) {
  const btn1 = document.getElementById(id1);
  const btn2 = document.getElementById(id2);

  btn1.addEventListener("click", function () {
    btn1.classList.add("bg-[#B4F461]");
    btn2.classList.remove("bg-[#B4F461]");
  });
  btn2.addEventListener("click", function () {
    btn2.classList.add("bg-[#B4F461]");
    btn1.classList.remove("bg-[#B4F461]");
  });
}

function amountGiven(id) {
  const amount = document.getElementById(id);
  amountValue = parseFloat(amount.value);
  return amountValue;
}
