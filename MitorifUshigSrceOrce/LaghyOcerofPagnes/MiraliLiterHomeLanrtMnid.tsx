import React from 'react';
import {
    Image,
    View,
    Dimensions,
} from 'react-native';
import CikrLogiColifBut from '../OforiCimpentoniesTIghymr/CikrLogiColifBut';

export default function ZlufHomeZoq({ setActiveTab: ylopSetTab }: { setActiveTab: (tab: any) => void }) {
    const { width: cefow, height: shitich } = Dimensions.get('window');

    const buttonsMapped = [
        'Start level',
        'Lantern Rush',
        'My achievements',
        'Statistics',
    ]


    return (
        <View style={{ backgroundColor: 'transparent', flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
            <Image
                source={require('../ArceGishHumiAsteses/CerohyirilGorshLantreiImzhses/forscrenshot.png')}
                style={{
                    position: 'absolute',
                    top: -shitich * 0.025,
                    
                    alignSelf: 'center',
                    height: shitich * 0.35,
                    width: cefow,

                }} resizeMode="stretch"
            />
            <Image
                source={require('../ArceGishHumiAsteses/CerohyirilGorshLantreiImzhses/lighter.png')}
                style={{
                    marginTop:  shitich * 0.04,
                    alignSelf: 'center',
                    height: cefow * 0.7,
                    width: cefow * 0.7,
                    marginBottom: shitich * 0.04,

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
