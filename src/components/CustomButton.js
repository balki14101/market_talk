import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

//constants
import {Colors} from '../constants/Colors';
import {Height, Width} from '../constants/Dimensions';
import {FONT_SIZE_MEDIUM} from '../constants/Fontsize';

const CustomButton = ({
  text,
  width,
  height,
  onpress,
  disable,
  backgroundColor,
  borderWidth,
  borderColor,
  textColor,
  fontSize,
  fontFamily,
  fontWeight,
  borderRadius,
  marginTop,
  marginBottom,
  elevation,
  imageName,
  imageHeight,
  imageWidth,
}) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: backgroundColor ? backgroundColor : Colors.Primary_blue,
      height: height ? height : Height / 20,
      width: width ? width : null,
      borderWidth: borderWidth ? borderWidth : 0,
      borderColor: borderColor ? borderColor : Colors.Black,
      borderRadius: borderRadius ? borderRadius : 0,

      marginTop: marginTop ? marginTop : 0,
      marginBottom: marginBottom ? marginBottom : 0,
      elevation: elevation ? elevation : 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: textColor ? textColor : Colors.White,
      fontSize: fontSize ? fontSize : FONT_SIZE_MEDIUM,
      fontFamily: fontFamily ? fontFamily : 'Poppins-Bold',
      fontWeight: fontWeight ? fontWeight : '700',
    },
  });

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={onpress}
        disabled={disable}>
        {imageName ? (
          <Image
            source={imageName}
            style={{height: imageHeight, width: imageWidth, marginRight: 16}}
            resizeMode="contain"
          />
        ) : null}
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
