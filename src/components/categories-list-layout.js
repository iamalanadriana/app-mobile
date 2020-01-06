import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

function CategoryListLayout(props) {
  return (
    <ImageBackground
      source={require('../assets/backgronund.png')}
      style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    margin: 0,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
    alignContent: 'center',
    textAlign: 'justify',
  },
});

export default CategoryListLayout;
