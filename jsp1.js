var rect = document.querySelector("#center")
rect.addEventListener("mousemove", function (details) {
	var rectangle_location = rect.getBoundingClientRect()
	var inside_val = details.clientX - rectangle_location.left

	if (inside_val < rectangle_location.width / 2) {
		var redcolor = gsap.utils.mapRange(
			0,
			rectangle_location.width / 2,
			255,
			0,
			inside_val
		)
		gsap.to(rect, {
			color: "rgb(${redcolor},0,0)",
			ease: Power4,
		})
	} else {
	}
})
