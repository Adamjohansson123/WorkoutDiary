import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import styles from '../styles'

const EventItem = props => {

    return (
        <View style={styles.placeitem}>
            
            <View style={styles.datecontainer}>
                <Text style={styles.date}>{props.date}</Text>
            </View>

            <View style={styles.infocontainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>            

        </View>
    )
}
export default EventItem;