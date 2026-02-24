import React from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { dranesofnts } from '../dranesofnts';
import { mifoQwests } from '../ArceGishHumiAsteses/mifoQwests';

const { width: oepiw, height: snah } = Dimensions.get('window');

interface Props {
    currentLevel: number;
    userAnswers: number[];
    setUserAnswers: (answers: number[]) => void;
    goToResult: () => void;
}

export default function QuizScreen({ currentLevel, userAnswers, setUserAnswers, goToResult }: Props) {
    const questions = mifoQwests[currentLevel];
    const qIdx = userAnswers.length;
    const q = questions[qIdx];

    const handleAnswer = (answerIdx: number) => {
        const updated = [...userAnswers, answerIdx];
        setUserAnswers(updated);
        if (updated.length === 5) {
            setTimeout(goToResult, 300);
        }
    };

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
