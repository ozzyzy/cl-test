import CarIcon from '../assets/icons/car.svg';
import StarIcon from '../assets/icons/star.svg';
import PlaneIcon from '../assets/icons/plane.svg';
import HouseIcon from '../assets/icons/house.svg';
import { ReactElement } from 'react';

export function getIcon(name: string): ReactElement {
	switch (name) {
		case "mobility":
			return <CarIcon width={32} height={24} fill={'#FFF'}/>
		case "lifestyle":
			return <StarIcon width={26} height={25} fill={'#FFF'}/>
		case "living":
			return <HouseIcon width={32} height={29} fill={'#FFF'}/>
		case "travel":
			return <PlaneIcon width={31} height={31} fill={'#FFF'}/>
		default:
			return <StarIcon width={26} height={25} fill={'#FFF'}/>
	}
}
