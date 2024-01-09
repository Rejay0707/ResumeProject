const Button = document.getElementById("btn");
const popup = document.getElementById("popupbox");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const career = document.getElementById("car");
const save = document.getElementById("save");

Button.addEventListener("click", () => {
popup.style.visibility = "visible";
firstname.value = document.querySelector(".name").textContent;
lastname.value = document.querySelector(".name2").textContent;
career.value = document.querySelector(".career").textContent;
});
save.addEventListener("click", () => {
document.querySelector(".name").textContent = firstname.value;
document.querySelector(".name2").textContent = lastname.value;
document.querySelector(".career").textContent = career.value;
popup.style.visibility = "hidden";
});