import { StyleSheet, View, ScrollView } from 'react-native';
import { FC } from 'react';
import { ITopic } from '../pages/VerstehenPage';
import { NavigationProp } from '@react-navigation/core';
import { CarouselItem } from './CarouselItem';

interface ICarouselProps {
	items: ITopic[];
	navigation: NavigationProp<any, any>;
}

export const Carousel: FC<ICarouselProps> = ({ items, navigation }) => {
	const handleItemPress = (id) => {navigation.navigate('Details', { id: id })}
	return (
		<View style={styles.wrapper}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{items.map(item =>
						<CarouselItem key={item.id} item={item} disabled={items.indexOf(item) !== 0} onPress={() => handleItemPress(item.id)}/>
				)}
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
});
