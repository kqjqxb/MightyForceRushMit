import React from 'react';
import {
    Image,
    View,
    Dimensions,
    Share,
} from 'react-native';
import { dranesofnts } from '../dranesofnts';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';

export default function ForshLevels() {
    const { width: oepiw, height: snah } = Dimensions.get('window');



    return (
        <View style={{
            justifyContent: 'flex-start',
            backgroundColor: 'transparent',
            flex: 1,
            alignItems: 'center',
        }}>
            <CikrLogiColifBut
                onPress={() => {}}
                buttonText={'1'}
                morStilOfWrapBtn={{
                    width: oepiw * 0.17,
                    height: oepiw * 0.17,
                    marginTop: snah * 0.01,
                }}
                isScoundrel={false}
            />
        </View>
    );
}
