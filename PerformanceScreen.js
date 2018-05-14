import React from 'react';
import {Button, ListView, ScrollView, Text, View} from 'react-native';


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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            showList: false, runningTime: 0,
            dataSource: ds.cloneWithRows(this.performanceData)
        };
    }

    startPerformanceTest() {
        this.startTime = new Date().getTime();
        this.setState({showList: true});
        console.log(this.state);
    }

    componentDidMount() {
        alert('mounted');
        this.endTime = new Date().getTime();
        this.setState({runningTime: this.endTime - this.startTime});
        console.log(this.state)
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onPress={() => this.startPerformanceTest()} title='Test starten'/>
                <Text>Running time: {this.state.runningTime} ms</Text>
                <ScrollView>
                    {
                        this.state.showList &&
                        (<ListView
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => (
                                <Text>{rowData}</Text>
                            )}
                        />)

                    }
                </ScrollView>
            </View>
        );
    }
}