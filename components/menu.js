import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Menu(props) {
    const onPress = () => {
        props.navigation.navigate('Dashboard')
      };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>HOME</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>STAFF</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>CONTINENTS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>SIGN OUT</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})