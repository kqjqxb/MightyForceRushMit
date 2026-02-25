import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { shihtOnts } from '../shihtOnts';
import React, { useState } from 'react';
import { mifoQwests } from '../ArceGishHumiAsteses/mifoQwests';

const { width: ercofshr, height: ytorvys } = Dimensions.get('window');

interface Props {
    userAnswers: number[];
    currentLevel?: number;
    questions?: { word: string; options: string[]; correct: number }[];
    setUserAnswers: (answers: number[]) => void;
    goToResult: () => void;
}

export default function QuizScreen({ currentLevel = 0, userAnswers, setUserAnswers, goToResult, questions }: Props) {
    const questionsArr = questions || mifoQwests[currentLevel];
    const qIdx = userAnswers.length;
    const q = questionsArr[qIdx];

    // Додаємо стейт для підсвічування
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [answerStatus, setAnswerStatus] = useState<'correct' | 'wrong' | null>(null);

    const handleAnswer = (answerIdx: number) => {
        if (selectedIdx !== null) return; // блокувати повторні натискання поки йде анімація
        setSelectedIdx(answerIdx);
        const isCorrect = answerIdx === q.correct;
        setAnswerStatus(isCorrect ? 'correct' : 'wrong');
        setTimeout(() => {
            const updated = [...userAnswers, answerIdx];
            setUserAnswers(updated);
            setSelectedIdx(null);
            setAnswerStatus(null);
            if (updated.length === questionsArr.length) {
                setTimeout(goToResult, 300);
            }
        }, 1000);
    };

    if (!q) return null;

    return (
        <View style={{
            flex: 1,
            paddingTop: ytorvys * 0.09,
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}>
            {/* Bull image */}
            <View style={{ marginBottom: ytorvys * 0.04 }}>
                {/* Тут має бути ваш компонент з биком */}
            </View>
            <View style={{
                alignItems: 'center',
                width: ercofshr * 0.85,
                borderWidth: 1,
                backgroundColor: 'rgba(70, 64, 206, 0.3)',
                borderColor: '#FFD076',
                borderRadius: ercofshr * 0.05,
                paddingVertical: ytorvys * 0.03,
            }}>
                <Text style={{
                    color: '#C6C7E9',
                    marginBottom: ytorvys * 0.01,
                    fontSize: ercofshr * 0.045,
                    fontFamily: shihtOnts.foriLexenBod,
                }}>Word to guess:</Text>
                <Text style={{
                    fontSize: ercofshr * 0.07,
                    color: '#fff',
                    marginBottom: ytorvys * 0.025,
                    fontFamily: shihtOnts.foriLexenBod,
                }}>{q.word}</Text>
                {q.options.map((opt, idx) => {
                    let bgColor = '#23236B';
                    if (selectedIdx === idx && answerStatus === 'correct') {
                        bgColor = '#3FC380'; // приємно зелений
                    } else if (selectedIdx === idx && answerStatus === 'wrong') {
                        bgColor = '#F76E6E'; // приємно червоний
                    }
                    return (
                        <TouchableOpacity
                            onPress={() => handleAnswer(idx)}
                            key={idx}
                            disabled={selectedIdx !== null}
                            style={{
                                borderRadius: ercofshr * 0.035,
                                width: ercofshr * 0.7,
                                borderWidth: 1,
                                backgroundColor: bgColor,
                                paddingVertical: ytorvys * 0.018,
                                marginVertical: ytorvys * 0.008,
                                alignItems: 'center',
                                borderColor: '#FFD076',
                                opacity: selectedIdx !== null && selectedIdx !== idx ? 0.6 : 1,
                            }}>
                            <Text style={{ fontFamily: shihtOnts.foriLexenBod, fontSize: ercofshr * 0.055, color: '#C6C7E9', }}>{opt}</Text>
                        </TouchableOpacity>
                    );
                })}
                {questions && (
                    <Text style={{
                        color: '#C6C7E9',
                        fontFamily: shihtOnts.foriLexenLit,
                        textAlign: 'center',
                        marginTop: ytorvys * 0.02,
                        fontSize: ercofshr * 0.045,
                    }}>
                        {`${qIdx + 1} / ${questionsArr.length}`}
                    </Text>
                )}
            </View>
        </View>
    );
}
