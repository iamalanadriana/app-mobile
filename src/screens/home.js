import React, {Component} from 'react';
import Header from '../components/header';
import API from '../API';
import CategoryList from '../containers/category-list';
import HotelList from '../containers/hotel-list';
import Player from '../player/containers/player';
import {ScrollView} from 'react-native';

class Home extends Component {
  state = {
    hotels: [],
    categoryList: [],
  };
  async componentDidMount() {
    const hotels = await API.getHotels();
    this.setState({hotels});
  }
  render() {
    return (
      <ScrollView>
        <Header />
        <Player />
        <CategoryList list={this.state.categoryList} />
        <HotelList list={this.state.hotels} />
      </ScrollView>
    );
  }
}

export default Home;
