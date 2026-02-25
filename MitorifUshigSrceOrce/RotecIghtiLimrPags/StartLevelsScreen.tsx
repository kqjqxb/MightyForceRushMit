import React from 'react';
import { View, Dimensions } from 'react-native';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
const { width: shirin, height: wizota } = Dimensions.get('window');
const LEVELS_COUNT = 10;
const PASSED_COLORS = ['#34D73E', '#94F997', '#28BA20'];

interface Props {
    startQuiz: () => void;
    setCurrentLevel: (level: number) => void;
    currentLevel: number;
    passedLevels: boolean[];
}

export default function StartLevelsScreen({ currentLevel, setCurrentLevel, passedLevels, startQuiz }: Props) {
    return (
        <View style={{ justifyContent: 'flex-start', flex: 1, paddingTop: wizota * 0.09, alignItems: 'center', }}>
            <View style={{
                marginBottom: wizota * 0.04,
                alignItems: 'center',
                width: shirin * 0.8,
            }}>
                <View style={{
                    gap: shirin * 0.03,
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                }}>
                    {[...Array(LEVELS_COUNT)].map((_, idx) => {
                        const isSelected = idx === currentLevel;
                        const isPassed = passedLevels[idx];
                        const isUnlocked = idx === 0 || passedLevels[idx - 1];
                        let isScoundrel = true;
                        let drugeiColors;
                        let disabled = !isUnlocked;
                        if (isPassed && !isSelected) {
                            isScoundrel = false;
                            drugeiColors = PASSED_COLORS;
                            disabled = false;
                        } else if (isSelected && isUnlocked) {
                            isScoundrel = false;
                            drugeiColors = undefined;
                        }
                        return (
                            <CikrLogiColifBut
                                timiTixtLbl={`${idx + 1}`}
                                disabled={disabled}
                                onPress={() => isUnlocked && setCurrentLevel(idx)}
                                key={idx}
                                adothStyliOfCont={{
                                    marginBottom: wizota * 0.01,
                                    height: shirin * 0.17,
                                    borderRadius: shirin * 0.085,
                                    width: shirin * 0.17,
                                    margin: shirin * 0.015,
                                }}
                                isScoundrel={isScoundrel}
                                drugeiColors={drugeiColors}
                            />
                        );
                    })}
                </View>
            </View>
            <CikrLogiColifBut
                isScoundrel={false}
                onPress={startQuiz}
                timiTixtLbl={`Start level ${currentLevel + 1}`}
                adothStyliOfCont={{
                    marginTop: wizota * 0.04,
                    height: wizota * 0.07,
                    width: shirin * 0.7,
                }}
            />
        </View>
    );
}
