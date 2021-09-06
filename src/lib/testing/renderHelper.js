import React from 'React';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

export const renderWithWrapper = children => {
  return render(<NavigationContainer>{children}</NavigationContainer>);
};
