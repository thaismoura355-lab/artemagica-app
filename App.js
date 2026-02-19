import React, { useRef, useState } from 'react';
import { View, PanResponder, StyleSheet, Button, ColorPicker } from 'react-native';
import { Canvas } from 'react-native-canvas';

const App = () => {
    const canvasRef = useRef(null);
    const [color, setColor] = useState('#000');
    const [tools, setTools] = useState(['pencil', 'brush', 'eraser']);
    const [selectedTool, setSelectedTool] = useState('pencil');

    const handlePanResponderGrant = (evt, gestureState) => {
        // Start drawing
    };

    const handlePanResponderMove = (evt, gestureState) => {
        // Draw on canvas based on selected tool
    };

    const handlePanResponderRelease = () => {
        // Finish drawing
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: handlePanResponderGrant,
            onPanResponderMove: handlePanResponderMove,
            onPanResponderRelease: handlePanResponderRelease,
        })
    ).current;

    return (
        <View style={styles.container} {...panResponder.panHandlers}>
            <Canvas ref={canvasRef} style={styles.canvas} />
            <ColorPicker
                color={color}
                onColorChange={setColor}
                style={styles.colorPicker}
            />
            <View style={styles.toolContainer}>
                {tools.map((tool) => (
                    <Button
                        key={tool}
                        title={tool}
                        onPress={() => setSelectedTool(tool)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    canvas: {
        width: '100%',
        height: '80%',
    },
    toolContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingBottom: 20,
    },
    colorPicker: {
        width: '100%',
        height: 50,
    },
});

export default App;