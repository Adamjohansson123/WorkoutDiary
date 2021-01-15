import React, {useState, useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions'
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import styles from '../styles'

const ImageSelector = props => {
  const [pickedImage, setPickedImage] = useState(null);
  
  try {
    useEffect(() => { 
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Appen behöver tillgång till kamerarullen för att kunna hämta en bild!');
        }
      }
    })();
  }, []);
  }
  catch
  {
    alert('Det gick inte att få tillgång till kamerarullen!')
  }

  const pickImage = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!image.cancelled) {
      setPickedImage(image.uri);
      props.onImagePicked(image.uri)
    }
  };

  return (
    

    <View style={styles.imagePicker}>
          <View style={styles.imagePreview}>
              {!pickedImage ? (<Text>Ingen bild är vald ännu</Text>)
               : (<Image style={styles.pImage}  source={{uri: pickedImage}}/>)}
          </View>
          <TouchableOpacity onPress={pickImage}> 
            <Text style={styles.pickphotoText}>Lägg till bild</Text>                    
          </TouchableOpacity>  
    </View>
  );
}
export default ImageSelector;

