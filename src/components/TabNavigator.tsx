import { TabBar } from './TabBar';
import { UbersichtPage } from '../pages/ÜbersichtPage';
import { VerstehenStackPage } from '../pages/VerstehenStackPage';
import { ProjektePage } from '../pages/ProjektePage';
import { ProfilPage } from '../pages/ProfilPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { FC, useState } from 'react';
import { TabNames } from '../utils/tabNames';

export const TabNavigator: FC = () => {
	const [currentRoute, setCurrentRoute] = useState<string>('');
	const Tab = createBottomTabNavigator();
	const hiddenTabBarRoutes: string[] = ['Article', 'TheEnd'];

	return (
		<Tab.Navigator
			initialRouteName={TabNames.Verstehen}
			screenOptions={{ headerShown: false }}
			tabBar={(props) => hiddenTabBarRoutes.includes(currentRoute) ? null : <TabBar {...props} />}
		>
			<Tab.Screen name={TabNames.Übersicht} component={UbersichtPage} />
			<Tab.Screen name={TabNames.Verstehen}
				component={VerstehenStackPage}
				listeners={({ route }) => ({
					state: () => {
						const subRoute = getFocusedRouteNameFromRoute(route);
						setCurrentRoute(subRoute);
					}
				})} />
			<Tab.Screen name={TabNames.Projekte} component={ProjektePage} />
			<Tab.Screen name={TabNames.DeinProfil} component={ProfilPage} />
		</Tab.Navigator>
	)
}
