import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getNavigationIcon } from '../utils/getNavigationIcon';
import { TabNames } from '../utils/tabNames';
import { Shadow } from 'react-native-shadow-2';

export function TabBar({ state, descriptors, navigation }) {
	return (
		<Shadow offset={[4, 3]} style={{width: Dimensions.get('window').width}}>
			<View style={styles.main}>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
								? options.title
								: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						if (route.name !== TabNames.Verstehen) {
							return;
						}
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
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
							disabled={route.name !== TabNames.Verstehen}
						>
							{getNavigationIcon(label, isFocused)}
							<Text style={[styles.buttonText, isFocused ? styles.dark : styles.light]}>
								{label}
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
