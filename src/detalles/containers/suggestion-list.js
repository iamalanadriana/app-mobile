import React, { Component } from 'react'
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'

class SuggestionList extends Component {
  keyExtractor = item => item._id.toString(10)
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
      return (
        <Suggestion {...item}/>
      )
  }
  render() {
    console.log('this.props.lis', this.props.list)

    return (
      <Layout
        title="hoteles"
        >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default SuggestionList