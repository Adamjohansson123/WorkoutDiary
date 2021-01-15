import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles'

function StartPage({navigation}) {
  
  return (
    <View style={styles.background}>

      <Text style={styles.startText}>Välkommen!</Text>

      <Image style={styles.startImage} source={{uri:'https://thumbs.gfycat.com/ShimmeringObeseBrahmancow-size_restricted.gif'}} />
      
      <TouchableOpacity onPress={() => navigation.navigate('Main')}> 
          <View style={styles.startButton}>
            <Text style={styles.buttonText}>Till träningsdagbok</Text>
          </View>               
      </TouchableOpacity>  
    </View>
  )
}
export default StartPage;