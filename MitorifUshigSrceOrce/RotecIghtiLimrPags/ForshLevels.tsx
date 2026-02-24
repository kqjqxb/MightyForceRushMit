import React, { useState, useEffect } from 'react';
import {
    View,
    Dimensions,
    Text,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dranesofnts } from '../dranesofnts';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
import { mifoQwests } from '../ArceGishHumiAsteses/mifoQwests';

const { width: oepiw, height: snah } = Dimensions.get('window');
const LEVELS_COUNT = 10;
const PASSED_COLORS = ['#34D73E', '#94F997', '#28BA20'];
const STORAGE_KEY = 'mightyForMitLevels';

export default function ForshLevels() {
    const [screen, setScreen] = useState<'levels' | 'quiz' | 'result'>('levels');
    const [currentLevel, setCurrentLevel] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [passedLevels, setPassedLevels] = useState<boolean[]>(Array(LEVELS_COUNT).fill(false));
    const [loading, setLoading] = useState(true);

    // Завантаження пройдених рівнів з AsyncStorage
    useEffect(() => {
        (async () => {
            try {
                const stored = await AsyncStorage.getItem(STORAGE_KEY);
                if (stored) {
                    setPassedLevels(JSON.parse(stored));
                }
            } catch {}
            setLoading(false);
        })();
    }, []);

    // Зберігання пройдених рівнів у AsyncStorage
    useEffect(() => {
        if (!loading) {
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(passedLevels));
        }
    }, [passedLevels, loading]);

    // Квіз логіка
    const startQuiz = () => {
        setUserAnswers([]);
        setScreen('quiz');
    };

    const handleAnswer = (answerIdx: number) => {
        setUserAnswers(prev => {
            const updated = [...prev, answerIdx];
            if (updated.length === 5) {
                setTimeout(() => setScreen('result'), 300);
            }
            return updated;
        });
    };

    const restartLevel = () => {
        setUserAnswers([]);
        setScreen('quiz');
    };

    const backToLevels = () => {
        setScreen('levels');
    };

    // Підрахунок правильних відповідей
    let correctCount = 0;
    if (screen === 'result') {
        correctCount = userAnswers.reduce((acc, ansIdx, idx) => {
            return acc + (ansIdx === mifoQwests[currentLevel][idx].correct ? 1 : 0);
        }, 0);
    }

    // Якщо рівень пройдено, оновити passedLevels
    useEffect(() => {
        if (screen === 'result') {
            if (correctCount >= 4 && !passedLevels[currentLevel]) {
                const updated = [...passedLevels];
                updated[currentLevel] = true;
                setPassedLevels(updated);
            }
        }
        // eslint-disable-next-line
    }, [screen]);

    // --- UI ---
    if (loading) return null;

    if (screen === 'quiz') {
        const questions = mifoQwests[currentLevel];
        const qIdx = userAnswers.length;
        const q = questions[qIdx];
        if (!q) return null;
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
                    }}>Word to guess:</Text>
                    <Text style={{
                        fontFamily: dranesofnts.foriLexenBod,
                        fontSize: oepiw * 0.07,
                        color: '#fff',
                        marginBottom: snah * 0.025,
                    }}>{q.word}</Text>
                    {q.options.map((opt, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => handleAnswer(idx)}
                            style={{
                                width: oepiw * 0.7,
                                paddingVertical: snah * 0.018,
                                backgroundColor: '#23236B',
                                borderRadius: oepiw * 0.035,
                                marginVertical: snah * 0.008,
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: '#FFD076',
                            }}>
                            <Text style={{
                                fontFamily: dranesofnts.foriLexenBod,
                                fontSize: oepiw * 0.055,
                                color: '#C6C7E9',
                            }}>{opt}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }

    if (screen === 'result') {
        const isPassed = correctCount >= 4;
        const isLastLevel = currentLevel === LEVELS_COUNT - 1;
        const nextLevel = currentLevel + 1;

        const handleResultBtn = () => {
            if (isPassed && !isLastLevel) {
                setCurrentLevel(nextLevel);
                setUserAnswers([]);
                setScreen('quiz');
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

    // --- Levels screen ---
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
                        // Відкритий якщо перший або попередній пройдений
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
                            // не даємо drugeiColors якщо обрано навіть якщо пройдений
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
