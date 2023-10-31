import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

//package
import Icon from 'react-native-vector-icons/AntDesign';

//navigation
import {useNavigation} from '@react-navigation/native';

//assets
import facebooklogo from '../assets/Icon/Facebook.png';
import googlelogo from '../assets/Icon/Google.png';
import applelogo from '../assets/Icon/Apple.png';
import OAuthImage from '../assets/OAuth_Image.png';

//components
import CustomButton from '../components/CustomButton';

//constants
import {Colors} from '../constants/Colors';
import {oauthPageText} from '../constants/StaticText';
import {FONT_SIZE_EXTRA_LARGE, FONT_SIZE_NORMAL} from '../constants/Fontsize';
import {Height, Width} from '../constants/Dimensions';

const OAuthscreen = () => {
  let navigation = useNavigation();

  //   navigation handler
  function navigateTo(screenTitle, params) {
    return navigation.navigate(screenTitle, params);
  }
  return (
    <View style={styles.container}>
      <Icon name="arrowleft" size={24} color={Colors.Grey} />
      <Image source={OAuthImage} style={styles.image} />
      <Text style={styles.welcomeHeader}>{oauthPageText.header}</Text>
      <View style={styles.buttonView}>
        {/* facebook button */}
        <CustomButton
          text={oauthPageText.facebookButtonText}
          textColor={Colors.Black}
          fontFamily={'Poppins-Regular'}
          backgroundColor={Colors.White}
          width={Width / 1.2}
          borderRadius={2}
          onpress={() => {}}
          // marginBottom={8}
          elevation={4}
          imageName={facebooklogo}
          imageHeight={Height / 24}
          imageWidth={Width / 16}
          fontSize={FONT_SIZE_NORMAL}
          fontWeight="500"
        />

        {/* Google button */}
        <CustomButton
          text={oauthPageText.googleButtonText}
          textColor={Colors.Black}
          fontFamily={'Poppins-Regular'}
          backgroundColor={Colors.White}
          width={Width / 1.2}
          borderRadius={2}
          onpress={() => {}}
          elevation={4}
          // marginBottom={8}
          imageName={googlelogo}
          imageHeight={Height / 24}
          imageWidth={Width / 16}
          fontSize={FONT_SIZE_NORMAL}
          fontWeight="500"
        />
        {/* Apple button */}
        <CustomButton
          text={oauthPageText.facebookButtonText}
          textColor={Colors.Black}
          fontFamily={'Poppins-Regular'}
          backgroundColor={Colors.White}
          width={Width / 1.2}
          borderRadius={2}
          // marginBottom={8}
          onpress={() => {}}
          elevation={4}
          imageName={applelogo}
          imageHeight={Height / 24}
          imageWidth={Width / 16}
          fontSize={FONT_SIZE_NORMAL}
          fontWeight="500"
        />
        {/* dividerline */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.dividerLine} />

          <Text style={styles.dividerLineText}>{oauthPageText.or}</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* bottom button */}
        <CustomButton
          text={oauthPageText.phoneButtonText}
          width={Width / 1.1}
          borderRadius={8}
          onpress={() => {}}
        />
        <Text style={styles.accountText}>
          {oauthPageText.accountText}
          <Text style={styles.signUpText} onPress={() => {}}>
            {oauthPageText.signUpText}
          </Text>
        </Text>
      </View>
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
    height: Height / 3,
  },
  welcomeHeader: {
    color: Colors.Black,
    fontSize: FONT_SIZE_EXTRA_LARGE,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  dividerLine: {
    backgroundColor: 'black',
    height: 2,
    flex: 1,
  },
  dividerLineText: {
    color: Colors.Grey,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 4,
    fontSize: 16,
  },
  accountText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Grey,
  },
  signUpText: {
    fontFamily: 'Poppins-Bold',
    color: Colors.Primary_blue,
  },
});
