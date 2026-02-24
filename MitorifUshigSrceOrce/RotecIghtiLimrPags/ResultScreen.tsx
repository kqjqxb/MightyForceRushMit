import React from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { dranesofnts } from '../dranesofnts';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
import { mifoQwests } from '../ArceGishHumiAsteses/mifoQwests';

const { width: oepiw, height: snah } = Dimensions.get('window');
const LEVELS_COUNT = 10;
const PASSED_COLORS = ['#34D73E', '#94F997', '#28BA20'];

interface Props {
    currentLevel: number;
    userAnswers: number[];
    passedLevels: boolean[];
    setCurrentLevel: (level: number) => void;
    restartLevel: () => void;
    backToLevels: () => void;
}

export default function ResultScreen({
    currentLevel,
    userAnswers,
    passedLevels,
    setCurrentLevel,
    restartLevel,
    backToLevels,
}: Props) {
    const correctCount = userAnswers.reduce((acc, ansIdx, idx) => {
        return acc + (ansIdx === mifoQwests[currentLevel][idx].correct ? 1 : 0);
    }, 0);
    const isPassed = correctCount >= 4;
    const isLastLevel = currentLevel === LEVELS_COUNT - 1;
    const nextLevel = currentLevel + 1;

    const handleResultBtn = () => {
        if (isPassed && !isLastLevel) {
            setCurrentLevel(nextLevel);
            restartLevel();
        } else {
            backToLevels();
        }
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: snah * 0.09,
        }}>
            {/* Bull image */}
            <View style={{ marginBottom: snah * 0.04 }}>
                {/* Тут має бути ваш компонент з биком */}
            </View>
            <View style={{
                width: oepiw * 0.85,
                backgroundColor: 'rgba(70, 64, 206, 0.3)',
                borderRadius: oepiw * 0.05,
                paddingVertical: snah * 0.03,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#FFD076',
            }}>
                <Text style={{
                    fontFamily: dranesofnts.foriLexenBod,
                    fontSize: oepiw * 0.045,
                    color: '#C6C7E9',
                    marginBottom: snah * 0.01,
                }}>Your Score: {correctCount}</Text>
                <Text style={{
                    fontFamily: dranesofnts.foriLexenBod,
                    fontSize: oepiw * 0.07,
                    color: '#fff',
                    marginBottom: snah * 0.025,
                }}>{isPassed ? (isLastLevel ? 'You won!' : 'You won!') : 'You lost'}</Text>
                <Text style={{
                    fontFamily: dranesofnts.foriLexenLit,
                    fontSize: oepiw * 0.045,
                    color: '#C6C7E9',
                    marginBottom: snah * 0.025,
                    textAlign: 'center',
                }}>
                    {isPassed
                        ? (isLastLevel
                            ? 'Всі рівні успішно пройдено!'
                            : 'Congratulations!\nNext level unlocked.')
                        : 'Do you want to try again?'}
                </Text>
                <CikrLogiColifBut
                    onPress={handleResultBtn}
                    buttonText={
                        isPassed
                            ? (isLastLevel
                                ? 'Back to levels'
                                : `Start level ${nextLevel + 1}`)
                            : `Restart level ${currentLevel + 1}`
                    }
                    morStilOfWrapBtn={{
                        width: oepiw * 0.7,
                        height: snah * 0.07,
                        marginBottom: snah * 0.015,
                        marginTop: snah * 0.01,
                    }}
                    isScoundrel={false}
                    drugeiColors={isPassed ? PASSED_COLORS : undefined}
                />
                <TouchableOpacity onPress={backToLevels}>
                    <Text style={{
                        fontFamily: dranesofnts.foriLexenMed,
                        fontSize: oepiw * 0.05,
                        color: '#C6C7E9',
                        textAlign: 'center',
                    }}>Back home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
