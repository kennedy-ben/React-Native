// export default function Menu(props) {
//     const onPress = () => {
//         props.navigation.navigate('Dashboard')
//       };
//   return (
//     <View>
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text>HOME</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text>STAFF</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text>CONTINENTS</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text>SIGN OUT</Text>
//       </TouchableOpacity>

//     </View>
//   )
// }

// const styles = StyleSheet.create({})
import {Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';


const MenuExample = () => {
const [visible, setVisible] = useState(false);

const closeMenu = () => setVisible(false);
const openMenu = (v) => setVisible(true);
return (
	<Provider>
	<View style={styles.container}>
		<Menu
		visible={visible}
		onDismiss={closeMenu}
		anchor={
			<Button onPress={openMenu} mode="outlined">
			Show menu Bar
			</Button>
		}>
		<Menu.Item
			onPress={() => {
			Alert.alert('Action : ', 'Welcome to Dashboard');
			}}
			title="Home"
		/>
		<Menu.Item
			onPress={() => {
			Alert.alert('Action : ', 'Welcome to Staff view');
			}}
			title="Staff"
		/>
		<Menu.Item
			onPress={() => {
			Alert.alert('Action : ', 'Welcometo Continents view');
			}}
			title="Continents"
		/>
		<Menu.Item
			onPress={() => {
			Alert.alert('Action :', 'Sign out');
			}}
			title="Sign out"
		/>
		</Menu>
	</View>
	</Provider>
);
};

export default MenuExample;

const styles = StyleSheet.create({
container: {
	padding: 0,
	flexDirection: 'row',
	justifyContent:'flex-start',
	height: 200,
},
});
