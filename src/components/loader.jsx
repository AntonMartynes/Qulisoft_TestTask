import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const LoaderView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoaderText = styled.Text`
  margin-top: 15px;
`;

export const Loader = () => {
  return (
    <LoaderView>
      <ActivityIndicator size={'large'} />
      <LoaderText>Please wait, images are loading</LoaderText>
    </LoaderView>
  );
};
