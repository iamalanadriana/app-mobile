import React, { Component } from 'react'
import Video from 'react-native-video'
import {
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native'
import Layout from '../component/layout'
import ControlLayout from '../component/control-layout'
import PlayPause from '../component/play-pause'
// import FullScreen from '../component/full-screen'

class Player extends Component {
    state = {
        loading: true,
        paused: false
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }
    onLoad = () => {
        this.setState({
            loading: false
        })
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    // onFullScreen = () => {
    //     this.player.presentFullscreenPlayer();
    // }
    render() {
        return (
            <Layout
            loading={this.state.loading}
            video={
                <Video
                ref={(ref) => {
                    this.player = ref
                }}
                source={require('../../../assets/preview-hotel.mp4')}
                style={styles.video}
                resizeMode="contain"
                onBuffer={this.onBuffer}
                onLoad={this.onLoad}
                paused={this.state.paused}
            />
            }
            loader= {
                <ActivityIndicator color='red' />
            }
            controls= {
                <ControlLayout>
                    <PlayPause
                        onPress={this.playPause}
                        paused={this.state.paused}
                    />
                    {/* <FullScreen onFullScreen={this.onFullScreen} /> */}
                    {/* <Text>pantalla-completa</Text>
                    <Text>progreso</Text>
                    <Text>tiempo</Text> */}
                </ControlLayout>
            }
        />
        )
    }
}

const styles = StyleSheet.create ({
    video:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
})

export default Player