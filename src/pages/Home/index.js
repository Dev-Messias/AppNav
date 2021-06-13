import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

  const navigation = useNavigation();

  function irSobre(){
    navigation.navigate('Sobre', { nome: 'Messias', email: 'Messias@gmail.com'});
  }

 
  return(
    <View>
      <Text>Home</Text>
      <Text>Bem-Vindo</Text>
      <Button 
        title="Ir para sobre"
        onPress={irSobre}
      />
     
      
    </View>
  );
}