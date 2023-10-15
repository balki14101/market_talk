import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

//navigation
import {useNavigation} from '@react-navigation/native';

//assets
import Dummy from '../assets/dummy.png';
//components
import CustomButton from '../components/CustomButton';

//constants
import {FONT_SIZE_EXTRA_LARGE, FONT_SIZE_NORMAL} from '../constants/Fontsize';
import {welcomePageText} from '../constants/StaticText';
import {Colors} from '../constants/Colors';
import {Height, Width} from '../constants/Dimensions';

const Welcomescreen = () => {
  let navigation = useNavigation();

  //   navigation handler
  function navigateTo(screenTitle, params) {
    return navigation.navigate(screenTitle, params);
  }

  return (
    <View style={styles.container}>
      <Image source={Dummy} style={styles.image} />

      {/* bottom view */}
      <View style={styles.bottomView}>
        {/* text container */}
        <View style={styles.bottomTextView}>
          <Text style={styles.welcomeHeader}>{welcomePageText.header}</Text>
          <Text style={styles.welcomeDescription}>
            {welcomePageText.description}
          </Text>
        </View>
        {/* bottom button */}
        <CustomButton
          text={welcomePageText.buttonText}
          width={Width / 1.1}
          borderRadius={8}
          onpress={() => navigateTo('OAuth')}
        />
      </View>
    </View>
  );
};

export default Welcomescreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 0.7,
    resizeMode: 'contain',
  },
  bottomView: {
    flex: 0.3,
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomTextView: {
    alignItems: 'center',

    height: Height / 6,
    justifyContent: 'space-evenly',
  },
  welcomeHeader: {
    color: Colors.Primary_blue,
    fontSize: FONT_SIZE_EXTRA_LARGE,
    fontFamily: 'Poppins-Bold',
  },
  welcomeDescription: {
    color: Colors.Black,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
