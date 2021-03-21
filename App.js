/**
 * Mimi Maker
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

class MimiMakerApp extends Component {
  constructor (props) {
    super(props);
    this.state = {upperText: '', bottomText: ''}
    this.write = this.write.bind(this);
  }

  mimimiTransformer(text){

    let mimimi = text.toLowerCase();

    mimimi = mimimi.replace(/(a|e|i|o|u)/g, 'i');
		mimimi = mimimi.replace(/(á|à|ã|â)/g, 'i');
		mimimi = mimimi.replace(/(é|è|ê)/g, 'i');
		mimimi = mimimi.replace(/(í|ì|î)/g, 'i');
		mimimi = mimimi.replace(/(ó|ò|ô)/g, 'i');
		mimimi = mimimi.replace(/(ú|ù|û)/g, 'i');

    return mimimi;
  }

  write (text) {
    let state = this.state;
    state.upperText = text;
    state.bottomText = this.mimimiTransformer(text);
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>CRIADOR DE MIMI</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder='Digite seu mimi' onChangeText={this.write}/>
        </View>
        <View style={styles.area}>
          <Text style={[styles.text, styles.upperText]}>{this.state.upperText.toUpperCase()}</Text>
          <Image style={styles.littleBoy} source={require('./images/mimimi.jpg')} />
          <Text style={[styles.text, styles.bottomText]}>{this.state.bottomText.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999999',
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  inputArea: {
    alignSelf: 'stretch'
  },
  input: {
    borderWidth: 1,
    borderColor: '#99999999',
    backgroundColor: '#EEEEEEEE',
    color: '#000000',
    height: 40,
    margin: 20,
    padding: 10,
  },
  area: {
    marginTop: 10,
    width: 300,
    height: 300,
  },
  littleBoy: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0,
  },
  text: {
    fontSize: 25,
    color: '#FFFFFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height:70,
    

  },
  upperText: {
    zIndex: 1,
  },
  bottomText: {
    zIndex: 0,
    marginTop: -70,
  },
});

export default MimiMakerApp;
