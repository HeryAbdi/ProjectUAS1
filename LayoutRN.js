import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class MainActivity extends Component {
  constructor(){
    super();

    //Creating Global Variable
    global.SampleVar = 'This is Global Variable';
  }

  static navigationOptions =
  {
    title: 'MainActivity',
  };

  navigate2SecondActivity = () => {
   this.props.navigation.navigate('Second');
  }

  render() {
    return (
      <View style = { styles.MainContainer}>

         <View style={{marginBottom: 15 }}>

            <Text style={styles.textStyle}> MainActivity </Text>

         </View>

         <Button onPress = { this.navigate2SecondActivity } title = 'Open Second Activity'/>

       </View>
    )
  }
}

class SecondActivity extends Component
{
 static navigationOptions =
 {
    title: 'SecondActivity',
 };

 render()
 {
    return(
       <View style = { styles.MainContainer }>

          <Text style = { styles.textStyle }> {global.SampleVar} </Text>

       </View>
    );
 }
}

export default Project = StackNavigator(
  {
    First: { screen: MainActivity},
    Second: { screen: SecondActivity }
  }
)

const styles = StyleSheet.create(
{
 MainContainer:
 {
    justifyContent: 'center',
    flex:1,
    margin: 10

 },

 textStyle:
 {
    fontSize: 22,
    textAlign: 'center',
    color: '#000',
 },

});
