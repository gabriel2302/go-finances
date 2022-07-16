import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  padding: 18px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.medium}; 
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;