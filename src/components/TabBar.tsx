import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HouseIcon from '../assets/house.svg';

export function TabBar({ state, descriptors, navigation }) {
	return (
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
						{/*<HouseIcon width={120} height={40}></HouseIcon>*/}
						<Text style={[styles.buttonText, isFocused ? styles.dark : styles.light]}>
							{label}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		height: 52,
		width: 'auto',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 10,
		lineHeight: 14
	},
	dark: {
		color: '#12173D'
	},
	light: {
		// color: '#41445B'
		color: 'red'
	}
});

export enum TabNames {
	Übersicht = 'Übersicht',
	Verstehen = 'Verstehen',
	Projekte = 'Projekte',
	DeinProfil = 'Dein Profil'
}
