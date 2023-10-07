import { View, Text,TouchableOpacity,StyleSheet,SafeAreaView,ScrollView,Image,TextInput } from 'react-native';
import React from 'react';
import {MaterialCommunityIcons, Ionicons} from 'react-native-vector-icons';

import fotoprofil from '../../assets/fotoprofil.jpg';
import kucing from '../../assets/kucing.jpeg';

function MessageScreen({navigation}) {
    navigation.setOptions({
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginRight: 8 }}>Message</Text>
          </View>
        ),
      });
      
    return (
        <SafeAreaView style={{ flex: 1,
            backgroundColor: 'white',}}>
        <View style={{ margin: 18 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <View style={{ flexDirection: 'row',alignItems: 'center',borderColor: 'gray',
          borderRadius: 5,
          marginTop: 10,
          paddingHorizontal:10,
          backgroundColor: '#e6e6e6',}}>
            <MaterialCommunityIcons name="magnify" size={24} color="black" />
              <TextInput
             style={{ flex: 1,
                height: 40,
                color: 'black',
                marginLeft:15,}}
             placeholder="Search"
             placeholderTextColor="gray"/>      
             </View>
          </View>
            <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:30 }}>
        <View>
        <Image source={fotoprofil} style={{width: 65, // Set the width of the image
      height: 65, // Set the height of the image
      borderRadius: 50,}} />
        </View>
        <View style={{flexDirection: 'column',
      marginRight:20,
      alignItems: 'left',
      justifyContent: 'flex-end', marginLeft:20}}>
          <Text style={{fontSize: 17,
      fontWeight: 'bold',}}>edo</Text>
          <Text style={{fontSize: 14,}}>Active 10m ago</Text>
        </View>
      </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:30 }}>
        <View>
        <Image source={kucing} style={{width: 65, // Set the width of the image
      height: 65, // Set the height of the image
      borderRadius: 50,}} />
        </View>
        <View style={{flexDirection: 'column',
      marginRight:20,
      alignItems: 'left',
      justifyContent: 'flex-end', marginLeft:20}}>
          <Text style={{fontSize: 17,
      fontWeight: 'bold',}}>edo</Text>
          <Text style={{fontSize: 14,}}>Active 10m ago</Text>
        </View>
      </View>
            </TouchableOpacity>
          </View>
          
        
      </SafeAreaView>
    );
  }

export default MessageScreen;