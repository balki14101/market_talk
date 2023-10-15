// import React from 'react';

import {useNavigation} from '@react-navigation/native';

const NavigateTo = (screenTitle, params) => {
  let navigation = useNavigation();

  return navigation.navigate(screenTitle, params);
};

export default NavigateTo;
