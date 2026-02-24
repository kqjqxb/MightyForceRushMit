import React from 'react';
import { View, Dimensions } from 'react-native';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
const { width: oepiw, height: snah } = Dimensions.get('window');
const LEVELS_COUNT = 10;
const PASSED_COLORS = ['#34D73E', '#94F997', '#28BA20'];

interface Props {
    currentLevel: number;
    setCurrentLevel: (level: number) => void;
    passedLevels: boolean[];
    startQuiz: () => void;
}

export default function StartLevelsScreen({ currentLevel, setCurrentLevel, passedLevels, startQuiz }: Props) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: snah * 0.09,
        }}>
            <View style={{
                width: oepiw * 0.8,
                alignItems: 'center',
                marginBottom: snah * 0.04,
            }}>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: oepiw * 0.03,
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
                                key={idx}
                                onPress={() => isUnlocked && setCurrentLevel(idx)}
                                buttonText={`${idx + 1}`}
                                morStilOfWrapBtn={{
                                    width: oepiw * 0.17,
                                    height: oepiw * 0.17,
                                    margin: oepiw * 0.015,
                                    marginBottom: snah * 0.01,
                                    borderRadius: oepiw * 0.085,
                                }}
                                isScoundrel={isScoundrel}
                                drugeiColors={drugeiColors}
                                disabled={disabled}
                            />
                        );
                    })}
                </View>
            </View>
            <CikrLogiColifBut
                onPress={startQuiz}
                buttonText={`Start level ${currentLevel + 1}`}
                morStilOfWrapBtn={{
                    width: oepiw * 0.7,
                    height: snah * 0.07,
                    marginTop: snah * 0.04,
                }}
                isScoundrel={false}
            />
        </View>
    );
}
