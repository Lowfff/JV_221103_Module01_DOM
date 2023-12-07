// // let headingElement = document.getElementById("heading");
// // console.log([headingElement]);

// // // Lấy theo class
// // // let itemElement = document.getElementsByClassName("item");
// // // console.log([itemElement]);

// // // Lấy theo querySelector
// // let itemElement = document.querySelectorAll(".item");
// // console.log(itemElement);

// // let inputTextElement = document.querySelector(`input[type="date"]`);
// // console.log(inputTextElement);

// let headingElement = document.getElementById("heading");
// console.log([headingElement]);

// // let itemElement = document.getElementsByClassName("item");
// // console.log([itemElement]);

// let itemElement = document.querySelectorAll(".item");
// console.log([itemElement]);

// const getItem1 = () => {
//   console.log("Gọi hàm");
// };

// const getItem2 = () => {
//   console.log("Gọi hàm");
// };

// // Lất ra phần tử button ở submit
// let btnSubmit = document.querySelector("#btnSubmit");
// btnSubmit.addEventListener(`click`, (evemt) => {
//   console.log("evenn", evemt);
// });

// let emailInput = document.querySelector("#emailInput");
// emailInput.addEventListener("input", (e) => {
//   console.log("Event: ", e.target.value);
// });

// tạo một mảng rỗng lưu trữ các tên
// tạo nút button và input để lấy dữ liệu. Khi click ào nút thì push tên lên lấy từ input vào trong mảng

const arr = [];
let inputElement = document.querySelector("#dataInput");
let btnSubmit = document.querySelector("#btnSubmit");
const radioElement = document.querySelectorAll('input[type = "radio"]');
const countryOption = document.querySelector("#country");
const checkboxElements = document.querySelectorAll('input[type="checkbox"');

let genderValue = "Nam";

const hobbies = [];

const countries = [];

/**
 * Thêm dữ liệu vào mảng
 * @param {*} value Giá trị lấy từ input
 * @param {*} arr Mảng dữ liệu
 */
const handleAddName = (value, arr) => {
  arr.push(value);
};

/**
 * Hiển thị danh sách tên
 */
const loadData = () => {
  console.log(arr);
  console.log(genderValue);
  console.log(hobbies);
  console.log(countries);
};

// Lấy giá trị trong check box
checkboxElements.forEach((element) => {
  element.addEventListener("change", (event) => {
    // Kiểm tra những ô check box nào được checked
    if (event.target.checked) {
      hobbies.push(event.target.value);
    } else {
      // Tìm kiếm phần tử trong mảng
      let index = hobbies.indexOf(event.target.value);
      // Xoá phần tử không tìm thấy khỏi mảng
      if (index !== -1) {
        hobbies.splice(index, 1);
      }
    }
  });
});

btnSubmit.addEventListener("click", () => {
  const dataInput = inputElement.value.trim(); // Trim: loại bỏ khoảng trắng giữa 2 bên
  // Lấy giá trị từ radio
  radioElement.forEach((element) => {
    // Kiểm tra radio nào được checked thì sẽ lấy giá trị của nó
    if (element.checked) {
      genderValue = element.value;
    }
  });

  //  Sau khi submit thì focus vào input
  inputElement.focus();

  handleAddName(dataInput, arr);

  inputElement.value = ""; // Reset giá trị trong ô input

  loadData();
});

countryOption.addEventListener("change", (e) => {
  //   console.log(e.target.value);
  countries[0] = e.target.value;
});
