import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Empty from '../components/empty';
import Separator from '../components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/categories-list-layout';

class CategoryList extends Component {
  keyExtractor = item => (item.id ? item.id.toString() : 0);
  renderEmtpy = () => <Empty text="" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => <Category {...item} />;
  render() {
    return (
      <Layout title="Nuestros mejores hoteles">
        <FlatList
          // horizontal
          // keyExtractor={this.keyExtractor}
          // data={this.props.list}
          // ListEmptyComponent={this.renderEmtpy}
          // ItemSeparatorComponent={this.itemSeparator}
          // renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default CategoryList;
