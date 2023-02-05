import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./page/login";
import Regis from "./page/regis";
import Splash from "./page/splash";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./page/dashboard";
import DaftarFranchise from "./page/list_franchise";
import Profile from "./page/profile";
import Detail from "./page/detail_franchise";
import { useFonts } from 'expo-font';
import Tambah from "./page/add_franchise";
import Mapss from "./page/home";
import Viewloc from "./page/viewloc";
import Lokasi from "./page/maps";
import UpdateFranchise from "./page/update_franchise";
import Mapopup from "./page/mapopup";
import Edit_franchise from "./page/edit_franchise";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tombol_customer = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'List Franchise') {
            iconName = focused ? 'folder-outline' : 'folder-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7a1a1a',
        tabBarInactiveTintColor: '#615d5d',

      })}>
      <Tab.Screen name="List Franchise" component={DaftarFranchise} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-BlackItalic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Register"
          component={Regis}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Tambah"
          component={Tambah}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Mapss"
          component={Mapss}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ViewLoc"
          component={Viewloc}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Lokasi"
          component={Lokasi}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Tombol_customer"
          component={Tombol_customer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Update Franchise"
          component={UpdateFranchise}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Mapopup"
          component={Mapopup}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Edit Franchise"
          component={Edit_franchise}
        >
        
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
