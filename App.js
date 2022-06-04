import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';


export default function App() {
  const titulo = 'Calcular de IMC'
  const [altura, onChangeAltura] = React.useState('');
  const [peso, onChangePeso] = React.useState('');
  const [resultado, setResultado] = React.useState(0);

  function onPress() {
    const alturaEmMetros=altura.replace(',','.')
    setResultado(peso/(alturaEmMetros*alturaEmMetros));
    Keyboard.dismiss()
  }

  function onLimpar() {
    setResultado(0);
    onChangePeso('')
    onChangeAltura('')
  }

  
  
  return (
    <View style={styles.container}>
      <View style={styles.tituloView}>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
      
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAltura}
          value={altura}
          placeholder={'Altura em metros'}
          placeholderTextColor={'#1377c2'}
          keyboardType={'numeric'}
        /> 
      </View>

      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText={onChangePeso}
          value={peso}
          placeholder={'Peso em Kg'}
          placeholderTextColor={'#1377c2'}
          keyboardType={'numeric'}
        /> 
      </View>
      <View style={styles.tituloView}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}        
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.tituloView}>
      <TouchableOpacity
        style={styles.buttonLimpar}
        onPress={onLimpar}        
      >
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
      </View>
      {resultado ? 
      <View>
      <Text style={styles.titulo}>{resultado.toFixed(2)}</Text>
      </View> : null}
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16537e',
    alignItems: 'center',
    justifyContent: 'center',
    padding:24,
  },
  tituloView:{
    width:'100%',
    paddingVertical: 25,
  },
  titulo:{
  color:'#fff',
  fontSize:42,
  },
  input:{
    backgroundColor:'#113a57',
    width:'100%',
    height:56,
    padding:8,
    color:'#59aeef',
    fontSize:18,
    textAlign:'center'
  },
  button:{
    backgroundColor:'#6fa8dc',
    width:'100%',
    height:56,
    padding:12,
    alignItems:'center',
    justifyContent:'center',  
  },
  buttonLimpar:{
    backgroundColor:'#ff0000',
    width:'100%',
    height:56,
    padding:12,
    alignItems:'center',
    justifyContent:'center',  
  },
  
  buttonText:{
    fontSize:20,
    color: '#fff',
    fontWeight:'bold'
  },
  box:{
    width:'100%',
    marginBottom:10,
}
});
