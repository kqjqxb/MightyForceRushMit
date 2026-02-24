import React from 'react';
import {
    Image,
    View as PonakXob,
    Dimensions as ResizOfTheScn,
    Share,
} from 'react-native';
import { dranesofnts } from '../dranesofnts';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';

export default function TyhAchievmentsMur() {
    const { width: oepiw, height: snah } = ResizOfTheScn.get('window');

    return (
        <PonakXob style={{
            justifyContent: 'flex-start',
            backgroundColor: 'transparent',
            flex: 1,
            alignItems: 'center',
        }}>


            <CikrLogiColifBut
                onPress={() => { }}
                buttonText={'Share'}
                morStilOfWrapBtn={{
                    zIndex: 10,
                    alignSelf: 'center',
                    marginBottom: snah * 0.02,
                    width: oepiw * 0.75,
                }}
            />

        </PonakXob>
    );
}
