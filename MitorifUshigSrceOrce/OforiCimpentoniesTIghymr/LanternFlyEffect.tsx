import React from 'react';
import { Animated, Image, Dimensions } from 'react-native';

const { width: ercofshr, height: ytorvys } = Dimensions.get('window');

interface LanternFlyEffectProps {
    lanternCount?: number;
    imageSource?: any;
}

export const LanternFlyEffect: React.FC<LanternFlyEffectProps> = ({
    lanternCount = 5,
    imageSource = require('../ArceGishHumiAsteses/CerohyirilGorshLantreiImzhses/flylitwthotefcts.png'),
}) => {
    const lanterns = Array.from({ length: lanternCount });
    return (
        <>
            {lanterns.map((_, idx) => {
                const left = Math.random() * (ercofshr * 0.7) + ercofshr * 0.1;
                const delay = idx * 600 + Math.random() * 400;
                const anim = React.useRef(new Animated.Value(ytorvys)).current;

                React.useEffect(() => {
                    Animated.loop(
                        Animated.sequence([
                            Animated.delay(delay),
                            Animated.timing(anim, {
                                toValue: -ytorvys * 0.25,
                                duration: 4000 + Math.random() * 2000,
                                useNativeDriver: true,
                            }),
                            Animated.timing(anim, {
                                toValue: ytorvys,
                                duration: 0,
                                useNativeDriver: true,
                            }),
                        ])
                    ).start();
                }, []);

                return (
                    <Animated.View
                        key={idx}
                        style={{
                            position: 'absolute',
                            left,
                            transform: [{ translateY: anim }],
                            zIndex: 0,
                        }}
                    >
                        <Image
                            source={imageSource}
                            style={{
                                width: ercofshr * 0.13,
                                height: ercofshr * 0.13,
                                opacity: 0.85,
                            }}
                            resizeMode="contain"
                        />
                    </Animated.View>
                );
            })}
        </>
    );
};
