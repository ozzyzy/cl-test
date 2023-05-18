import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';

export const Pagination = ({number, current}) => {
	let screenWidth = (Dimensions.get('window').width - 48 - 2) / number;
	return (
		<View style={styles.main}>
			{
				[...Array(number)].map((v, i) => <View key={i}
													   style={[{width: screenWidth}, styles.page, i <= current ? styles.dark : styles.light]}></View>)
			}
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#FFFAF5',
		height: 52,
		paddingLeft: 24,
		paddingRight: 24
	},
	page: {
		height: 4
	},
	light: {
		backgroundColor: '#EEE7E0'
	},
	dark: {
		backgroundColor: '#12173D'
	}
});
