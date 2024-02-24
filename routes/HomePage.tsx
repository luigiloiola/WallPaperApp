import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ImageBackground, Image, NativeModules } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';


const HomePage = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    if (selectedImages && selectedImages.length > 0) {
      setBackgroundImage({ uri: selectedImages[0] });
    } else {
      setBackgroundImage(null);
    }
  }, [selectedImages]);


  useEffect(() => {
    if (Platform.OS !== 'web') {
      (async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, precisamos das permissões da galeria para continuar!');
        }
      })();
    }
  }, []);

  const setWallpaper = () => {

  };
const handleSelectFromGallery = async () => {

  try {
    NativeModules.changeWallpaper();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      multiple: true,
    });

    if (!result.cancelled) {
    };
  } catch (error) {
    console.error('Erro ao selecionar da galeria:', error);
  }
};

  return (

      <View style={styles.container}>
        <Text style={styles.appName}>App Name</Text>

        <TouchableOpacity style={styles.selectButton} onPress={handleSelectFromGallery}>
          <Text style={styles.selectButtonText}>Selecionar da Galeria</Text>
        </TouchableOpacity>

        {backgroundImage && (
          <View style={styles.imageContainer}>
            <FlatList
              data={selectedImages}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Image source={{ uri: item }} style={styles.image} />
              )}
            />
            <TouchableOpacity style={styles.setWallpaperButton} onPress={setWallpaper}>
              <Text style={styles.setWallpaperButtonText}>Definir como Papel de Parede</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  selectButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  selectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  setWallpaperButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  setWallpaperButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;
