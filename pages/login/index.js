import { View, Text,TextInput, Image} from 'react-native';
import {
  AppLogo
} from '../../assets'
import {
  PrimaryButton
} from '../../components'
function LoginScreen({navigation}) {
  const onhandleLoginButton = ()=>{
    navigation.navigate('Main')
  }
  const onhandleRegisterButton = ()=>{
    navigation.navigate('Register')
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', 
    justifyContent: 'center' }}>
      <Image source={AppLogo}/>
      
      <Text>Login Screen</Text>
      <TextInput  editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={{padding: 5,borderWidth:1, height: 40, borderColor: 'gray',  borderRadius: 5, paddingLeft: 10,
        fontSize: 16, color: 'black', backgroundColor: 'white', marginTop: 20}}
        placeholder="Username"
        placeholderTextColor="gray"/>
        <TextInput  editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={{padding: 5,borderWidth:1, height: 40, borderColor: 'gray',  borderRadius: 5, paddingLeft: 10,
        fontSize: 16, color: 'black', backgroundColor: 'white', marginTop: 20}}
        placeholder="Password"
        placeholderTextColor="gray"/>
      <PrimaryButton 
        style={{padding: 5,borderWidth:1, marginTop: 20}}
            title="Login"
            onPress={onhandleLoginButton}
            />
            <PrimaryButton 
        style={{padding: 5,borderWidth:1, marginTop: 20}}
            title="Register"
            onPress={onhandleRegisterButton}
            />
    </View>
  );
}

export default LoginScreen;
