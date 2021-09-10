const dropDownButton = document.getElementById("dropDown");
const navBarLinks = document.getElementById("navBarLinks");

dropDownButton.addEventListener("click", () => {
	navBarLinks.classList.toggle("active")
})
