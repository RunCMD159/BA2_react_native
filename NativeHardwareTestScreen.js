'use strict';
import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import GeolocationScreen from "./GeolocationScreen";
import FileScreen from "./FileScreen";
import {RNCamera} from 'react-native-camera';

export class NativeHardwareTestScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 3, flexDirection: 'column'}}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                    <TouchableOpacity
                        onPress={this.takePicture.bind(this)}
                        style={styles.capture}>
                        <Text style={{fontSize: 14}}> Foto aufnehmen </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View>
                        <GeolocationScreen/>
                        <FileScreen/>
                    </View>
                </ScrollView>
            </View>
        );
    }

    takePicture = async function () {
        if (this.camera) {
            const options = {quality: 0.5, base64: true};
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});