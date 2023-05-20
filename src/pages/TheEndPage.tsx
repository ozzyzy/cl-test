import { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useSwipe } from '../utils/useSwipe';

interface TheEndPageProps {
	onSwipeRight: Function;
}

export const TheEndPage: FC<TheEndPageProps> = (props) => {
	const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);

	function onSwipeLeft() {
	}

	function onSwipeRight() {
		props.onSwipeRight();
	}

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
