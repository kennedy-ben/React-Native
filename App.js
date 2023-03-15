import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import  LoginComponent  from "./components/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./components/dashboard";
import Menu from "./components/menu";
import SignupComponent from "./components/signup";
import { Ionicons } from '@expo/vector-icons';
import Detail from "./components/Detail";
import Post from "./components/post"


// const App = () => {
//   return (
//     <View>
//       <Menu />
//     </View>
//   );
// };



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <NavigationContainer>
      <RootNavigator />
    </NavigationContainer> */}

        <Stack.Screen name="Login" component={LoginComponent}/>
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Signup" component={SignupComponent}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Menu" component={Menu}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const rootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Get"
        component={Get}
        options={({ navigation, route }) => ({
          title: 'CRUD Data User',
          headerRight: () => (
            <Ionicons
              name={'ios-add-circle'}
              size={25}
              color={'white'}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Post')}
            />
          ),
        })}
      />
     
    </Stack.Navigator>
  );
};



