import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';

//navigation
import {useNavigation} from '@react-navigation/native';

//constants
import {Colors} from '../constants/Colors';
import {Height} from '../constants/Dimensions';

//assets
import Logo from '../assets/logo.png';

const Splashscreen = () => {
  let navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
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
