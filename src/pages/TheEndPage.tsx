import { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useSwipe } from '../utils/useSwipe';

interface TheEndPageProps {
	onSwipeRight: Function;
}

export const TheEndPage: FC<TheEndPageProps> = ({ onSwipeRight }) => {
	const { onTouchStart, onTouchEnd } = useSwipe(() => { }, onSwipeRight, 6);

	return (
		<View style={styles.main} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
			<Image source={require('../../assets/images/end.png')} />
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFAF5'
	},
});
