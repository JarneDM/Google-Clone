const imFeeling = [
	"curious",
	"hungry",
	"adventurous",
	"playful",
	"stellar",
	"generous",
	"doodley",
	"trendy",
	"artistic",
	"funny",
]
function randomFeeling() {
	return imFeeling[Math.floor(Math.random() * imFeeling.length)]
}
function capitaliseFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
function randomFeelingString() {
	return capitaliseFirstLetter(randomFeeling())
}
const feelingEl = document.querySelector(".im-feeling")
feelingEl.addEventListener("click", () => {
	let i = 0;
	const interval = setInterval(() => {
		if (i === 8) {
			clearInterval(interval)
		}
		feelingEl.innerText = `I'm Feeling ${randomFeelingString()}`
		i++
	}, 40)
})