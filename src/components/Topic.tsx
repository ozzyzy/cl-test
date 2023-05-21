import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import ClockIcon from '../../assets/icons/clock.svg';
import { Shadow } from 'react-native-shadow-2';
import { IArticle, IFullTopic } from '../types';

interface ITopicProps {
	key: string;
	item: IFullTopic;
	article: IArticle;
	onTopicPress: VoidFunction;
}

export const TopicComponent: FC<ITopicProps> = ({article, onTopicPress}) => {
	const {image, id, title, shortDescription, readingTime} = article;
	return (
		<Shadow distance={5} startColor='#EEEEEE' endColor='#FCFCFC' offset={[3, 4]} style={{ width: '100%', paddingLeft: 2, paddingRight: 2, marginBottom: 16 }}>
			<View style={styles.article}>
				<Image source={!image ? require('../../assets/images/mock.png') : image}
					   style={styles.image} />
				<TouchableOpacity style={styles.info}
								  disabled={id !== '1'}
								  onPress={onTopicPress}>
					<View>
						<Text style={styles.articleTitle}>{title}</Text>
						<Text style={styles.articleText}>{shortDescription}</Text>
					</View>
					<View style={styles.clock}>
						<ClockIcon width={13} height={13} style={styles.clockIcon} />
						<Text style={styles.articleText}>{readingTime} min</Text>
					</View>
				</TouchableOpacity>
			</View>
		</Shadow>
	)
}

export const Topic = React.memo(TopicComponent);

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
