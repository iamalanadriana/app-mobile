import React, { Component } from 'react'
import Header from '../sections/components/header'
import API from '../utils/api'
import CategoryList from '../detalles/containers/category-list'
import HotelList from '../detalles/containers/hotel-list'
import Player from '../player/containers/player'
import { ScrollView } from 'react-native'

class Home extends Component {
  state = {
    hotelList: [],
    categoryList: [],
  }
  async componentDidMount() {
    const hotels = await API.getHotels()
    //const categories = await API.getHotelList()
    this.setState({
      hotelList: hotels,
      //categoryList: categories,
    })
  }
  render() {
    return (
      <ScrollView>
        <Header />
        <Player />
        <CategoryList list={this.state.categoryList} />
        <HotelList list={this.state.hotelList} />
      </ScrollView>
  )
  }
}

export default Home