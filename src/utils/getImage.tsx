export function getImage(name) {
	switch (name) {
		case "mobility":
			return require('../assets/images/mobility.png')
		case "lifestyle":
			return require('../assets/images/lifestyle.png')
		case "living":
			return require('../assets/images/living.png')
		case "travel":
			return require('../assets/images/travel.png')
		default:
			return require('../assets/images/lifestyle.png')
	}
}
