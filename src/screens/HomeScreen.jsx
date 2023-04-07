import React from 'react';
import {
  View,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {Post} from '../components/Post';
import axios from 'axios';
import {Loader} from '../components/loader';

export const HomeScreen = ({navigation}) => {
  const [isloading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get(
        'https://api.unsplash.com/photos/random?count=15&client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
      )
      .then(({data}) => {
        setItems(data);
      })
      .catch(er => {
        console.log(er);
        Alert.alert('Error', 'Unable to download data');
      })
      .finally(() => setIsLoading(false));
  };

  React.useEffect(fetchPosts, []);

  if (isloading) {
    return <Loader />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isloading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Photo', {
                title: item.alt_description,
                imageURL: item.links.download,
              })
            }>
            <Post
              title={item.alt_description}
              imageURL={item.links.download}
              author={item.user.name}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
