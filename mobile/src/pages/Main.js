import React, {useEffect, useState} from 'react'
import MapView, {Marker, Callout} from 'react-native-maps'
import {StyleSheet, 
  Image, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Keyboard,
   } from 'react-native'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import {MaterialIcons} from '@expo/vector-icons'

import api from '../services/api'
import {connect, disconnect, subscribeToNewDevs} from '../services/socket'

function Main({navigation}){
  const [devs, setDevs] = useState([])
  const [currentRegion, setCurrentRegion] = useState(null)
  const [techs, setTechs] = useState('')
 
  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]))
  }, [devs])

  useEffect(() => {
    async function loadInitialPosition(){

      const {granted} = await requestPermissionsAsync()

      if (granted){
       const {coords} = await getCurrentPositionAsync({
         enableHighAccuracy: true
       })
       const {latitude, longitude} = coords;

       setCurrentRegion({
         latitude,
         longitude,
         latitudeDelta: 0.05,
         longitudeDelta: 0.05
       })
 
      }
    }
    loadInitialPosition()
  }, [])

  function setupWebSocket(){
    disconnect()
    const {latitude, longitude} = currentRegion;
    connect(
      latitude,
      longitude,
      techs
    )
  }

  async function loadDevs(){
    const {latitude, longitude } = currentRegion;
    const response = await api.get('/search', {
      params:{
        latitude,
        longitude,
        techs,
      }
    })
    setDevs(response.data)
    setupWebSocket()
    Keyboard.dismiss()
  }

  function handleRegionChanged(region){
      setCurrentRegion(region)

  }

  if(!currentRegion){
    return null
  }
  return (
    <>
    <MapView onRegionChangeComplete={handleRegionChanged} 
    initialRegion={currentRegion} 
    style={styles.map}>
    {devs.map(dev => (
      <Marker 
      key={dev._id}
      coordinate={
      {latitude: dev.location.coordinates[1], 
      longitude: dev.location.coordinates[0]
      }}>
        <Image 
        style={styles.avatar} 
        source={{
        uri: dev.avatar_url
        }}/>
        <Callout onPress={() => {
          navigation.navigate('Profile', {github_user: dev.github_user})
          }}>
          <View style={styles.callout}>
            <Text style={styles.devName}>{dev.name}</Text>
            <Text style={styles.devBio}>{dev.bio}</Text>
            <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
          </View>
        </Callout>
      </Marker> 
      ))}
    </MapView>
    <View style={styles.searchForm}>
      <TextInput
      style={styles.searchInput}
      placeholder="Buscar Devs por Techs"
      placeholderTextColor="#999"
      autoCapitalize="words"
      autoCorrect={false}
      value={techs}
      onChangeText={setTechs}
      />
      <TouchableOpacity style={styles.loadButton} onPress={loadDevs}>
        <MaterialIcons name="my-location" size={20} color="#FFF"/>
      </TouchableOpacity>
    </View>         
    </>
      )
}
const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#8E4DFF'
  },

  callout: {
    width: 260,
    marginLeft: 10,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16
  },

  devBio: {
    color: '#666',
    marginTop: 5
  },

  devTechs: {
    marginTop: 5,
    },

  searchForm: {
    position: "absolute",
    top: 20,
    left: 10,
    right: 10,
    zIndex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    

  },

  searchInput: {
    flex: 1,
    textAlign: 'center',
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#8E4DFF',
    paddingHorizontal: 20,
    fontSize: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 3
  },

  loadButton: {
    color: '#FFF',
    width: 50,
    height: 50,
    backgroundColor: '#8E4DFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  },
 
})

export default Main 