const togglepasswordbutton = document.getElementById("togglepw")
const pwinput = document.getElementById("password")
togglepasswordbutton.addEventListener("click", function () {
	if (pwinput.type === "password") {
		pwinput.type = "text"
		togglepasswordbutton.textContent = "Hide Password"
		togglepasswordbutton.classList.remove("show-password")
		togglepasswordbutton.classList.add("hide-password")
	} else {
		pwinput.type = "password"
		togglepasswordbutton.textContent = "Show Password"
		togglepasswordbutton.classList.remove("hide-password")
		togglepasswordbutton.classList.add("show-password")
	}
})
