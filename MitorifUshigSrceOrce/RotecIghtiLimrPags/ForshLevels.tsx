import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mifoQwests } from '../ArceGishHumiAsteses/mifoQwests';
import StartLevelsScreen from './StartLevelsScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';

const LEVELS_COUNT = 10;
const STORAGE_KEY = 'mightyForMitLevels';

export default function ForshLevels() {
    const [screen, setScreen] = useState<'levels' | 'quiz' | 'result'>('levels');
    const [currentLevel, setCurrentLevel] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [passedLevels, setPassedLevels] = useState<boolean[]>(Array(LEVELS_COUNT).fill(false));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const stored = await AsyncStorage.getItem(STORAGE_KEY);
                if (stored) setPassedLevels(JSON.parse(stored));
            } catch {}
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (!loading) {
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(passedLevels));
        }
    }, [passedLevels, loading]);

    // --- Навігація ---
    const startQuiz = () => {
        setUserAnswers([]);
        setScreen('quiz');
    };
    const restartLevel = () => {
        setUserAnswers([]);
        setScreen('quiz');
    };
    const backToLevels = () => {
        setScreen('levels');
    };
    const goToResult = () => setScreen('result');

    // --- Зберігання прогресу ---
    useEffect(() => {
        if (screen === 'result') {
            const correctCount = userAnswers.reduce((acc, ansIdx, idx) => {
                return acc + (ansIdx === mifoQwests[currentLevel][idx].correct ? 1 : 0);
            }, 0);
            if (correctCount >= 4 && !passedLevels[currentLevel]) {
                const updated = [...passedLevels];
                updated[currentLevel] = true;
                setPassedLevels(updated);
            }
        }
        // eslint-disable-next-line
    }, [screen]);

    if (loading) return null;

    if (screen === 'levels') {
        return (
            <StartLevelsScreen
                currentLevel={currentLevel}
                setCurrentLevel={setCurrentLevel}
                passedLevels={passedLevels}
                startQuiz={startQuiz}
            />
        );
    }
    if (screen === 'quiz') {
        return (
            <QuizScreen
                currentLevel={currentLevel}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                goToResult={goToResult}
            />
        );
    }
    if (screen === 'result') {
        return (
            <ResultScreen
                currentLevel={currentLevel}
                userAnswers={userAnswers}
                passedLevels={passedLevels}
                setCurrentLevel={setCurrentLevel}
                restartLevel={restartLevel}
                backToLevels={backToLevels}
            />
        );
    }
    return null;
}
