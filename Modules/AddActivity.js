import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image, TouchableOpacity, YellowBox, ListView, Platform, Picker , ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';

class AddActivity extends Component {
  constructor(props) {
      super(props)

      this.state = {

        nama_resep: '',
        bahan: '',
        cara_buat: '',
        id:''

      };
    }

    InsertDataToServer = () =>{

      console.log('launch');
   const { nama_resep } = this.state;
   const { bahan } = this.state;
   const { cara_buat } = this.state;
   const { id } = this.state;


   fetch('http://api.ifreethink.net/Z1515051022/datas/post/', {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-type': 'application/json',
     },
     body: JSON.stringify({
       nama_resep: nama_resep,
       bahan: bahan,
       cara_buat: cara_buat,
       id: id
     })


   })
   .then((response) => response.json())
         .then((responseJson) => {

   // Showing response message coming from server after inserting records.
           Alert.alert('Data Berhasil Diinputkan');
           console.log(responseJson.response);
         }).catch((error) => {
           console.error(error);
         });
 }

    render() {
      return (

  <View style={styles.MainContainer}>

          <TextInput

            // Adding hint in Text Input using Place holder.
            placeholder="Nama Resep"

            onChangeText={nama_resep => this.setState({nama_resep})}

            // Making the Under line Transparent.
            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

          <TextInput

            // Adding hint in Text Input using Place holder.
            placeholder="Bahan"

            onChangeText={bahan => this.setState({bahan})}

            // Making the Under line Transparent.
            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

          <TextInput

            // Adding hint in Text Input using Place holder.
            placeholder="Cara Pembuatan"

            onChangeText={cara_buat => this.setState({cara_buat})}

            // Making the Under line Transparent.
            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

          <TextInput

            // Adding hint in Text Input using Place holder.
            placeholder="Kategori Resep"

            onChangeText={id => this.setState({ id })}

            // Making the Under line Transparent.
            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />
          <Text>
            Kategori: 1 -> Bank, 2 -> Rumah Sakit, 3 -> Hotel, 4 -> SPBU
          </Text>

          <Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />
  </View>

      );
    }
  }

  const styles = StyleSheet.create({

  MainContainer :{

  justifyContent: 'center',
  flex:1,
  margin: 10
  },

  TextInputStyleClass: {

  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  // Set border Hex Color Code Here.
   borderColor: '#FF5722',

  // Set border Radius.
   //borderRadius: 10 ,
  }

  });
export default AddActivity;
