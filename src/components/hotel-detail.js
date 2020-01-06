import React from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';

function HotelDetail(props) {
  return (
    <View>
      <View>
        <Image style={styles.cover} source={{uri: props.hotel.image}} />
      </View>
      <View>
        <Text style={styles.city}>{props.hotel.city}</Text>
        <Text style={styles.price}>Precio por noche {props.hotel.price}</Text>
        <Text>Estrellas {props.hotel.stars}</Text>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={parseInt(props.hotel.stars, 10)}
          fullStarColor={'#FFD700'}
          emptyStarColor={'#FFD700'}
          starSize={25}
        />
        <Text style={styles.detail}>Detalles del Hotel</Text>
        <Text style={styles.description}>{props.hotel.description}</Text>
        <Text style={styles.textImg}>Imágenes</Text>
        <View>
          <FlatList
            horizontal
            keyExtractor={this.keyExtractor}
            data={props.hotel['image-description']}
            ListEmptyComponent={() => <View />}
            ItemSeparatorComponent={() => <View />}
            renderItem={({item}) => (
              <Image style={styles.cover} source={{uri: item.image}} />
            )}
          />
        </View>
      </View>
      <Text style={styles.footer}>Siguenos tambien en:</Text>
      <View style={styles.redes}>
        <Icon name="facebook" size={50} color="#7a85ff" />
        <Icon name="twitter" size={50} color="#7a85ff" />
        <Icon name="instagram" size={50} color="#7a85ff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    height: 200,
    width: 400,
    margin: 8,
  },
  price: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignContent: 'flex-start',
    width: 200,
  },
  description: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 12,
    borderRadius: 5,
    overflow: 'hidden',
    alignContent: 'center',
    textAlign: 'justify',
  },
  textImg: {
    fontSize: 18,
    margin: 8,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 18,
    textAlign: 'center',
    color: '#a56d5d',
    fontWeight: 'bold',
  },
  redes: {
    padding: 20,
    position: 'relative',
    alignItems: 'center',
  },
});

export default HotelDetail;
