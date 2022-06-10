import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

// import { Container } from './styles';

const CustomInput = (props) => {
console.log(props)
  return (
    <View style={styles.box}>
    <TextInput
      placeholderTextColor={'#1377c2'}
      {...props}
      style={styles.input}
    /> 
  </View>
  );
}

export default CustomInput;

const styles = StyleSheet.create({
   
    input:{
      backgroundColor:'#113a57',
      width:'100%',
      height:56,
      padding:8,
      color:'#59aeef',
      fontSize:18,
      textAlign:'center'
    },
    
    box:{
      width:'100%',
      marginBottom:10,
  }
  });