import { StyleSheet, View, ScrollView } from 'react-native';
import { FC } from 'react';
import { CarouselItem } from './CarouselItem';
import { ITopic } from '../types';

interface ICarouselProps {
	items: ITopic[];
	onItemPress: (id: string) => void;
}

export const Carousel: FC<ICarouselProps> = ({ items, onItemPress }) => {
	return (
		<View style={styles.wrapper}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{items.map((item, i) =>
					<CarouselItem key={item.id} item={item} disabled={i !== 0} onPress={() => onItemPress(item.id)} />
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
