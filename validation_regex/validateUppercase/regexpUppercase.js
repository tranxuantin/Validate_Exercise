const testCase_1 = document.querySelector("#testCase_1");
const testCase_2 = document.querySelector("#testCase_2");
const testCase_3 = document.querySelector("#testCase_3");
const testCase_4 = document.querySelector("#testCase_4");

const listDocument = [testCase_1, testCase_2, testCase_3, testCase_4];

let testCase_1_content = testCase_1.innerText;
let testCase_2_content = testCase_2.innerText;
let testCase_3_content = testCase_3.innerText;
let testCase_4_content = testCase_4.innerText;

const listCheck = [
  testCase_1_content,
  testCase_2_content,
  testCase_3_content,
  testCase_4_content,
];

const checkButton = document.querySelector("#checkButton");
const regexp = /^( )*([A-Z][a-z]+\s)*([A-Z][a-z]+)*$/;

checkButton.addEventListener("click", function () {
  for (let index = 0; index < listCheck.length; index++) {
    let sentence = listCheck[index];
    if (regexp.test(sentence)) {
      listDocument[index].innerText =
        listCheck[index] + ". String's first character is uppercase";
    } else {
      listDocument[index].innerText =
        listCheck[index] + ". String's first character is not Uppercase";
    }
  }
});
