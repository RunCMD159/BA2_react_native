import React from 'react';
import {TabNavigator} from 'react-navigation';
import {HomeScreen} from "./HomeScreen";
import {PerformanceScreen} from "./Performance";

export default TabNavigator({
    Home: {screen: HomeScreen},
    Settings: {screen: PerformanceScreen},
});