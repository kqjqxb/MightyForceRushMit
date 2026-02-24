import React from 'react';
import {
    Image,
    View as PonakXob,
    Dimensions as ResizOfTheScn,
    Share,
} from 'react-native';
import { dranesofnts } from '../dranesofnts';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';

export default function ZlufHomeZoq({ setActiveTab: ylopSetTab }: { setActiveTab: (tab: any) => void }) {
    const { width: oepiw, height: snah } = ResizOfTheScn.get('window');

    const buttonsMapped = [
        'Start level',
        'Mighty Rush',
        'My achievements',
        'Statistics',
    ]


    return (
        <PonakXob style={{
            justifyContent: 'flex-start',
            backgroundColor: 'transparent',
            flex: 1,
            alignItems: 'center',
        }}>
            <Image
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/buihmog.png')}
                style={{
                    alignSelf: 'center',
                    width: oepiw,
                    height: oepiw,
                    marginTop: - snah * 0.04,
                }}
                resizeMode="stretch"
            />

            {buttonsMapped.map((btn, idx) => (
                <CikrLogiColifBut
                    key={idx}
                    onPress={() => ylopSetTab(btn)}
                    buttonText={btn}
                    morStilOfWrapBtn={{
                        zIndex: 10,
                        alignSelf: 'center',
                        marginBottom: snah * 0.02,  
                        width: oepiw * 0.75,
                    }}
                    isScoundrel={idx !== 0}
                />
            ))}

        </PonakXob>
    );
}
