import { View, Text } from 'react-native';
import {
  PrimaryButton
} from '../../components'
function HomeScreen({navigation}) {
  const onhandleLoginButton = ()=>{
    navigation.navigate('Login')
  }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <PrimaryButton 

            title="Login"
            onPress={onhandleLoginButton}
            />
      </View>
    );
  }

export default HomeScreen;