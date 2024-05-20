//your JS code here. If required.
let data = document.cookie.split('; ')
let fontsize = document.getElementById("fontsize")
let fontcolor = document.getElementById("fontcolor")
for (let item of data) {
	let [key, value] = item.split("=")
	if (key==='fontsize') {
		fontsize.value = value
	}
	if (key==='fontcolor') {
		fontcolor.value = value
	}
}
let submit = document.querySelector("input[type='submit'][value='Save']")
submit.addEventListener('click', () => {
	document.cookie = `fontsize=${fontsize.value}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
	document.cookie = `fontcolor=${fontcolor.value}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
})