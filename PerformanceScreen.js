import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';


export class PerformanceScreen extends React.Component {


    performanceData;
    startTime;
    endTime;
    lastItem;
    state;

    constructor(props) {
        super(props);
        this.performanceData = [];
        for (let i = 0; i < 10000; i++) {
            let randomString = 'Test String ' + Math.floor((Math.random() * 10000) + 1);
            this.performanceData.push(randomString);
        }
        this.lastItem = this.performanceData[this.performanceData.length - 1];
        this.state = {
            showList: false, runningTime: 0,
        };
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
        alert('Ende');
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onPress={() => this.startPerformanceTest()} title='Test starten'/>
                <Text>Running time: {this.state.runningTime} ms</Text>
                {
                    this.state.showList &&
                    (<ScrollView>
                        {this.performanceData.map((data, index) => {
                            return <Text key={index}>{data}</Text>
                        })
                        }
                    </ScrollView>)
                }
            </View>
        );
    }
}

/*
<ListView
dataSource={this.state.dataSource}
renderRow={(rowData) => (
    <Text>{rowData}</Text>
)}
onEndReached={() => this.endPerformanceTest()}
/>*/

