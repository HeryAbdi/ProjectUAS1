import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image, TouchableOpacity, YellowBox, ListView  } from 'react-native';
import { StackNavigator } from 'react-navigation';

class MainActivity extends Component {
  constructor(){
    super();

  }

  navigate2SecondActivity = () => {
   this.props.navigation.navigate('Second');
  }

  render() {
    return (
      <View style = {styles.MainContainer}>
        <View style = { styles.Buttonbox}>
          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress = { this.navigate2SecondActivity }>
            <Text style={styles.TextStyle}>Silahkan Login</Text>
          </TouchableOpacity>
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(
{
  MainContainer:{

  justifyContent: 'center',
  flex:1,
  backgroundColor: '#FFFF8D',
  },

  Buttonbox:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    backgroundColor: '#FFFF8D',
    margin: 100,
  },

  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00B0FF',
    borderWidth: 1,
    borderColor: 'white',
    height: 90,
    borderRadius: 5 ,
    margin: 5,

  },

  TextStyle :{
    fontSize: 24,
    fontWeight:'bold',
    color: '#000000',
    alignItems:'center'
  },
});

export default MainActivity;
