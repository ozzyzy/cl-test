import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useMemo } from 'react';
import ClockIcon from '../assets/icons/clock.svg';

export const Topic = (props) => {
	return (
		useMemo(() => {
			return(
				<View style={styles.article}>
					<Image source={require('../assets/images/mock.png')}
									 style={styles.image}/>
					<TouchableOpacity style={styles.info}
									  disabled={props.article.id !== '1'}
									  onPress={() => props.navigation.navigate('Article', {id: props.article.id, item: props.item, article: props.article})}>
						<View>
							<Text style={styles.articleTitle}>{props.article.title}</Text>
							<Text style={styles.articleText}>{props.article.shortDescription}</Text>
						</View>
						<View style={styles.clock}>
							<ClockIcon width={13} height={13} style={styles.clockIcon}/>
							<Text style={styles.articleText}>{props.article.readingTime} min</Text>
						</View>
					</TouchableOpacity>
				</View>
			)
		}, [props])
	)
}

const styles = StyleSheet.create({
	article: {
		// flex: 1,
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#F9F4EF',
		marginTop: 16,
		borderRadius: 16,
		height: 144,
		width: 'auto'
	},
	articleTitle: {
		fontSize: 16,
		fontWeight: '700',
		lineHeight: 24,
		marginBottom: 7
	},
	clock: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	articleText: {
		fontSize: 12,
		lineHeight: 16,
		flexWrap: 'wrap'
	},
	image: {
		justifyContent: 'center',
		width: 104,
		borderRadius: 16
	},
	info: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingLeft: 16,
		paddingTop: 14,
		paddingRight: 40,
		paddingBottom: 12,
	},
	clockIcon: {
		marginRight: 6
	}
});
