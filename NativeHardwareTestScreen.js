'use strict';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CameraScreen from "./CameraScreen";
import GeolocationScreen from "./GeolocationScreen";
import FileScreen from "./FileScreen";

export class NativeHardwareTestScreen extends React.Component {

    render() {
        return (
            <ScrollView>
                <View>
                    <CameraScreen/>
                    <GeolocationScreen/>
                    <FileScreen/>
                </View>
            </ScrollView>
        );
    }


}
