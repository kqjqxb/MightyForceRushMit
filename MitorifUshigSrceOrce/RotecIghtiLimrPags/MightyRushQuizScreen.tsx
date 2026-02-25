import { View, Text, Dimensions, Image } from 'react-native';
import ResultScreen from './ResultScreen';
import { shihtOnts } from '../shihtOnts';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
import QuizScreen from './QuizScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

const { width: gihiws, height: rofeh } = Dimensions.get('window');

const QUESTIONS = [
    { word: 'Snowflake', options: ['Ice', 'Sand', 'Ash'], correct: 0 },
    { word: 'Roadmap', options: ['Plan', 'Sleep', 'Freeze'], correct: 0 },
    { word: 'Drum', options: ['Rhythm', 'Silence', 'Glass'], correct: 0 },
    { word: 'Feather', options: ['Light', 'Heavy', 'Solid'], correct: 0 },
    { word: 'Tunnel', options: ['Passage', 'Surface', 'Peak'], correct: 0 },
    { word: 'Echo', options: ['Sound', 'Color', 'Weight'], correct: 0 },
    { word: 'Torch', options: ['Flame', 'Snow', 'Water'], correct: 0 },
    { word: 'Hill', options: ['Slope', 'Depth', 'Sink'], correct: 0 },
    { word: 'Ink', options: ['Write', 'Freeze', 'Ring'], correct: 0 },
    { word: 'Lantern', options: ['Light', 'Shadow', 'Stone'], correct: 0 },
    { word: 'Clockface', options: ['Numbers', 'Roots', 'Smoke'], correct: 0 },
    { word: 'Harbor', options: ['Ships', 'Desert', 'Fire'], correct: 0 },
    { word: 'Signal', options: ['Message', 'Weight', 'Stone'], correct: 0 },
    { word: 'Frost', options: ['Cold', 'Heat', 'Steam'], correct: 0 },
    { word: 'Path', options: ['Direction', 'Noise', 'Blur'], correct: 0 },
    { word: 'Wheel', options: ['Rotate', 'Melt', 'Float'], correct: 0 },
    { word: 'Cave', options: ['Dark', 'Bright', 'Open'], correct: 0 },
    { word: 'Bell', options: ['Ring', 'Sink', 'Burn'], correct: 0 },
    { word: 'Riverbank', options: ['Shore', 'Sky', 'Flame'], correct: 0 },
    { word: 'Pulse', options: ['Beat', 'Stone', 'Silence'], correct: 0 },
];

interface Props {
    setTabZoq: (tab: any) => void;
}

export default function MightyRushQuizScreen({ setTabZoq }: Props) {
    const [started, setStarted] = useState(false);
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);
    const correctCount = answers.reduce((acc, ans, idx) => acc + (ans === QUESTIONS[idx].correct ? 1 : 0), 0);

    const handleRestart = () => {
        setAnswers([]);
        setShowResult(false);
        setStarted(false);
    };

    const handleBack = async () => {
        setTabZoq('Ritum Ighty Localize Of Apka');
    };

    React.useEffect(() => {
        if (showResult && correctCount >= 16) {
            AsyncStorage.setItem('mightyRushPassed', 'true');
        }
    }, [showResult, correctCount]);

    // --- START SCREEN ---
    if (!started) {
        return (
            <View style={{
                paddingTop: rofeh * 0.09,
                justifyContent: 'flex-start',
                flex: 1,
                alignItems: 'center',
            }}>
                {/* Фон, ліхтарі, пелюстки, якщо треба, додайте тут */}
                <Image source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/statbul.png')}
                    style={{
                        resizeMode: 'cover',
                        marginTop: -rofeh * 0.1,
                        height: gihiws * 0.7,
                        // marginBottom: -rofeh * 0.04,
                        width: gihiws,
                    }}
                />
                <View style={{
                    alignItems: 'center',
                    shadowColor: '#000',
                    backgroundColor: 'rgba(32, 34, 120, 0.95)',
                    borderRadius: gihiws * 0.05,
                    width: gihiws * 0.88,
                    paddingVertical: rofeh * 0.045,
                    borderColor: '#6A6AFF',
                    shadowOpacity: 0.2,
                    marginTop: -rofeh * 0.01,
                    shadowRadius: 10,
                    borderWidth: 1.5,
                }}>
                    <Text style={{
                        marginBottom: rofeh * 0.01,
                        fontFamily: shihtOnts.foriLexenBod,
                        fontSize: gihiws * 0.09,
                        textAlign: 'center',
                        color: '#fff',
                    }}>Mighty Rush</Text>
                    <Text style={{
                        color: '#C6C7E9',
                        fontSize: gihiws * 0.048,
                        textAlign: 'center',
                        marginBottom: rofeh * 0.03,
                        fontFamily: shihtOnts.foriLexenLit,
                    }}>Can you complete{'\n'}20 associations?</Text>
                    <CikrLogiColifBut
                        onPress={() => setStarted(true)}
                        timiTixtLbl={`Start`}
                        adothStyliOfCont={{
                            width: gihiws * 0.7,
                            height: rofeh * 0.07,
                        }}
                        isScoundrel={false}
                    />
                </View>
            </View>
        );
    }

    // --- QUIZ SCREEN ---
    if (started && !showResult) {
        return (
            <QuizScreen
                questions={QUESTIONS}
                goToResult={() => setShowResult(true)}
                userAnswers={answers}
                setUserAnswers={setAnswers}
            />
        );
    }

    // --- RESULT SCREEN ---
    if (showResult) {
        const handleShare = () => {
            // Тут логіка для шарінгу, наприклад через Share API
        };
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                flex: 1,
                paddingTop: rofeh * 0.09,
            }}>
                <Image
                    style={{
                        marginBottom: -rofeh * 0.14,
                        height: gihiws,
                        width: gihiws,
                        resizeMode: 'cover',
                        marginTop: -rofeh * 0.09,
                    }}
                    source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/statbul.png')}
                />
                <ResultScreen
                    backToLevels={handleBack}
                    onShare={handleShare}
                    notGreen={true}
                    questions={QUESTIONS}
                    userAnswers={answers}
                    customTexts={{
                        winSubtitle: 'You received a medal, see it in achievements!',
                        scoreLabel: 'Your Score:',
                        shareButton: 'Share',
                        loseSubtitle: 'Do you want to try again?',
                        backButton: 'Back home',
                        loseTitle: 'You lost',
                        winTitle: 'You win!',
                    }}
                    restartLevel={handleRestart}
                />
            </View>
        );
    }
}
