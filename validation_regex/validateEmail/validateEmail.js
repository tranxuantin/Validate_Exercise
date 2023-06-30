const testCase_1 = document.querySelector("#testCase_1");
const testCase_2 = document.querySelector("#testCase_2");
const testCase_3 = document.querySelector("#testCase_3");
const testCase_4 = document.querySelector("#testCase_4");
const testCase_5 = document.querySelector("#testCase_5");

const listDocument = [
  testCase_1,
  testCase_2,
  testCase_3,
  testCase_4,
  testCase_5,
];

let testCase_1_content = testCase_1.innerText;
let testCase_2_content = testCase_2.innerText;
let testCase_3_content = testCase_3.innerText;
let testCase_4_content = testCase_4.innerText;
let testCase_5_content = testCase_5.innerText;

const listCheck = [
  testCase_1_content,
  testCase_2_content,
  testCase_3_content,
  testCase_4_content,
  testCase_5_content,
];

const regexp = /^[A-Za-z0-9]{5,}@[A-Za-z0-9]{2,}(\.[A-Za-z0-9]{2,})+$/;
const checkButton = document.querySelector("#checkButton");

checkButton.addEventListener("click", function () {
  for (let index = 0; index < listCheck.length; index++) {
    let email = listCheck[index];
    if (regexp.test(email)) {
      listDocument[index].innerText = listCheck[index] + ". /email accepted";
    } else {
      listDocument[index].innerText = listCheck[index] + ". /email not accept";
    }
  }
});
