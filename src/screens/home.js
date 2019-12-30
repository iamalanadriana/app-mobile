import React, { Component } from 'react'
import Header from '../sections/components/header'
import API from '../utils/api'
import CategoryList from '../detalles/containers/category-list'
import SuggestionList from '../detalles/containers/suggestion-list'
import Player from '../player/containers/player'
import { ScrollView } from 'react-native'

class Home extends Component {
  state = {
    suggestionList: [],
    categoryList: [],
  }
  async componentDidMount() {
    const hotels = await API.getHotels()
    //const categories = await API.getHotelList()
    this.setState({
      suggestionList: hotels,
      //categoryList: categories,
    })
  }
  render() {
    return (
      <ScrollView>
        <Header />
        <Player />
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </ScrollView>
  )
  }
}

export default Home