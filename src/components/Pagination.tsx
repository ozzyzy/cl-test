import { Dimensions, StyleSheet, View } from 'react-native';
import { FC } from 'react';
import { Shadow } from 'react-native-shadow-2';


interface IPaginationProps {
	number: number;
	current: number;
}

const FULL_PADDING = 52;

export const Pagination: FC<IPaginationProps> = ({ number, current }) => {
	const screenWidth = (Dimensions.get('window').width - FULL_PADDING) / number;

	return (
		<Shadow offset={[3, 4]} style={{ width: Dimensions.get('window').width }}>
			<View style={styles.main}>
				{
					[...Array(number)].map((v, i) => <View key={i}
						style={[{ width: screenWidth }, styles.page, i <= current ? styles.dark : styles.light]} />)
				}
			</View>
		</Shadow>
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
		// возможно можно короткую запись
		paddingLeft: 24,
		paddingRight: 24,
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
