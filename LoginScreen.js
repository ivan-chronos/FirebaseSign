import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';
import { signIn } from '../../authService';
import { useAuth } from '../../authManager';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, initializing } = useAuth();
  const navigation = useNavigation();

  const handleLogin = () => {
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Home');
        console.log('Usuário Logado: ',user.email);  
        setEmail('');
    setPassword('');      
      })
      .catch((error) => {        
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR", error);
        if (errorCode === 'auth/invalid-email') {          
          alert('Usuário incorreto.');
        }
        if (errorCode === 'auth/missing-password') {          
          alert('É necessário digitar uma senha.');
        }
        if (errorCode === 'auth/invalid-credential') {          
          alert('Senha inválida.');
        }

      });
  };

  if (initializing) return null;

  return (        
    <View style={styles.container}>    
    <Text style={styles.title}>Carrinho</Text>
    <Text style={styles.title}>de Compras</Text>
    <Image
        style={styles.carrinho}
        source={require('./../assets/images/carrinho.png')}
      />        
    <View style={styles.authContainer}>    
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
      <Button title='Login' onPress={handleLogin} />
      </View>      
    </View>
    </View>
  );
}


