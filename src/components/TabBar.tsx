import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getNavigationIcon } from '../utils/getNavigationIcon';
import { TabNames } from '../utils/tabNames';
import { Shadow } from 'react-native-shadow-2';
import { FC } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export const TabBar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
	return (
		<Shadow offset={[4, 3]} style={{ width: Dimensions.get('window').width }}>
			<View style={styles.main}>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];

					const label = (() => {
						if (options.tabBarLabel !== undefined) {
							return options.tabBarLabel;
						}
						if (options.title !== undefined) {
							return options.title;
						}
						return route.name;
					})();

					const isFocused = state.index === index;
					const isVerstehen = route.name === TabNames.Verstehen;
					const onPress = () => {
						if (!isVerstehen) {
							return;
						}

						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});
						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					return (
						<TouchableOpacity
							key={route.key}
							onPress={onPress}
							style={styles.button}
							disabled={!isVerstehen}
						>
							{getNavigationIcon((label as string), isFocused)}
							<Text style={[styles.buttonText, isFocused ? styles.dark : styles.light]}>
								{label as string}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</Shadow>
	);
}

const styles = StyleSheet.create({
	main: {
		height: 52,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF'
	},
	button: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 10,
		lineHeight: 14,
		marginTop: 4
	},
	dark: {
		color: '#12173D'
	},
	light: {
		color: '#41445B'
	},
});
