import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

export default class Dog extends Component {
    state = {
      isBlackImageSelect :false,
      isLogoImageSelect :false
    };
     render()
     {
        return(
          <View>
            <View style={{marginBottom:10}}>
                <TouchableOpacity 
                  style={{  borderRadius:10, alignItems:'center'}}
                  onPress={() => {
                    this.setState({isBlackImageSelect: !this.state.isBlackImageSelect});} 
                  }>
                  <Image
                    source={require('../assets/image/black.png')}
                    style={{ width: 300, height: 300,borderRadius:20, backgroundColor: this.state.isBlackImageSelect ?'black': 'white'}}/>
                </TouchableOpacity> 
  
                <TouchableOpacity 
                  style={{  borderRadius:10, alignItems:'center'}}
                  onPress={() => {
                    this.setState({isLogoImageSelect: !this.state.isLogoImageSelect});} 
                  }>
                  <Image
                    source={require('../assets/image/logo.png')}
                    style={{ width: 300, height: 300, borderRadius:20, backgroundColor: this.state.isLogoImageSelect ? 'black' : 'white' }}/>
                </TouchableOpacity>   
            </View>
          </View>
          
        );
      }
    }
  