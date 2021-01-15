import React, {useState} from 'react'
import ImageSelector from '../Components/ImageSelector'
import { View, Text, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native'
import styles from '../styles'
import {useDispatch} from 'react-redux'
import * as eventsActions from '../Store/events-actions'

const AddPage = ({navigation}) => {


   const dispatch=useDispatch()
   const [titleValue,setTitleValue]=useState('')
   const [infoValue,setInfoValue]=useState('')
   const [dateValue,setDateValue]=useState('')
   const [selectedImage,setSelectedImage]=useState(null)
   
   const titleChangeHandler=(text)=>{
       setTitleValue(text)
    }

    const dateChangeHandler=(text)=>{
      setDateValue(text)
   }

   const infoChangeHandler=(text)=>{
       setInfoValue(text)
    }

   const onImagePickedHandler=(path) =>{
       setSelectedImage(path)
   }

   const saveEventHandler=()=>{
      try {
         dispatch(eventsActions.addEvent(titleValue, infoValue, dateValue, selectedImage))
         navigation.navigate('Main')
         alert("Din nya händelse är nu sparad!")
      } 
      catch (err) {
         alert("Det gick inte att spara händelsen!")
         console.error(err.message)
      }
       
    }
    
       return (
         <ScrollView>
          <View style={styles.form}>
            <Text style={styles.label}>Titel</Text>
            <View style={styles.inputFieldTitle}>
               <TextInput placeholder="Välj en titel..." style={styles.inputText} onChangeText={titleChangeHandler} value={titleValue} />
            </View>
            <Text style={styles.label}>Datum</Text>
            <View style={styles.inputFieldDate}>
            <TextInput placeholder="Ange ett datum..." style={styles.inputText} onChangeText={dateChangeHandler} value={dateValue} />
            </View>
            <Text style={styles.label}>Beskrivning</Text>
            <View style={styles.inputFieldInfo}>
               <TextInput multiline="true" placeholder="Beskriv vad som har hänt..." style={styles.inputText} onChangeText={infoChangeHandler} value={infoValue} />
            </View>
              
            <ImageSelector onImagePicked={onImagePickedHandler} />
          </View>
          <TouchableOpacity onPress={saveEventHandler}> 
                <View style={styles.saveButton}>
                   <Text style={styles.saveText}>Spara</Text>
                </View>               
         </TouchableOpacity>  
         </ScrollView>
       )
      
   }

export default AddPage;

