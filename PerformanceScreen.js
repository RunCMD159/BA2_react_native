import React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';


export class PerformanceScreen extends React.Component {


    performanceData;
    startTime;
    endTime;
    state;

    constructor(props) {
        super(props);
        this.performanceData = [];
        for (let i = 0; i < 1000; i++) {
            let randomString = 'Test String ' + Math.floor((Math.random() * 1000) + 1);
            this.performanceData.push(randomString);
        }
        this.state = {showList: false, runningTime: 0};
    }

    startPerformanceTest() {
        this.startTime = new Date().getTime();
        this.setState({showList: true});
    }

    componentDidUpdate() {
        this.endTime = new Date().getTime();
        this.setState({runningTime: this.endTime - this.startTime})
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onPress={() => this.startPerformanceTest()} title='Test starten'/>
                <Text>Running time: {this.state.runningTime} ms</Text>
                <ScrollView>
                    {
                        this.state.showList &&
                        this.performanceData.map((perfData, index) => {
                            return <Text key={index}>{perfData}</Text>
                        })
                    }
                </ScrollView>
            </View>
        );
    }

}