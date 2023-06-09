import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './HomeScreen';
import {FullPost} from './FullPostScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{title: 'All Photos'}}
        />
        <Stack.Screen
          name={'Photo'}
          component={FullPost}
          options={{title: 'Photo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
