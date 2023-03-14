import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';

const SignupComponent = (props) => {
  const onPress = () => {
    props.navigation.navigate('Dashboard');
  };

  return (
    <ImageBackground source={require('../assets/kk.webp')} style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Welcome To Zamara Company</Text>
        <TextInput style={styles.input} placeholder="User Name" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#fff" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#fff" secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '100%',
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 30,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SignupComponent;

