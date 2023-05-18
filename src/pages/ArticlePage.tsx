import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import { TopBar } from '../components/TopBar';
import { useSwipe } from '../utils/useSwipe';
import { useEffect, useMemo, useState } from 'react';
import ClockIcon from '../assets/icons/clock.svg';
import { formatDate } from '../utils/formatDate';
import { Pagination } from '../components/Pagination';
import { TheEndPage } from './TheEndPage';

export const ArticlePage = (props) => {
	const [article, setArticle] = useState(null);
	useEffect(() => {
		fetch(`http://localhost:3001/topics/${props.route.params.item.id}/${props.route.params.id}`)
			.then(res => res.json())
			.then(data => setArticle(data))
			.catch(error => console.log(error))
	}, []);

	const [page, setPage] = useState(0);

	let date: string;
	if (article) {
		date = formatDate(new Date(article.publishedAt));
	}

	const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
	function onSwipeLeft() {
		setPage(1);
	}

	function onSwipeRight() {
		setPage(0);
	}
	return (
		useMemo(() => {
			return (
				!article ? null : (
					<View style={styles.column}>
						{page === 0 ? (
							<View style={styles.main} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
								<TopBar item={props.route.params.item} navigation={props.navigation}></TopBar>
								<ImageBackground source={require('../assets/images/mock.png')}
												 resizeMode={'cover'}
												 imageStyle={{ borderBottomLeftRadius: 36}}
												 style={styles.image}/>
								<View style={styles.details}>
									<Text style={styles.title}>{props.route.params.article.title}</Text>
									<View style={styles.row}>
										<View style={styles.clock}>
											<ClockIcon width={13} height={13} style={styles.clockIcon}/>
											<Text style={styles.articleText}>{props.route.params.article.readingTime} min</Text>
										</View>
										<Text style={styles.articleText}>{date}</Text>
									</View>
									<ScrollView showsVerticalScrollIndicator={false}>
										<Text style={styles.description}>{article.description}</Text>
									</ScrollView>
								</View>
							</View>
						) : <TheEndPage onSwipeRight={onSwipeRight}/>}
						<Pagination number={2} current={page}/>
					</View>
				)
			)
		}, [article, page])
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: '#FFFAF5',
	},
	details: {
		flex: 1,
		width: '100%',
		marginTop: 64,
		paddingLeft: 24,
		paddingRight: 24
	},
	title: {
		fontSize: 28,
		fontWeight: '700',
		lineHeight: 40,
		marginBottom: 24
	},
	clock: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	clockIcon: {
		marginRight: 6
	},
	articleText: {
		fontSize: 12,
		lineHeight: 16,
		flexWrap: 'wrap'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
	description: {
		fontSize: 16,
		lineHeight: 24,
		marginTop: 20
	},
	image: {
		flex: 1,
		width: '100%',
		maxHeight: 394,
	},
	column: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
});
