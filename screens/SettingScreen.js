import React, {Componet} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class SettingScreen extends Component{
    render(){
        return(
            <View styke = {styles . container }>
                <Text>Settings Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})