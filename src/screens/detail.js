import React, { Component } from 'react'
import { View, Image, Text, ScrollView, FlatList } from 'react-native'
import API from '../utils/api'
import Header from '../sections/components/header'
import { StyleSheet } from 'react-native'

class Detail extends Component {
  state = {
    hotel: {}
  }
  async componentDidMount() {
    const hotel = await API.getHotelById(this.props.id)
    this.setState({ hotel })
  }
  renderItem = ({ item }) => {
    return (
      <Image style={styles.cover}
        source={{
          uri: item.image
        }}
      />
    )
  }

  render() {
    return (
      <ScrollView>
        <Header />
        <View>
          <Image style={styles.cover}
            source={{
              uri: this.state.hotel.image
            }}
          />
        </View>
        <View>
          <Text style={styles.city}>{this.state.hotel.city}</Text>
          <Text style={styles.price}>Precio por noche   {this.state.hotel.price}</Text>
          <Text >{this.state.hotel.start}</Text>
          <Text style={styles.detail}>Detalles del Hotel</Text>
          <Text style={styles.description}>{this.state.hotel.description}</Text>
          <Text style={styles.textImg}>Imagenes</Text>
          <View>
            <FlatList
              horizontal
              keyExtractor={this.keyExtractor}
              data={this.state.hotel['image-description']}
              ListEmptyComponent={() => <View />}
              ItemSeparatorComponent={() => <View />}
              renderItem={this.renderItem}
            />
          </View>
        </View>
            <Text style={styles.footer}>
              Siguenos tambien en:
            </Text>
            <View style={styles.redes}>
            <Image source={require('../../assets/twitter.png' )} />
            <Image source={require('../../assets/facebook.png')} />
            </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  cover: {
    height: 200,
    width: 400,
    margin: 8
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
    width: 200
  },
  description: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 12,
    borderRadius: 5,
    overflow: 'hidden',
    alignContent: 'center',
    textAlign: 'justify'
  },
    textImg: {
      fontSize: 18,
      margin: 8,
      fontWeight: 'bold'
  },
  detail: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold'
  },
  city: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold'
  },
  footer: {
    fontSize: 18,
    textAlign: 'center',
    color: '#a56d5d',
    fontWeight: 'bold'
  },
  redes: {
    padding: 20,
    position: 'relative',
    alignItems: 'center'
  }
})

export default Detail