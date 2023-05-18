import { TabBar, TabNames } from './TabBar';
import { UbersichtPage } from '../pages/ÜbersichtPage';
import { VerstehenStackPage } from '../pages/VerstehenStackPage';
import { ProjektePage } from '../pages/ProjektePage';
import { ProfilPage } from '../pages/ProfilPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { useEffect, useState } from 'react';

export const TabNavigator = () => {
	const [currentRoute, setCurrentRoute] = useState('');
	const Tab = createBottomTabNavigator();
	let tabNames = TabNames;
	const hiddenTabBarRoutes = ['Article', 'TheEnd'];

	return (
		<Tab.Navigator
			initialRouteName={tabNames.Verstehen}
			screenOptions={{headerShown: false}}
			tabBar={(props) => hiddenTabBarRoutes.includes(currentRoute) ? null : <TabBar {...props}/>}
		>
			<Tab.Screen name="Übersicht" component={UbersichtPage} />
			<Tab.Screen name="Verstehen"
						component={VerstehenStackPage}
						listeners={({ route }) => ({
							state: () => {
								const subRoute = getFocusedRouteNameFromRoute(route);
								setCurrentRoute(subRoute);
							}
						})}/>
			<Tab.Screen name="Projekte" component={ProjektePage} />
			<Tab.Screen name="Dein Profil" component={ProfilPage} />
		</Tab.Navigator>
	)
}
