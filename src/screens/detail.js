import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import API from '../API';
import Header from '../components/header';
import HotelDetail from '../components/hotel-detail';
import Loading from '../components/loading';

class Detail extends Component {
  state = {
    hotel: {},
    loading: true,
  };
  async componentDidMount() {
    const hotel = await API.getHotelById(this.props.id);
    this.setState({loading: false, hotel});
  }

  render() {
    return (
      <ScrollView>
        <Header />
        {this.state.loading && <Loading />}
        {!this.state.loading && <HotelDetail hotel={this.state.hotel} />}
      </ScrollView>
    );
  }
}

export default Detail;
