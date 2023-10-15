import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../constants/Colors';
import OAuthImage from '../assets/OAuth_Image.png';
import {Height} from '../constants/Dimensions';

const OAuthscreen = () => {
  return (
    <View style={styles.container}>
      <Icon name="arrowleft" size={24} color={Colors.Grey} />
      <Image source={OAuthImage} style={styles.image} />
      <Text>OAuthscreen</Text>
    </View>
  );
};

export default OAuthscreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flex: 1,
    padding: 8,
  },
  image: {
    width: '100%',
    height: Height / 4,
  },
});
