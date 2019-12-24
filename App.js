import React, { Component } from "react"
import {
  Text, View,
}from 'react-native'

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/detalles/containers/suggestion-list'
import API from './utils/api'
import CategoryList from './src/detalles/containers/category-list'
import Player from './src/player/containers/player'
import { Provider } from 'react-redux'
import store from './store'

export default class App extends Component{
  state = {
    suggestionList: [],
    categoryList: [],
  }
  async componentDidMount() {
    const hotels = await API.getSuggestion()
    // console.log('hotels', hotels)
    const categories = await API.getHotelList()
    // console.log(hotels)
    // console.log(categories) 
    this.setState({
      suggestionList: hotels,
      categoryList: categories,
    })
  }
  //   store.dispatch({
  //     type: 'SET_CATEGORY_LIST',
  //     payload: {
  //       categoryList
  //     }
  //   })
  //   store.dispatch({
  //     type: 'SET_SEGGESTION_LIST',
  //     payload: {
  //       suggestionList
  //     }
  //   })
  // }
  render() {
    return (
      <Provider
        store={store}
      >
        <Home>
          <Header />
          <Player />
          <CategoryList
            list={this.state.categoryList}
          />
          <SuggestionList
            list={this.state.suggestionList}
          />
        </Home>
         </Provider>
    )
  }
}
