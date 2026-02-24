import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ThreGoldGradint = () => (
    <LinearGradient
        colors={['#D79C34', '#F9F694', '#BA8320']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
);

export default ThreGoldGradint;
