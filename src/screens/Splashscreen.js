import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

//constants
import {Colors} from '../constants/Colors';
//assets
import Pic from '../assets/Enter-OTP.png';
import {Height} from '../constants/Dimensions';

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor: Colors.Primary_blue}}>splashScreen</Text>
      <Image source={Pic} style={styles.image} />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary_blue,
  },
  image: {
    width: '100%',
    height: Height / 4,
  },
});
