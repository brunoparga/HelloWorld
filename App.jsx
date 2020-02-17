/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

const uri = 'https://facebook.github.io/react-native/img/tiny_logo.png';
const width = 64;
const height = 64;

export default class
IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Text style={{ fontSize: 96 }}>What is the best</Text>
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Image source={{ uri, width, height }} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
}
