import React, { Children } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import CustomButton from './src/componentes/CustomButton';
import CustomInput from './src/componentes/CustomInput';


export default function App() {
  const titulo = 'Calcule seu IMC'
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

      <CustomInput 
        value={altura}
        onChangeText={onChangeAltura} 
        placeholder='Altura em metros'  
        keyboardType='numeric'
      />

      <CustomInput 
        value={peso}
        onChangeText={onChangePeso}
        placeholder='Peso em Kg'
        keyboardType='numeric'
      />

      <CustomButton 
        estilo={styles.button}
        onPress={onPress}
      >Calcular</CustomButton>      
         
      <CustomButton
        estilo={styles.buttonLimpar}
        onPress={onLimpar}
      >Limpar</CustomButton>

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
    textAlign:'center',
  },
 
  button:{
    backgroundColor:'#6fa8dc',
      
  },
  buttonLimpar:{
    backgroundColor:'#ff0000',
  },
  
  buttonText:{
    fontSize:20,
    color: '#fff',
    fontWeight:'bold'
  },
  
});
