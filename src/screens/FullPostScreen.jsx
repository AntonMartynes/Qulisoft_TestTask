import React from 'react';
import styled from 'styled-components/native';
import {Loader} from '../components/loader';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const PostScreen = styled.View`
  padding: 20px;
  background-color: #f5f7f8;
`;

export const FullPost = ({route}) => {
  const [isloading, setIsLoading] = React.useState(true);
  const {imageURL} = route.params;

  //Just for immitation of loading data from api
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isloading) {
    return <Loader />;
  }

  return (
    <PostScreen>
      <PostImage
        source={{
          uri: imageURL,
        }}
      />
    </PostScreen>
  );
};
