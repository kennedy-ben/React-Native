import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import updateData from './post'
import deleteData from './post'

export default function Detail() {
  const onPress = () => {
    props.navigation.navigate('Detail');
  };
  return (
    < View>

      <View style={styles.wrapper}>
          
          <TextInput style={styles.input} placeholder="Staff Name" placeholderTextColor="#fff" />
          <TextInput style={styles.input} placeholder="Staff Email" placeholderTextColor="#fff" />
          <TextInput style={styles.input} placeholder="Department" placeholderTextColor="#fff" secureTextEntry={true} />
          <TextInput style={styles.input} placeholder="Salary" placeholderTextColor="#fff" secureTextEntry={true} />
          <TextInput style={styles.input} placeholder="Staff Number" placeholderTextColor="#fff" secureTextEntry={true} />
          <TouchableOpacity style={styles.button} onPress={onPress}>
           
          </TouchableOpacity>
        </View>

      
      <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: 'blue', padding: 20 }}>
            <Text style={{ color: 'white', textAlign: 'right'}}>Create</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: 'silver', padding: 20 }}>
            <Text style={{ color: 'white', textAlign: 'right' }}>Read</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: 'green', padding: 20 }}>
            <Text style={{ color: 'white', textAlign: 'right' }}>Update</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: 'red', padding: 20 }}>
            <Text style={{ color: 'white', textAlign: 'right'}}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '80%',
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
    color: '#000000',
    fontSize: 18,
    paddingHorizontal: 10,
    backgroundColor: '#000000',
    // flexDirection: 'row',
    // flex: 10,
    // flexWrap: 'wrap',
    // alignItems: 'flex-start'
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#2196F3',
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