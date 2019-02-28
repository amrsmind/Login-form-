/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';

//type Props = {};
export default class App extends Component {
  render() {
    return (
        <View style={styles.container}> 
            <View style={styles.logo}> 
                <Text>
                       SOLO
                </Text>
             </View>
        
              <View style={styles.form}> 
                  <TextInput 
                       style={styles.input}
                       placeholder="username"
                       placeholderTextColor="rgba(255,255,255,0.5)"/>
                  <TextInput 
                       secureTextEntry={true}
                       style={styles.input}
                       placeholder="password"
                       placeholderTextColor="rgba(255,255,255,0.5)"/>
                 
                   <View style={styles.loginbtn}>
                        <Button
                    onPress={() => {
                           }}
                     title="log in"
                  />      
              </View>
              </View>   
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
     //backgroundColor: '#2BCDE8',
      backgroundColor: '#8A98C4',
    padding:20,   
  },
  form: {
    //backgroundColor:'black',
    flex:2,  
    justifyContent:'flex-start',
    //fontSize: 20,
    //alignItems: 'flex-start',
    //width:500,  
  
    
    //margin: 10,
      
  },
  input: {
      //flex:1,
      //height:5,
      backgroundColor: 'rgba(255,255,255,0.2)',
      margin: 10,
      
      
    //color: '#333333',
    //marginBottom: 5,
  },
  loginbtn: {
      margin:5,
  },    
  logo: {
      flex:1,
      alignItems: 'center',
      justifyContent:'center',
  },
 
    
});
