const testCase = document.querySelectorAll(".testCase");
const checkButton = document.querySelector("#checkButton");
const regexp = /^[_a-z0-9]{6,}$/;

checkButton.addEventListener("click", function () {
  testCase.forEach(function (checkAccount) {
    let Account = checkAccount.innerText;
    if (regexp.test(Account)) {
      checkAccount.innerText = Account + ". /Account accepted";
    } else {
      checkAccount.innerText = Account + ". /Account not accept";
    }
  });
});
