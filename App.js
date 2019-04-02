import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    state = {
        bal: 1.00,
        newBal: 0,
        inputValue: 'You can change me!'
    }

    USDtoEuro = () => {
       this.setState({ 
        newBal: this.state.inputValue * .85,
       
        })
    }
    USDtoPound = () => {
       this.setState({ 
        newBal: this.state.inputValue * .75,
       
        })
    }
    USDtoRupee = () => {
       this.setState({ 
        newBal: this.state.inputValue * 67.60,
       
        })
    }
    USDtoAussie = () => {
       this.setState({ 
        newBal: this.state.inputValue * 1.32,
        
        })
    }
    USDtoCanadian = () => {
       this.setState({ 
        newBal: this.state.inputValue * 1.30,
       
        })
    }
    USDtoFranc = () => {
      this.setState({ 
       newBal: this.state.inputValue * .99,
      
       })
    }
    USDtoYuan = () => {
      this.setState({ 
       newBal: this.state.inputValue * 6.40,
      
       })
    }
    USDtoYen = () => {
      this.setState({ 
       newBal: this.state.inputValue * 110.67,
      
       })
   }

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
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