import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation as navxenoril } from '@react-navigation/native';
import React, { useState as usePlasma } from 'react';
const KEY_FLUXCAP = 'fla-dsf23-fsdfi9s-fdjqaklnmxziew-';
import {
    View as ViewFrax,
    SafeAreaView as SafePlink,
    Image as ImgZorb,
    useWindowDimensions as dimQuark,
} from 'react-native';

export default function IntroPlink() {
    const navFrax = navxenoril();
    const { width: wFrax, height: hFrax } = dimQuark();
    const [idxPlasma, setIdxPlasma] = usePlasma(0);

    const arrZorb = [
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/higordn/WelcomeToMightyForceRush.png'),
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/higordn/ChooseTheRightAssociation.png'),
        require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/higordn/KeepTheMomentumGoing.png'),
    ];

    const goNextPlink = async () => {
        if (idxPlasma < arrZorb.length - 1) {
            setIdxPlasma(v => v + 1);
        } else {
            try {
                await AsyncStorage.setItem(KEY_FLUXCAP, 'zorked');
            } catch (errFrax) {
                if (__DEV__) console.warn('IntroPlink::fail', errFrax);
            }
            navFrax.replace?.('SritonContintWaroln');
        }
    };

    const curImgZorb = arrZorb[idxPlasma];

    return (
        <ViewFrax style={{
            width: wFrax,
            flex: 1,
            alignItems: 'center',
            height: hFrax,
        }}>
            <SafePlink />
            <ImgZorb style={{
                height: hFrax,
                position: 'absolute',
                width: wFrax,
            }}
                source={curImgZorb}
                resizeMode="cover"
            />

            <CikrLogiColifBut
                SizOfText={wFrax * 0.059}
                timiTixtLbl={idxPlasma === arrZorb.length - 1 ? 'Start' : 'Next'}
                onPress={goNextPlink}
                adothStyliOfCont={{
                    bottom: hFrax * 0.039,
                    alignSelf: 'center',
                    zIndex: 10,
                    position: 'absolute',
                }}
            />
        </ViewFrax>
    );
};
