import React, {useState} from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Alert
} from 'react-native';
import image1 from './assets/azul.gif';
import * as ImagePicker from 'expo-image-picker';


const App = () => {

  const [selectedImage, setselectedImage] = useState(null)

  let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if(permissionResult.granted === false) {
            alert('Permiso para acceder a la camara');
            return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync()
      
      if (pickerResult.cancelled === true) {
        return;
      }

      setselectedImage({localUri: pickerResult.uri})
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hola Mundo</Text>
        <Image 
            source={{
              uri:
               selectedImage !== null 
               ? selectedImage.localUri 
               : './assets/azul.gif',
              }}
            style={styles.image}
        />
        <TouchableOpacity
            onPress={openImagePickerAsync}
            style= {styles.button}
        >
           <Text> Apretame </Text>
        </TouchableOpacity>  

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: '#fff' },
  image: {height: 150, width: 150, borderRadius: 75},
  button: {
    backgroundColor: 'blue',
    padding: 7,
    marginTop: 10,

  },
  buttonText: {
    color: '#fff',
  }
});
export default App;