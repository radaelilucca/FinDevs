import React from 'react'
import {View} from 'react-native'
import {WebView} from 'react-native-webview'

function Profile({navigation}){
  const githubUser = navigation.getParam('github_user')
  return <WebView style={{flex: 1}} source={{uri: `https://github.com/${githubUser}`}}/>
}

export default Profile 