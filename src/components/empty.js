import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Empty(props) {
  return (
    <View style={styles.container}>
      <Icon name="q" size={50} color="#7a85ff" />
        <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default Empty;
