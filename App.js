import * as React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function App() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                shouldPlay={true}
                resizeMode={ResizeMode.COVER}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.overlay}>
                <Text>Video Name</Text>
                <Text>Details</Text>
                <Text>Etc</Text>
                <Text>Etc..</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'cover',
        // flex: 1,
        // flexDirection: "column"
        width: '100%',
        height: '100%',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 50,
        // left: 5,
        width: '100%',
        // opacity: 100,
        // zIndex: 100
    }
});
