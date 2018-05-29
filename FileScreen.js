import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

const RNFS = require('react-native-fs');

export default class FileScreen extends React.Component {

    path = RNFS.DocumentDirectoryPath + '/testdir/testFile.txt';

    constructor(props) {
        super(props);
        this.state = {
            text: 'Test Text',
            tempText: 'Test Text'
        };
    }

    componentDidMount() {
        RNFS.mkdir(RNFS.DocumentDirectoryPath + '/testdir')
            .then((success) => {
                this.writeToFile();
            });
        alert('Datei erstellt');
    }


    async readFile() {
        const fileContents = await RNFS.readFile(this.path);
        this.setState({tempText: fileContents});
    }

    async writeToFile() {
        let text = this.state.tempText;
        RNFS.writeFile(this.path, text, 'utf8')
            .then((success) => {
                alert('Gespeichert!');
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    render() {
        return (
            <View>
                <Button
                    onPress={() => {this.readFile()}}
                    title="Load"
                />
                <Button
                    onPress={() => {this.writeToFile()}}
                    title="Save"
                />
                <TextInput
                    editable={true}
                    onChangeText={(text) => this.setState({tempText: text})}
                    value={this.state.tempText}
                />
            </View>
        );
    }
}
