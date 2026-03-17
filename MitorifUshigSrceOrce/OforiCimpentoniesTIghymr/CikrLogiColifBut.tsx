const { width, height } = Usimneis.get('window');
import ThreGoldGradint from './ThreGoldGradint';
import { shihtOnts } from '../shihtOnts';
import { TouchableOpacity as ToghyZonPrs, Dimensions as Usimneis, Text as Ttl, GestureResponderEvent } from 'react-native';
import React from 'react';

interface DoubleBordersBuntnProps {
    isScoundrel?: boolean; // додано
    children?: React.ReactNode; // додано
    SizOfText?: number;
    adothStyliOfCont?: object;
    onPress: (event: GestureResponderEvent) => void;
    opacity?: number; // додано
    timiTixtLbl: string;
    drugeiColors?: string[] | undefined; // додано
    disabled?: boolean;
}

const CikrLogiColifBut: React.FC<DoubleBordersBuntnProps> = ({
    disabled = false,
    children, // додано
    timiTixtLbl,
    SizOfText = width * 0.053,
    adothStyliOfCont,
    onPress,
    opacity = 1, // додано
    isScoundrel = false, // додано
    drugeiColors = ['#D79C34', '#F9F694', '#BA8320'], // додано
}) => {

    return (
        <ToghyZonPrs onPress={onPress} activeOpacity={0.8} style={[{
            width: width * 0.55,
            height: height * 0.077,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: width * 0.05,
            borderWidth: width * 0.005,
            borderColor: '#FFD076',
        }, adothStyliOfCont]} disabled={disabled}>
            {!isScoundrel && (
                <ThreGoldGradint drugeiColors={drugeiColors ? drugeiColors : undefined} />
            )}
            {children ? children : (
                <Ttl style={[{
                    letterSpacing: 1,
                    textAlign: 'center',
                    opacity, // додано
                    paddingHorizontal: width * 0.04,
                    fontFamily: shihtOnts.foriLexenBod,
                    color: isScoundrel ? '#C6C7E9' : '#2C2C2C',
                }, { fontSize: SizOfText ? SizOfText : width * 0.064, }]} numberOfLines={1} adjustsFontSizeToFit>
                    {timiTixtLbl}
                </Ttl>
            )}
        </ToghyZonPrs>
    );
};

export default CikrLogiColifBut;