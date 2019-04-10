import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    constructor(props){
        super(props)
    this.state = {
        bal: 1.00,
        newBal: 0,
        inputValue: 'You can change me!',
        isLoading: true,
        dataSource: null,
    }
}
componentDidMount (){
    return fetch('http://www.apilayer.net/api/live?access_key=b2b277c1a0f365b87e4f5064dc1c1aeb')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.quotes,
            })
        })

        .catch((error) => {
            console.log(error)
        });
}


    USDtoEuro = () => {
       this.setState({ 
        newBal: this.state.inputValue * this.state.dataSource.USDEUR,
       
        })
    }
    USDtoPound = () => {
       this.setState({ 
        newBal: this.state.inputValue * this.state.dataSource.USDGBP,
       
        })
    }
    USDtoRupee = () => {
       this.setState({ 
        newBal: this.state.inputValue * this.state.dataSource.USDINR,
       
        })
    }
    USDtoAussie = () => {
       this.setState({ 
        newBal: this.state.inputValue * this.state.dataSource.USDAUD,
        
        })
    }
    USDtoCanadian = () => {
       this.setState({ 
        newBal: this.state.inputValue * this.state.dataSource.USDCAD,
       
        })
    }
    USDtoFranc = () => {
      this.setState({ 
       newBal: this.state.inputValue * this.state.dataSource.USDCHF,
      
       })
    }
    USDtoYuan = () => {
      this.setState({ 
       newBal: this.state.inputValue *this.state.dataSource.USDCNY,
      
       })
    }
    USDtoYen = () => {
      this.setState({ 
       newBal: this.state.inputValue * this.state.dataSource.USDJPY,
      
       })
   }

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        if(this.state.isLoading){
            return (
                <View style = {styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        } else {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Currency Converter App
                </Text>
                <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor: "black", borderWidth: 1,}}
                />
            <View style = {styles.myRow}> 
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.USDtoEuro}
                >
                    <Text style={styles.buttonText}>
                        USD to Euro
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.USDtoPound}
                >
                    <Text style={styles.buttonText}>
                        USD to Pound
                    </Text>
                </TouchableHighlight>
            </View>
            <View style = {styles.myRow}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.USDtoRupee}
                >
                    <Text style={styles.buttonText}>
                        USD to Rupee
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.USDtoAussie}
                >
                    <Text style={styles.buttonText}>
                        USD to Aussie
                    </Text>
                </TouchableHighlight>
            </View>
            <View style = {styles.myRow}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.USDtoCanadian}
                >
                    <Text style={styles.buttonText}>
                        USD to Canadian
                    </Text>
                </TouchableHighlight>
                
                   <TouchableHighlight
                    style={styles.button}
                    onPress = {this.USDtoFranc}
                >
                    <Text style={styles.buttonText}>
                        USD to Franc
                    </Text>
                </TouchableHighlight>
            </View>
            <View style = {styles.myRow}>
                   <TouchableHighlight
                    style={styles.button}
                    onPress = {this.USDtoYuan}
                >
                    <Text style={styles.buttonText}>
                        USD to Yuan
                    </Text>
                </TouchableHighlight>
                
                   <TouchableHighlight
                    style={styles.button}
                    onPress = {this.USDtoYen}
                >
                    <Text style={styles.buttonText}>
                        USD to Yen
                    </Text>
                </TouchableHighlight>
            </View>
                
                
                <Text style={styles.paragraph}>
                    USD: {this.state.bal} 
                </Text>
                
                <Text style={styles.paragraph}>
                    Converted Balance: {this.state.newBal} 
                </Text>
                
            </View>
      );
   }
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gold',
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7bb4ed',
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 5,
    },
    myRow: {
        flexDirection: 'row',
        
    },
    paragraph: {
        marginBottom: 10,
    }
});