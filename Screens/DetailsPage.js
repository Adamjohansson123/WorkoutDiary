import React, {useState} from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../styles'

function DetailsPage({ route }) {
    const { event } = route.params

    return (
        <ScrollView>
          <View style={styles.detailsContainer}>

            <View style={styles.detailsTitleContainer}>
                <Text style={styles.titleDetails}>{event.title}</Text>              
            </View>

            <View style={styles.detailsDateContainer}>
                <Text style={styles.dateDetails}>Datum: {event.date}</Text>  
            </View>               
            
            <View style={styles.infoContainerDetails}>
                <Text style={styles.infoDetails}>{event.info}</Text>
            </View>
           
            <View style={styles.imgContainerDetails}>
                <Image style={styles.imageDetail} source={{uri:event.image}} />  
            </View>                    
                     
          </View>  
        </ScrollView>
        
        
       
            
     
    )
}

export default DetailsPage;