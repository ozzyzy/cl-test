import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { VerstehenPage } from './VerstehenPage';
import { DetailsPage } from './DetailsPage';
import { ArticlePage } from './ArticlePage';
import { TheEndPage } from './TheEndPage';

export const VerstehenStackPage: FC = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="VerstehenPage" component={VerstehenPage}></Stack.Screen>
			<Stack.Screen name="Details" component={DetailsPage}></Stack.Screen>
			<Stack.Screen name="Article" component={ArticlePage}></Stack.Screen>
			<Stack.Screen name="TheEnd" component={TheEndPage}></Stack.Screen>
		</Stack.Navigator>
	)
}
