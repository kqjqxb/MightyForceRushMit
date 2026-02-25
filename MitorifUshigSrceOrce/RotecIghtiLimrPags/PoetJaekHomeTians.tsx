import React from 'react';
import {
    Image,
    View,
    Dimensions,
} from 'react-native';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';

export default function ZlufHomeZoq({ setActiveTab: ylopSetTab }: { setActiveTab: (tab: any) => void }) {
    const { width: cefow, height: shitich } = Dimensions.get('window');

    const buttonsMapped = [
        'Start level',
        'Mighty Rush',
        'My achievements',
        'Statistics',
    ]


    return (
        <View style={{ backgroundColor: 'transparent', flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
            <Image
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/buihmog.png')}
                style={{
                    marginTop: - shitich * 0.04,
                    alignSelf: 'center',
                    height: cefow,
                    width: cefow,
                }} resizeMode="stretch"
            />

            {buttonsMapped.map((btn, idx) => (
                <CikrLogiColifBut
                    timiTixtLbl={btn}
                    onPress={() => ylopSetTab(btn)}
                    isScoundrel={idx !== 0}
                    key={idx}
                    adothStyliOfCont={{
                        width: cefow * 0.75,
                        marginBottom: shitich * 0.02,
                        alignSelf: 'center',
                        zIndex: 10,
                    }}
                />
            ))}

        </View>
    );
}
