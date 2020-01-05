import React, { Component } from 'react'
import {
  FlatList,
} from 'react-native'
import Layout from '../components/hotel-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Hotel from '../components/hotel'

class HotelList extends Component {
  keyExtractor = item => item._id.toString(10)
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
      return (
        <Hotel {...item}/>
      )
  }
  render() {
    console.log('this.props.lis', this.props.list)

    return (
      <Layout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </Layout>
    )
  }
}

export default HotelList