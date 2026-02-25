import { shihtOnts } from '../shihtOnts';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { mifoQwests } from '../ArceGishHumiAsteses/mifoQwests';
import React from 'react';

const { width: uimorw, height: gihyh } = Dimensions.get('window');
const LEVELS_COUNT = 10;
const PASSED_COLORS = ['#34D73E', '#94F997', '#28BA20'];

interface Props {
    setCurrentLevel?: (level: number) => void;
    userAnswers: number[];
    passedLevels?: boolean[];
    questions?: { word: string; options: string[]; correct: number }[];
    restartLevel?: () => void;
    backToLevels: () => void;
    currentLevel?: number;
    customTexts?: {
        winTitle?: string;
        scoreLabel?: string;
        loseTitle?: string;
        shareButton?: string;
        loseSubtitle?: string;
        backButton?: string;
        winSubtitle?: string;
        notGreen?: boolean;
    };
    onShare?: () => void;
}

export default function ResultScreen({
    currentLevel = 0,
    userAnswers,
    passedLevels,
    setCurrentLevel,
    restartLevel,
    backToLevels,
    questions,
    customTexts,
    onShare,
    notGreen,
}: Props) {
    const questionsArr = questions || mifoQwests[currentLevel];
    const correctCount = userAnswers.reduce((acc, ansIdx, idx) => {
        return acc + (ansIdx === questionsArr[idx].correct ? 1 : 0);
    }, 0);
    const isPassed = customTexts
        ? correctCount >= 16
        : correctCount >= 4;
    const isLastLevel = currentLevel === LEVELS_COUNT - 1;
    const nextLevel = currentLevel + 1;

    // Mighty Rush custom texts
    const scoreLabel = customTexts?.scoreLabel || 'Your Score:';
    const winTitle = customTexts?.winTitle || (isLastLevel ? 'You win!' : 'You won!');
    const winSubtitle = customTexts?.winSubtitle || (isLastLevel ? 'You received a medal, see it in achievements!' : 'Congratulations!\nNext level unlocked.');
    const loseTitle = customTexts?.loseTitle || 'You lost';
    const loseSubtitle = customTexts?.loseSubtitle || 'Do you want to try again?';
    const shareButton = customTexts?.shareButton || (isPassed
        ? (isLastLevel ? 'Back to levels' : `Start level ${nextLevel + 1}`)
        : `Restart level ${currentLevel + 1}`);
    const backButton = customTexts?.backButton || 'Back home';

    return (
        <View style={{
            paddingTop: gihyh * 0.09,
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-start',
        }}>
            {/* Bull image */}
            <View style={{ marginBottom: gihyh * 0.04 }}>
                {/* Тут має бути ваш компонент з биком */}
            </View>
            <View style={{
                paddingVertical: gihyh * 0.03,
                borderColor: '#FFD076',
                width: uimorw * 0.85,
                borderRadius: uimorw * 0.05,
                borderWidth: 1,
                alignItems: 'center',
                backgroundColor: 'rgba(70, 64, 206, 0.3)',
            }}>
                <Text style={{
                    marginBottom: gihyh * 0.01,
                    color: '#C6C7E9',
                    fontSize: uimorw * 0.045,
                    fontFamily: shihtOnts.foriLexenBod,
                }}>{scoreLabel} {correctCount}</Text>
                <Text style={{
                    marginBottom: gihyh * 0.025,
                    fontSize: uimorw * 0.07,
                    color: '#fff',
                    fontFamily: shihtOnts.foriLexenBod,
                }}>
                    {isPassed ? winTitle : loseTitle}
                </Text>
                <Text style={{
                    marginBottom: gihyh * 0.025,
                    fontSize: uimorw * 0.045,
                    textAlign: 'center',
                    color: '#C6C7E9',
                    fontFamily: shihtOnts.foriLexenLit,
                }}>
                    {isPassed ? winSubtitle : loseSubtitle}
                </Text>
                <CikrLogiColifBut
                    isScoundrel={false}
                    timiTixtLbl={shareButton}
                    drugeiColors={!notGreen && isPassed ? PASSED_COLORS : undefined}
                    onPress={isPassed && onShare ? onShare : (restartLevel || backToLevels)}
                    adothStyliOfCont={{
                        marginTop: gihyh * 0.01,
                        marginBottom: gihyh * 0.015,
                        height: gihyh * 0.07,
                        width: uimorw * 0.7,
                    }}
                />
                <TouchableOpacity onPress={backToLevels}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#C6C7E9',
                        fontSize: uimorw * 0.05,
                        fontFamily: shihtOnts.foriLexenMed,
                    }}>{backButton}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
