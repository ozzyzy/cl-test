import { FC } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import ClockIcon from '../../assets/icons/clock.svg';
import { formatDate } from '../utils/formatDate';

export const ArticleInner: FC<any> = ({article, currentArticle, onTouchStart, onTouchEnd}) => {
	const date = currentArticle && formatDate(new Date(currentArticle.publishedAt));

	return (
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
		</View>)
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
	curve: {
		position: 'absolute',
		left: -2,
		top: '33%',
	}
});
