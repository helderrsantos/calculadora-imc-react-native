import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// import { Container } from './styles';

const CustomButton = ({children, estilo, onPress}) => {
  
  return (
  <TouchableOpacity
    style={[styles.button, estilo]}
    onPress={onPress}
    >
    <Text style={styles.buttonText}>{children}</Text>

  </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
button:{
    width:'100%',
    height:56,
    padding:12,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center',  
  },
buttonText:{
    fontSize:20,
    color: '#fff',
    fontWeight:'bold'
  },
})
