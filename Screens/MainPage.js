import React from 'react'
import { View, Text, StyleSheet,Button, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import styles from '../styles'
import EventItem from '../Components/eventItems'

const MainPage = ({navigation}) =>{
   const events=useSelector(state=>state.events.events)
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={() => (navigation.navigate('Add'))}> 
              <Text style={styles.addNew}>+</Text>                    
            </TouchableOpacity>  
          ),
        });
      }, [navigation]);
    
    return (
       
         <FlatList data={events} keyExtractor={item=>item.id} renderItem={itemData=> 
          <TouchableOpacity onPress={() => navigation.navigate('Details', {event:itemData.item})}>
          <EventItem image={itemData.item.image} title={itemData.item.title} info={itemData.item.info} date={itemData.item.date} />
         </TouchableOpacity>}/>
      
    )
}

export default MainPage;