import React from 'react';
import {Button, Text, View} from 'react-native';
import {ScrollListComponent} from "./ScrollListComponent";


export class PerformanceScreen extends React.Component {


    performanceData;
    startTime;
    endTime;
    state;

    constructor(props) {
        super(props);
        this.performanceData = [];
        for (let i = 0; i < 10000; i++) {
            let randomString = 'Test String ' + Math.floor((Math.random() * 10000) + 1);
            this.performanceData.push(randomString);
        }
        this.state = {
            showList: false, runningTime: 0,
        };
        this.endPerformanceTest = this.endPerformanceTest.bind(this);
    }

    startPerformanceTest() {
        this.startTime = new Date().getTime();
        this.setState({showList: true});
        console.log(this.state);
    }

    endPerformanceTest() {
        this.endTime = new Date().getTime();
        this.setState({runningTime: this.endTime - this.startTime});
        console.log(this.state);
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onPress={() => this.startPerformanceTest()} title='Test starten'/>
                <Text>Running time: {this.state.runningTime} ms</Text>
                {
                    this.state.showList &&
                    (<ScrollListComponent data={this.performanceData} endPerformanceTest={this.endPerformanceTest}/>)
                }
            </View>
        );
    }
}


