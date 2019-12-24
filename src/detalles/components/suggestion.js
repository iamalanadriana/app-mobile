import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

function Suggestion(props) {
    return (
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
                <Text style={styles.price}>Precio por noche   {props.price}</Text>
                <Text style={styles.stars}>{props.start}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
        color: 'white',
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
        alignContent: 'flex-start'
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Suggestion