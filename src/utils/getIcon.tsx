import CarIcon from '../assets/icons/car.svg';
import StarIcon from '../assets/icons/star.svg';
import PlaneIcon from '../assets/icons/plane.svg';
import HouseIcon from '../assets/icons/house.svg';

export function getIcon(name) {
	switch (name) {
		case "mobility":
			return <CarIcon width={32} height={24}/>
		case "lifestyle":
			return <StarIcon width={26} height={25}/>
		case "living":
			return <HouseIcon width={32} height={29}/>
		case "travel":
			return <PlaneIcon width={31} height={31}/>
		default:
			return <StarIcon width={26} height={25}/>
	}
}
