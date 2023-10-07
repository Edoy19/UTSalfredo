import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import fotoprofil from '../../assets/fotoprofil.jpg'; // Pastikan impor foto profil sesuai dengan lokasinya
import { PrimaryButton } from '../../components';

function ProfileScreen({ navigation }) {
  navigation.setOptions({
    headerTitle: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, marginRight: 8 }}>edo19_</Text>
      </View>
    ),
    headerRight: () => (
      <View style={{ flexDirection: 'row', marginRight: 5 }}>
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => navigation.navigate('Message')}
        >
          <MaterialCommunityIcons name="message-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => console.log('Second Icon Pressed')}
        >
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
    ),
  });

  return (
    <SafeAreaView>
      <View style={{ margin: 18 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <TouchableOpacity>
            <View style={{ borderRadius: 50, overflow: 'hidden' }}>
              <Image source={fotoprofil} style={{ width: 90, height: 90 }} />
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Text>Edo19_</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'column',marginLeft:30,alignItems: 'center',justifyContent: 'flex-end',}}>
          <Text style={{fontSize: 18, fontWeight: 'bold',}}>10</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold',}}>Posts</Text>
        </View>
        <View style={{flexDirection: 'column',marginLeft:30,alignItems: 'center',justifyContent: 'flex-end',}}>
          <Text style={{fontSize: 18, fontWeight: 'bold',}}>10 M</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold',}}>Followers</Text>
        </View>
        <View style={{flexDirection: 'column',marginLeft:30,alignItems: 'center',justifyContent: 'flex-end',}}>
          <Text style={{fontSize: 18, fontWeight: 'bold',}}>1000</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold',}}>Following</Text>
        </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:20 }} >
            <TouchableOpacity style={{marginRight:20, width : 150, height: 30, backgroundColor: '#e6e6e6', alignItems: 'center', borderRadius: 5, }}
            onPress={() => navigation.push('EditProfile')}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop:5}}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:10, width : 150, height: 30, backgroundColor: '#e6e6e6', alignItems: 'center', borderRadius: 5, }}
            onPress={() => navigation.push('Message')}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop:5}}>Message</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
