import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useMemo } from 'react';
import ClockIcon from '../assets/icons/clock.svg';
import { Shadow } from 'react-native-shadow-2';

export const Topic = (props) => {
	return (
		useMemo(() => {
			return(
				<Shadow distance={5} startColor={'#EEEEEE'} endColor={'#FCFCFC'} offset={[3, 4]} style={{width: '100%', paddingLeft: 2, paddingRight: 2, marginBottom: 16}}>
					<View style={styles.article}>
						<Image source={!props.article.image ? require('../assets/images/mock.png') : props.article.image}
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
				</Shadow>
					)
		}, [props])
	)
}

const styles = StyleSheet.create({
	shadow: {
		padding: 2,
		marginTop: 16,
		shadowColor: '#171717',
		shadowOffset: {
			width: -2,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 3,
		elevation: 2,
	},
	article: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#F9F4EF',
		borderRadius: 16,
		height: 144,
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
		height: 144,
		borderRadius: 16,
		resizeMode: 'cover'
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
