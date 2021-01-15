import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

  startText: {
     fontWeight: 'bold',
     fontSize: 40,
     textAlign: 'center',
     marginLeft: 25,
     marginRight: 25,
     marginTop: 90,
  },

  startImage: {
    marginTop: 100,
    width: 350,
    height: 250,
  },

  startButton: {
     marginTop: 100,
     backgroundColor: '#F2CF74',
     padding: 16, 
     borderRadius: 20,
     borderWidth: 2,
   
  },

  buttonText: {
     color: 'black',
     fontSize: 25,
     fontWeight: 'bold',
     paddingTop: 5,
     paddingBottom: 5,
     paddingLeft: 20,
     paddingRight: 20,
  },

  title: {
    fontSize: 32,
  },

  background: {
    backgroundColor: '#F2E4BF',
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,   
    alignItems: 'center',
  },

  container: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 16,
  },

  marginT: {
    marginTop: 20,
  },

  marginB: {
    marginBottom: 20,
  },

  containerCategory: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    backgroundColor: '#3061A3'
  },

  containerText: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  containerTime: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    backgroundColor: '#EFEFEF'
  },

  gettingNews: {
    color: 'black',
    fontSize: 17,
    marginTop: 15,
  },

category: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'snow',
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
},

description: {
   fontSize: 15, 
   color: 'black',
   padding: 8,
},

descriptionDetails: {
  fontSize: 15, 
  color: 'black',
  padding: 8,
  marginTop: 10,
},

imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
},

image: {
  width: 220,
  height: 250,
  padding: 10,
  marginTop: 30,
  marginBottom: 45,
},

idNumber: {
   fontSize: 15, 
   color: 'black',
   paddingLeft: 8,
   paddingRight: 8,
   paddingTop: 15,
   fontWeight: 'bold'
},

time: {
  fontSize: 12,
  fontWeight: 'bold',
  color: 'black',
  paddingRight: 8,
  paddingTop: 7,
  paddingBottom: 7,
  textAlign: "right",
},

timeDetails: {
  fontSize: 14,
  fontWeight: 'bold',
  color: 'black',
  paddingRight: 8,
  paddingTop: 10,
  paddingBottom: 10,
  textAlign: "right",
},

detailsTextStyle: {
  fontSize: 24,
  
},
contentStyle:{
    flex: 1, 
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24
},
imagePicker: {
  alignItems: 'center',
  marginTop: 40,
},
imagePreview: {
  width: '100%',
  height: 200,
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: 'black',
  borderWidth: 1,
  backgroundColor: '#F2E4BF',
},
image: {
  height: '100%',
  width: '100%'

},

addNew: {
   fontSize: 35,
   marginRight: 15,
   marginBottom: 10,
},

form:{
  marginTop: 5,
  marginLeft: 30,
  marginRight: 30,
},

label:{
   fontSize: 20,
   fontWeight: 'bold',
   marginBottom: 10,
   marginTop: 25,
},

inputText: {
  fontSize: 18,
  padding: 10,
},

pickphotoText: {
  marginTop: 10,
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold',
  paddingBottom: 5,
  paddingLeft: 20,
  paddingRight: 20,
},

saveButton: {
  marginTop: 30,
  backgroundColor: '#F2CF74',
  padding: 16, 
  borderRadius: 20,
  borderWidth: 2,
  marginLeft: 80,
  marginRight: 80,
  marginBottom: 40,
},

saveText: {
  color: 'black',
  fontSize: 23,
  fontWeight: 'bold',
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 10,
  paddingRight: 10,
  textAlign: 'center',
},

placeitem: {
  borderBottomColor: '#CCC',
  borderBottomWidth: 1,
  paddingVertical: 15,
  flexDirection: 'row',
},

pImage: {
  height: '100%',
  width: '100%'
},

date: {
   fontSize: 17,
},

inputFieldTitle: {
   backgroundColor: 'snow',
   borderWidth: 1,
   borderRadius: 10,
},

inputFieldDate: {
  backgroundColor: 'snow',
  borderWidth: 1,
  borderRadius: 10,
  marginRight: 200,
},

inputFieldInfo: {
  backgroundColor: 'snow',
  borderWidth: 1,
  borderRadius: 10,
  paddingBottom: 25,
},

saveNew: {
   fontSize: 17,
   marginRight: 20,
   fontWeight: 'bold',
},

image: {
  width: 70,
  height: 70,
  borderRadius: 35,
  backgroundColor: '#ccc',
  borderColor: 'black',
  borderWidth: 1

},

imageDetail: {
  width: '100%',
  height: 200,
  borderColor: 'black',
  borderWidth: 1,
  backgroundColor: '#F2E4BF',
  marginTop: 25,

},
infocontainer: {
  marginLeft: 'auto',
  marginRight: 55,
  justifyContent:'center',
  alignItems:'flex-start',
},

detailsContainer:{
  marginTop: 50,
  marginLeft: 30,
  marginRight: 30,
  marginBottom: 50,
  borderRadius: 25,
  backgroundColor: 'snow',
  
},

detailsDateContainer: {
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#F2E4BF',
  borderRadius: 25,
  marginTop: 10,
  
},

dateDetails: {
  fontSize: 20,
  padding: 5,
  marginLeft: 10,
  marginRight: 10,
},

titleDetails: {
  fontSize: 23,
  padding: 10, 
  marginLeft: 15,
  marginRight: 15,
  fontWeight: 'bold',
},

detailsTitleContainer: {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 40,
  backgroundColor: '#F2E4BF',
  borderRadius: 25,
},

datecontainer: {
  marginLeft: 25,
  justifyContent:'center',
  alignItems:'flex-end',
  backgroundColor: '#F2E4BF',
  borderRadius: 35,
  padding: 15,
},

infoDetails: {
  fontSize: 18,
  marginTop: 40,
  marginBottom: 10,
  marginLeft: 20,
  marginRight: 20,
},

imgContainerDetails: {
   marginLeft: 30,
   marginRight: 30,
   marginTop: 20,
   marginBottom: 40,
},

infoContainerDetails: {
  marginLeft: 10,
  marginRight: 10,
},

title: {
  color:'black',
  fontSize: 22,
  
},

removeButton: {
  marginTop: 30,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 50, 
},

removeText: {
  fontSize: 20,
  fontWeight: 'bold',
},

});
export default styles;