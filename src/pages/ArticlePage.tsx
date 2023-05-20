import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { TopBar } from '../components/TopBar';
import { useSwipe } from '../utils/useSwipe';
import { FC, useEffect, useMemo, useState } from 'react';
import ClockIcon from '../../assets/icons/clock.svg';
import { formatDate } from '../utils/formatDate';
import { Pagination } from '../components/Pagination';
import { TheEndPage } from './TheEndPage';
import Svg, { Path } from 'react-native-svg';
import { IArticle, IFullTopic } from './DetailsPage';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';


interface IArticlePageProps {
	route: IParams;
	navigation: NativeStackNavigationProp<any, any>;
}

interface IParams {
	params: {
		id: string;
		item: IFullTopic;
		article: IArticle;
	}
}

export const ArticlePage: FC<IArticlePageProps> = ({ route, navigation }) => {
	const { id, item, article } = route.params;
	const [currentArticle, setCurrentArticle] = useState<IShortArticle>(null);
	const [page, setPage] = useState<number>(0);

	useEffect(() => {
		fetch(`http://localhost:3001/topics/${item.id}/${id}`)
			.then(res => res.json())
			.then((data: IShortArticle) => setCurrentArticle(data))
			.catch(error => console.log(error))
	}, []);

	let date: string;
	if (currentArticle) {
		date = formatDate(new Date(currentArticle.publishedAt));
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
				currentArticle && (
					<View style={styles.column}>
						<TopBar item={item} navigation={navigation}></TopBar>
						{page === 0 ? (
							<View style={styles.main} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
								<Image source={!article.image ? require('../../assets/images/mock.png') : article.image}
												 style={styles.image}
												 resizeMode={'cover'}/>
								<View style={styles.curve}>
									<Svg
										width={`${50}`}
										height={`${50}`}
										fill="#FFFAF5"
										strokeWidth={1}
										viewBox={`0 0 ${200} ${200}`}>
										<Path
											d={`M0 0L0 ${200}L${200} ${200}Q${30} ${
												200 - 30
											} 0 0 `}
										/>
									</Svg>
								</View>
								<View style={styles.details}>
									<Text style={styles.title}>{article.title}</Text>
									<View style={styles.row}>
										<View style={styles.clock}>
											<ClockIcon width={13} height={13} style={styles.clockIcon}/>
											<Text style={styles.articleText}>{article.readingTime} min</Text>
										</View>
										<Text style={styles.articleText}>{date}</Text>
									</View>
									<ScrollView showsVerticalScrollIndicator={false}>
										<Text style={styles.description}>{currentArticle.description}</Text>
									</ScrollView>
								</View>
							</View>
						) : <TheEndPage onSwipeRight={onSwipeRight}/>}
						<Pagination number={2} current={page}/>
					</View>
				)
			)
		}, [currentArticle, page])
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
		position: 'absolute',
		bottom: 0,
		height: '60%',
		width: '100%',
		paddingTop: 64,
		paddingLeft: 24,
		paddingRight: 24,
		borderTopRightRadius: 36,
		backgroundColor: '#FFFAF5',
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
		maxHeight: '45%',
	},
	column: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	curve: {
		position: 'absolute',
		left: -2,
		top: '33%',
	}
});

interface IShortArticle {
	id: string;
	publishedAt: number;
	description: string;
}
