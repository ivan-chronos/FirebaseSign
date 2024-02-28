import { Button, Text, View } from 'react-native';
import  {auth}  from '../../firebaseConfig'
import { useNavigation } from '@react-navigation/native';

export default props => {
  const navigation = useNavigation();
  const user = auth.currentUser;  

  function signOut() {
    auth.signOut();
    console.log('usuário deslogado')
    navigation.navigate('Login');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <Text>Olá {user.email}</Text>        
      <Button title='Sair' onPress={signOut} color="#3498db" />
    </View>
  );
}
