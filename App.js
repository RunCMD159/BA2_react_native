import React from 'react';
import {TabNavigator} from 'react-navigation';
import {HomeScreen} from "./HomeScreen";
import {PerformanceScreen} from "./PerformanceScreen";
import {NativeHardwareTestScreen} from "./NativeHardwareTestScreen";

export default TabNavigator({
    Home: {screen: HomeScreen},
    Performance: {screen: PerformanceScreen},
    NativeHardwareTest: {screen: NativeHardwareTestScreen, title:'Native Hardware Test'},
});