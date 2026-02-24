const { width, height } = TheSkydims.get('window');
import { dranesofnts } from '../dranesofnts';
import { Dimensions as TheSkydims, TouchableOpacity as UndtecTopablacity, ImageBackground as ButtnMaterial, GestureResponderEvent as GestureRespEvnt, Text as Label, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface DoubleBordersBuntnProps {
    buttype?: 'square' | 'round-square' | 'pirp-square';
    stirifonRozm?: number;
    opacity?: number; // додано
    morStilOfWrapBtn?: object;
    onPress: (event: GestureRespEvnt) => void;
    disabled?: boolean;
    children?: React.ReactNode; // додано
    buttonText: string;
    isScoundrel?: boolean; // додано
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
    isScoundrel = false, // додано
}) => {

    return (
        <UndtecTopablacity onPress={onPress} activeOpacity={0.8} style={[{
            width: width * 0.55,
            height: height * 0.077,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: width * 0.05,
            borderWidth: width * 0.005,
            borderColor: '#FFD076',
        }, morStilOfWrapBtn]} disabled={disabled}>
            {!isScoundrel && (
                <LinearGradient
                    colors={['#D79C34', '#F9F694', '#BA8320']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                />
            )}
            {children ? children : (
                <Label style={[{
                    letterSpacing: 1,
                    textAlign: 'center',
                    opacity, // додано
                    paddingHorizontal: width * 0.04,
                    fontFamily: dranesofnts.foriLexenBod,
                    color: isScoundrel ? '#C6C7E9' : '#2C2C2C',
                }, { fontSize: stirifonRozm ? stirifonRozm : width * 0.064, }]} numberOfLines={1} adjustsFontSizeToFit>
                    {buttonText}
                </Label>
            )}
        </UndtecTopablacity>
    );
};

export default CikrLogiColifBut;