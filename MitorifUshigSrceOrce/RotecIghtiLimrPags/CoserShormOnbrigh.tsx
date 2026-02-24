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
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';

export default function CoserShormOnbrigh() {
    const navQluf = logiolnc();
    const { width: ogilcWiln, height: furtiHonl } = usewindSinsin();
    const [blintIdx, setBlintIdx] = olnsta(0);

    const rignZobrshOlg = [
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/higordn/WelcomeToMightyForceRush.png'),
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/higordn/ChooseTheRightAssociation.png'),
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/higordn/KeepTheMomentumGoing.png'),
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
                source={curZintImg}
            />

            <CikrLogiColifBut
                onPress={handleZoq}
                buttonText={blintIdx === rignZobrshOlg.length - 1 ? 'Start' : 'Next'}
                stirifonRozm={ogilcWiln * 0.059}
                morStilOfWrapBtn={{
                    position: 'absolute',
                    zIndex: 10,
                    alignSelf: 'center',
                    bottom: furtiHonl * 0.039,
                }}
            />
        </NolcKriCigolXob>
    );
};
