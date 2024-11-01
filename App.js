// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import SignupScreen from './components/Sign';
import LoginScreen from './components/login';
import HomeScreen from './components/HomeScreen';
import CampaignPage from './components/campign';
import DonateGoodsPage from './components/DonateGoodsPage';
import NotificationsScreen from './components/Notification';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Authentication Stack Navigator
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

// Home Stack Navigator
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Campaign" component={CampaignPage} options={{ title: 'Campaign Details' }} />
    <Stack.Screen name="DonateGoods" component={DonateGoodsPage} options={{ title: 'Donate Goods' }} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />
  </Stack.Navigator>
);

// Main Tab Navigator
const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home-outline" color={color} size={size} />
        ),
      }}
    />
    {/* Add other Tab Screens here if needed */}
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Authentication Stack */}
        <Stack.Screen name="Auth" component={AuthStack} />
        
        {/* Main Tab Navigator */}
        <Stack.Screen name="HomeTab" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;