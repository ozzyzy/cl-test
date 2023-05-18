import { FC } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { getIcon } from '../utils/getIcon';
import ArrowIcon from '../assets/icons/arrow.svg';

export const TopBar: FC = (props) => {
	return (
		<View style={styles.bar}>
			<TouchableOpacity onPress={() => props.navigation.goBack()}>
				<ArrowIcon width={9} height={16} fill={'#FFF'} style={styles.arrow} />
			</TouchableOpacity>
			<View style={styles.icon}>{getIcon(props.item.id)}</View>
			<Text style={styles.text}>{props.item.category}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	bar: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		backgroundColor: '#FF712C',
		height: 80,
		width: '100%',
		paddingBottom: 11,
		paddingLeft: 24
	},
	text: {
		color: '#FFFFFF',
		fontSize: 14,
		fontWeight: '400',
		lineHeight: 24
	},
	icon: {
		marginRight: 12,
		marginLeft: 17,
	},
	arrow: {
		marginBottom: 5
	}
});
