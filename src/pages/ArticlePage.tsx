import { StyleSheet, View } from 'react-native';
import { TopBar } from '../components/TopBar';
import { useSwipe } from '../utils/useSwipe';
import { FC, useEffect, useMemo, useState } from 'react';
import { Pagination } from '../components/Pagination';
import { TheEndPage } from './TheEndPage';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { IShortArticle } from '../types';
import { ArticleInner } from '../components/ArticleInner';

export const ArticlePage: FC<NativeStackScreenProps<any>> = ({ route, navigation }) => {
	const { item, article } = route.params;
	const [currentArticle, setCurrentArticle] = useState<IShortArticle | null>(null);
	const [page, setPage] = useState<number>(0);

	useEffect(() => {
		fetch(`http://localhost:3001/topics/${item.id}/${article.id}`)
			.then(res => res.json())
			.then((data: IShortArticle) => setCurrentArticle(data))
			.catch(error => console.log(error))
	}, []);

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
						<TopBar item={item} navigation={navigation}/>
						{page === 0 ? <ArticleInner article={article}
													currentArticle={currentArticle}
													onTouchStart={onTouchStart}
													onTouchEnd={onTouchEnd}/>
							: <TheEndPage onSwipeRight={onSwipeRight}/>}
						<Pagination number={2} current={page}/>
					</View>
				)
			)
		}, [currentArticle, page])
	)
}

const styles = StyleSheet.create({
	column: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
});
