import React from 'react';
import {ScrollView, Text} from 'react-native';


export class ScrollListComponent extends React.Component {


    performanceData;

    constructor(props) {
        super(props);
        this.performanceData = props.data;
    }

    componentDidMount() {
        this.props.endPerformanceTest();
    }


    render() {
        return (
            <ScrollView>
                {this.performanceData.map((data, index) => {
                    return <Text key={index}>{data}</Text>
                })
                }
            </ScrollView>
        );
    }
}


