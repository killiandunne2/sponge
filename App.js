import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import OptionsScreen from './screens/OptionsScreen';
import FileScreen from './screens/FileScreen';
import SettingsScreen from './screens/SettingsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
         gestureEnabled: true,
         gestureDirection: "horizontal",
         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Options" component={OptionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pdf" component={FileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
