const { width, height } = TheSkydims.get('window');
import { dranesofnts } from '../dranesofnts';
import { Dimensions as TheSkydims, TouchableOpacity as UndtecTopablacity, ImageBackground as ButtnMaterial, GestureResponderEvent as GestureRespEvnt, Text as Label, } from 'react-native';
import React from 'react';

interface DoubleBordersBuntnProps {
    buttype?: 'square' | 'round-square' | 'pirp-square';
    stirifonRozm?: number;
    opacity?: number; // додано
    morStilOfWrapBtn?: object;
    onPress: (event: GestureRespEvnt) => void;
    disabled?: boolean;
    children?: React.ReactNode; // додано
    buttonText: string;
}

const CikrLogiColifBut: React.FC<DoubleBordersBuntnProps> = ({
    disabled = false,
    children, // додано
    buttonText,
    stirifonRozm = width * 0.053,
    morStilOfWrapBtn,
    buttype = 'square',
    onPress,
    opacity = 1, // додано
}) => {

    const getgroundByType = (type: string) => {
        switch (type) {
            case 'round-square':
                return require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/formsofbuttons/roundedgrn.png');
            case 'pirp-square':
                return require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/formsofbuttons/purpsqr.png');
            default:
                return require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/formsofbuttons/squareBtn.png');
        }
    }

    return (
        <UndtecTopablacity onPress={onPress} activeOpacity={0.8} style={[morStilOfWrapBtn]} disabled={disabled}>
            <ButtnMaterial resizeMode="stretch" style={[{
                justifyContent: 'center',
                alignItems: 'center',
            }, { height: height * 0.08, width: width * 0.61, }, morStilOfWrapBtn]}
                source={getgroundByType(buttype)}
            >
                {children ? children : (
                    <Label style={[{
                        letterSpacing: 1,
                        textAlign: 'center',
                        opacity, // додано
                        paddingHorizontal: width * 0.04,
                        fontFamily: dranesofnts.furitSetrB,
                        color: 'white',
                    }, { fontSize: stirifonRozm ? stirifonRozm : width * 0.05, }]} numberOfLines={1} adjustsFontSizeToFit>
                        {buttonText}
                    </Label>
                )}
            </ButtnMaterial>
        </UndtecTopablacity>
    );
};

export default CikrLogiColifBut;