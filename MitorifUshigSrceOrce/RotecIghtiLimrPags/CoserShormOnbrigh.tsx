const STIRILO_LONC_RIKC = 'fla-dsf23-fsdfi9s-fdjqaklnmxziew-';
import { useNavigation as logiolnc } from '@react-navigation/native';
import React, { useState as olnsta } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Image as RiutZombrOlic,
    TouchableOpacity as IncoRufiLikPaticity,
    useWindowDimensions as usewindSinsin,
    SafeAreaView as UifdhSaf,
    View as NolcKriCigolXob,
} from 'react-native';

export const CoserShormOnbrigh = () => {
    const navQluf = logiolnc();
    const { width: ogilcWiln, height: furtiHonl } = usewindSinsin();
    const [blintIdx, setBlintIdx] = olnsta(0);

    const rignZobrshOlg = [
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/catchuser/TrainLogicWithFruitPatterns.png'),
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/catchuser/ThinkFastStayFocused.png'),
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/catchuser/DifferentLogicTypes.png'),
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/catchuser/CustomizeYourBackgrounds.png'),
    ];

    const handleZoq = async () => {
        if (blintIdx < rignZobrshOlg.length - 1) {
            setBlintIdx(v => v + 1);
        } else {
            try {
                await AsyncStorage.setItem(STIRILO_LONC_RIKC, 'zorked');
            } catch (err) {
                if (__DEV__) console.warn('ZoqIntro::fail', err);
            }
            navQluf.replace?.('SritonContintWaroln');
        }
    };

    const curZintImg = rignZobrshOlg[blintIdx];

    return (
        <NolcKriCigolXob style={{
            height: furtiHonl,
            alignItems: 'center',
            width: ogilcWiln,
            flex: 1,
        }}>
            <UifdhSaf />
            <RiutZombrOlic style={{
                width: ogilcWiln,

                position: 'absolute',

                height: furtiHonl,

            }}
                resizeMode="cover"
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/lights.png')}
            />
            <RiutZombrOlic style={{
                marginTop: furtiHonl * 0.1,
                position: 'absolute',
                width: ogilcWiln * 0.86,
                height: furtiHonl * 0.64,
            }}
                resizeMode="contain"
                source={curZintImg}
            />

            <IncoRufiLikPaticity style={{
                bottom: furtiHonl * 0.03,
                alignSelf: 'center',
                position: 'absolute',
            }} onPress={handleZoq}>
                <RiutZombrOlic source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/next.png')} style={{
                    height: furtiHonl * 0.08,



                    resizeMode: 'contain',



                    width: ogilcWiln * 0.4,



                }}
                />
            </IncoRufiLikPaticity>
        </NolcKriCigolXob>
    );
};
