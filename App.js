import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {

  componentDidMount(){
    setInterval(() => this.setState((previousState) => (
      { textColor: previousState.textColor === 'black' ? 'white' : 'black' }
    )), 1000);
  }

  state = { textColor: 'black' };

  render() {
    return (
      <Text style={{color: this.state.textColor}}>{this.props.text}</Text>
    )
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 230}}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
