import { FC, useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Carousel } from '../components/Carousel';
import { NavigationProp } from '@react-navigation/core';
import CurveIcon from '../../assets/icons/curve.svg';
import { ITopic } from '../types';


interface IVerstehenPageProps {
	navigation: NavigationProp<any, any>
}

export const VerstehenPage: FC<IVerstehenPageProps> = ({ navigation }) => {
	const [topics, setTopics] = useState<ITopic[] | null>(null);

	useEffect(() => {
		fetch('http://localhost:3001/topics')
			.then(res => res.json())
			.then((data: ITopic[]) => setTopics(data))
			.catch(error => console.log(error))
	}, []);

	const handleCarouselItemPress = (id: string) => { navigation.navigate('Details', { id: id }) }

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.main}>
				<View style={styles.top}>
					<Text style={styles.title}>Verstehen</Text>
					<Text style={styles.description}>Wir helfen dir, den Klimawandel zu verstehen, damit du deinen Einfluss bewusst verringern kannst.</Text>
				</View>
				<View style={styles.curve}>
					<CurveIcon width={40} height={40}></CurveIcon>
				</View>
				<View style={styles.block}>
					<Text style={styles.subtitle}>Deine wichtigsten {'\n'}Themen</Text>
					{topics && <Carousel items={topics} onItemPress={handleCarouselItemPress} />}
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: '#F9F4EF'
	},
	top: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: '#FFFFFF',
		borderBottomLeftRadius: 40,
		paddingLeft: 26,
		paddingBottom: 80,
		paddingTop: 80
	},
	title: {
		fontSize: 42,
		fontWeight: '700',
		lineHeight: 56,
	},
	description: {
		fontSize: 16,
		fontWeight: '400',
		lineHeight: 24,
		marginTop: 35,
	},
	block: {
		paddingLeft: 24,
		paddingRight: 24,
		marginBottom: 20
	},
	subtitle: {
		fontSize: 28,
		fontWeight: '700',
		lineHeight: 40,
		marginTop: 50,
		marginBottom: 38
	},
	curve: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		width: '100%',
		marginTop: -7,
	}
});
