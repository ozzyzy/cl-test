import { FC, useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { TopBar } from '../components/TopBar';
import { Topic } from '../components/Topic';

export const DetailsPage: FC = (props: NativeStackScreenProps<any>) => {
	const [topic, setTopic] = useState(null);
	useEffect(() => {
		fetch(`http://localhost:3001/topics/${props.route.params.id}`)
			.then(res => res.json())
			.then((data: IFullTopic) => setTopic(data))
			.catch(error => console.log(error))
	}, []);

	const $topicList = useMemo(() => {
		return (
			!topic || !topic.articles ? null : (
				<ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={styles.list}>
					{topic.articles.map(article => {
						return <Topic key={article.id}
									  item={topic}
									  article={article}
									  id={article.id}
									  navigation={props.navigation}></Topic>
					})}
				</ScrollView>
			)
		)
	}, [topic])

	return (
		useMemo(() => {
			return !topic ? null : (
				<View style={styles.main}>
					<TopBar item={topic} navigation={props.navigation}></TopBar>
					<View style={styles.details}>
						<Text style={styles.title}>{topic.title}</Text>
						<Text style={styles.description}>{topic.description}</Text>
						<Text style={styles.ubersicht}>Übersicht</Text>
						{$topicList}
					</View>
				</View>
			)
		}, [topic])
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: '#FFFFFF',
	},
	details: {
		flex: 1,
		width: '100%',
		marginTop: 64,
		paddingLeft: 24,
		paddingRight: 22
	},
	title: {
		fontSize: 22,
		fontWeight: '700',
		lineHeight: 32,
		marginBottom: 6
	},
	description: {
		fontSize: 16,
		fontWeight: '400',
		lineHeight: 24,
		paddingBottom: 33
	},
	ubersicht: {
		fontSize: 18,
		fontWeight: '700',
		lineHeight: 24,
		marginBottom: 26
	},
	list: {
		marginBottom: 20
	}
});

export interface IFullTopic {
	id: string;
	category: string;
	title: string;
	description: string;
	articles: IArticle[];
}

export interface IArticle {
	id: string;
	title: string;
	shortDescription: string;
	readingTime: number;
	image: null | string;
}

