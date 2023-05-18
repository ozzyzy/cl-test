import { StyleSheet, View, ScrollView, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { getImage } from '../utils/getImage';
import { LinearGradient } from 'expo-linear-gradient';
import { getGradient } from '../utils/getGradient';
import { getIcon } from '../utils/getIcon';

export const Carousel = (props) => {
	return (
		<View style={styles.wrapper}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{props.items.map(item => {
					return (
						<TouchableOpacity style={styles.item}
										  key={item.id}
										  disabled={props.items.indexOf(item) !== 0}
										  onPress={() => props.navigation.navigate('Details', {id: item.id})}>
							<ImageBackground source={getImage(item.id)}
											 resizeMode="cover"
											 imageStyle={{ borderRadius: 16}}
											 style={styles.image}>
								<LinearGradient
									colors={['transparent', getGradient(item.id)]}
									style={styles.linearGradient}
								/>
								<View style={styles.imageDetails}>
									<View style={styles.icon}>{getIcon(item.id)}</View>
									<Text style={styles.imageText}>{item.name}</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>
					)
				})}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
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
