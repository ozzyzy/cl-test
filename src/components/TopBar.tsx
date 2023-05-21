import { FC } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { getIcon } from '../utils/getIcon';
import ArrowIcon from '../../assets/icons/arrow.svg';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { getColor } from '../utils/getColor';
import { Shadow } from 'react-native-shadow-2';
import { IFullTopic } from '../types';


interface ITopBarProps {
	item: IFullTopic;
	navigation: NativeStackNavigationProp<any, any>;
}

export const TopBar: FC<ITopBarProps> = ({ item, navigation }) => {
	const color = getColor(item.id);

	return (
		<Shadow distance={4} startColor={'#EEEEEE'} endColor={'#fff'} offset={[3, 4]} style={{ width: Dimensions.get('window').width }}>
			<View style={[styles.bar, { backgroundColor: color }]}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<ArrowIcon width={9} height={16} fill={'#FFF'} style={styles.arrow} />
				</TouchableOpacity>
				<View style={styles.icon}>{getIcon(item.id)}</View>
				<Text style={styles.text}>{item.category}</Text>
			</View>
		</Shadow>
	)
}

const styles = StyleSheet.create({
	bar: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
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
