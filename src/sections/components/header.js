import React from 'react'
import  {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

function Header(props) {
    return(
        <View>
            <SafeAreaView>
                <View style={style.container}>
                <Image 
                    source={require('../../../assets/logo.png')}
                    style={style.logo}
                />
                <View style={style.right}>
                    {props.children}
                </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    logo: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
    },
    container: {
        paddingVertical: 0.5,
        paddingHorizontal: 0.5,
        flexDirection: 'row'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
})

export default Header