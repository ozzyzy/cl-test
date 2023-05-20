import HouseIcon from '../../assets/icons/house.svg';
import LampIcon from '../../assets/icons/lamp.svg';
import TreeIcon from '../../assets/icons/tree.svg';
import SmileIcon from '../../assets/icons/smile.svg';
import { TabNames } from './tabNames';
import { ReactElement } from 'react';

export function getNavigationIcon(name: string, isFocused: boolean): ReactElement {
	console.log(name, isFocused)
	switch (name) {
		case TabNames.Übersicht:
			return <HouseIcon width={19} height={17} fill={isFocused ? '#12173D' : '#AAABB9'}/>
		case TabNames.Verstehen:
			return <LampIcon width={16} height={16} fill={isFocused ? '#12173D' : '#AAABB9'}/>
		case TabNames.Projekte:
			return <TreeIcon width={20} height={20} fill={isFocused ? '#12173D' : '#AAABB9'}/>
		case TabNames.DeinProfil:
			return <SmileIcon width={17} height={17} fill={isFocused ? '#12173D' : '#AAABB9'}/>
		default:
			return <LampIcon width={16} height={16} fill={isFocused ? '#12173D' : '#AAABB9'}/>
	}
}
