import React from 'react';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;

  background-color: #f5f7f8;
  border-bottom-width: 1px;
  border-bottom-color: rgb(231, 23, 23, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.685);
  margin-top: 20px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

export const Post = ({title, imageURL, author}) => {
  return (
    <PostView>
      <PostImage source={{uri: imageURL}} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{author}</PostDate>
      </PostDetails>
    </PostView>
  );
};
