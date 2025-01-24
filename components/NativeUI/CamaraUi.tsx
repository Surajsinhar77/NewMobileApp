import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View , Alert} from 'react-native';
import { Camera } from 'lucide-react-native'


export default function CameraUi() {
  const [facing, setFacing] = useState<CameraType>('front');
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function CaptureImage() {
    if (cameraRef.current) {
      try {
        // Capture photo
        const photo = await cameraRef.current.takePictureAsync();

        // Create directory if it doesn't exist
        const directoryUri = `${FileSystem.documentDirectory}Selfies/`;
        await FileSystem.makeDirectoryAsync(directoryUri, { intermediates: true });

        // Generate unique filename
        const filename = `selfie_${Date.now()}.jpg`;
        const savedUri = `${directoryUri}${filename}`;

        // Copy captured image to app's document directory
        await FileSystem.copyAsync({
          from: photo?.uri || '',
          to: savedUri
        });

        // Alert with saved location
        Alert.alert('Image Saved', `Saved to: ${savedUri}`);

        // Set captured image for preview
        setCapturedImage(savedUri);

        // Optional: Save to media library
        if (!mediaPermission) {
          const { status } = await requestMediaPermission();
          if (status === 'granted') {
            const asset = await MediaLibrary.createAssetAsync(savedUri);
            await MediaLibrary.createAlbumAsync("AppSelfies", asset, false);
          }
        }
      } catch (error) {
        console.error('Error capturing image:', error);
        Alert.alert('Capture Failed', 'Unable to capture image');
      }
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        {/* <View style={styles.buttonContainer}> */}
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Camera size={40} color='red' style={styles.cameraFlip} />
          </TouchableOpacity>
        {/* </View> */}
        <View style={styles.baseButtonHolder}>
            <TouchableOpacity style={styles.captureButton} onPress={CaptureImage}>
                <Camera size={40} color='green' style={{margin: 'auto'}} />
            </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    top: 20,
    left: 80,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderColor: 'green',
    borderWidth: 1,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraFlip:{
    top: 20,
    left: 0,
    borderColor: 'red',
    borderWidth: 1,
    // backgroundColor: 'red', 
  },
  baseButtonHolder:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  captureButton :{
    width: 60,
    height: 60,
    bottom: 20,
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 1,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
