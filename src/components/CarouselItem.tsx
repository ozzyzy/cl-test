import { FC } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getImage } from '../utils/getImage';
import { LinearGradient } from 'expo-linear-gradient';
import { getColor } from '../utils/getColor';
import { getIcon } from '../utils/getIcon';
import { ITopic } from '../types';

interface ICarouselItem {
	item: ITopic;
	disabled: boolean;
	onPress: VoidFunction;
}

export const CarouselItem: FC<ICarouselItem> = ({ item, disabled, onPress }) => {
	return (
		<TouchableOpacity style={styles.item}
			key={item.id}
			disabled={disabled}
			onPress={() => onPress()}>
			<ImageBackground source={getImage(item.id)}
				resizeMode="cover"
				imageStyle={{ borderRadius: 16 }}
				style={styles.image}>
				<LinearGradient
					colors={['transparent', getColor(item.id)]}
					style={styles.linearGradient}
				/>
				<View style={styles.imageDetails}>
					<View style={styles.icon}>{getIcon(item.id)}</View>
					<Text style={styles.imageText}>{item.name}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		width: 312,
		height: 192,
		marginRight: 16,
	},
	image: {
		flex: 1,
		justifyContent: 'center'
	},
	imageDetails: {
		position: 'absolute',
		bottom: 12,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
	},
	imageText: {
		color: '#FFFFFF',
		fontSize: 28,
		fontWeight: '700',
		lineHeight: 40
	},
	icon: {
		marginRight: 12,
	},
	linearGradient: {
		width: 312,
		height: 96,
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: 16
	}
});
