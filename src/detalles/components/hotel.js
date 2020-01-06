import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'

function Hotel(props) {
    return (
        <TouchableOpacity onPress={() => Actions.push("detail", { id: props._id })}>
        <View style={styles.container}>
            <View style={styles.left}>
                <Image 
                    style={styles.cover}
                    source={{
                        uri: props.image
                      }}
                />

                <View style={styles.hotel}>
                    <Text style={styles.hotelText}>Hotel</Text>
                </View>
            </View>

            <View style={styles.right}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.city}>{props.city}</Text>
                <Text style={styles.price}>Precio por noche {props.price}</Text>
                <Text style={styles.stars}>{props.stars}
                    <Icon name="star" size={20} color="#d8e000" />
                </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 20
    },
    hotel: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7
    },
    hotelText: {
        color: '#d8e000',
        fontSize: 11,

    },
    cover: {
        height: 120,
        width: 150,
        resizeMode: 'contain'
    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    price: {
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignContent: 'flex-start',
        width: 150
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Hotel