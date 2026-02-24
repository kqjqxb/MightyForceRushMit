import React, { useEffect, useState } from 'react';
import {
    Image,
    View,
    Dimensions,
    Text,
    Share,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dranesofnts } from '../dranesofnts';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';

export default function StatisticsRuforMygh({ setActiveTab: ylopSetTab }: { setActiveTab: (tab: any) => void }) {
    const { width: forwids, height: oruh } = Dimensions.get('window');

    // Стейт для статистики
    const [levelsPassed, setLevelsPassed] = useState<number>(0);

    // Мокові дані для інших полів (замінити на свої при інтеграції)
    const bestScore = 250;
    const medalsReceived = 0;
    const bestTime = 3.4;
    const mightyRushPassed = false;

    useEffect(() => {
        // Отримати рівні з AsyncStorage
        const fetchLevels = async () => {
            try {
                const levels = await AsyncStorage.getItem('mightyForMitLevels');
                if (levels) {
                    setLevelsPassed(Number(levels));
                }
            } catch (e) {
                setLevelsPassed(0);
            }
        };
        fetchLevels();
    }, []);

    return (
        <View style={{
            justifyContent: 'flex-start',
            backgroundColor: 'transparent',
            flex: 1,
            alignItems: 'center',
        }}>
            <Image
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/statbul.png')}
                style={{
                    alignSelf: 'center',
                    width: forwids,
                    height: forwids,
                    marginTop: - oruh * 0.08,
                }}
                resizeMode="stretch"
            />

            <View style={{
                width: forwids * 0.92,
                backgroundColor: '#4740ce71',
                borderRadius: forwids * 0.06,
                borderWidth: 2,
                borderColor: '#FFD076',
                alignItems: 'center',
                paddingVertical: oruh * 0.025,
                marginTop: forwids * 0.03,
                marginBottom: oruh * 0.03,
            }}>
                <Text style={{
                    fontFamily: dranesofnts.foriLexenMed,
                    fontSize: forwids * 0.075,
                    color: '#C6C7E9',
                    marginBottom: oruh * 0.018,
                }}>
                    My statistic
                </Text>
                <Text style={{
                    fontFamily: dranesofnts.foriLexenLit,
                    fontSize: forwids * 0.052,
                    color: '#C6C7E9',
                    marginBottom: oruh * 0.012,
                }}>
                    Best score: {bestScore}
                </Text>
                <Text style={{
                    fontFamily: dranesofnts.foriLexenLit,
                    fontSize: forwids * 0.052,
                    color: '#C6C7E9',
                    marginBottom: oruh * 0.012,
                }}>
                    Level passed: {levelsPassed}
                </Text>
                <Text style={{
                    fontFamily: dranesofnts.foriLexenLit,
                    fontSize: forwids * 0.052,
                    color: '#C6C7E9',
                    marginBottom: oruh * 0.012,
                }}>
                    Medals received: {medalsReceived}
                </Text>
                <Text style={{
                    fontFamily: dranesofnts.foriLexenLit,
                    fontSize: forwids * 0.052,
                    color: '#C6C7E9',
                    marginBottom: oruh * 0.012,
                }}>
                    Best time: {bestTime.toFixed(2)}s
                </Text>
                <Text style={{
                    fontFamily: dranesofnts.foriLexenLit,
                    fontSize: forwids * 0.052,
                    color: '#C6C7E9',
                    marginBottom: oruh * 0.018,
                }}>
                    Mighty Rush passed: {mightyRushPassed ? 'Yes' : 'No'}
                </Text>
                <CikrLogiColifBut
                    onPress={() => {
                        Share.share({
                            message: `My Mighty Force Rush stats:\nBest score: ${bestScore}\nLevels passed: ${levelsPassed}\nMedals received: ${medalsReceived}\nBest time: ${bestTime.toFixed(2)}s\nMighty Rush passed: ${mightyRushPassed ? 'Yes' : 'No'}`,
                        })
                    }}
                    buttonText={'Share'}
                    morStilOfWrapBtn={{
                        width: forwids * 0.43,
                        height: oruh * 0.053,
                        marginTop: oruh * 0.01,
                    }}
                />
            </View>
        </View>
    );
}
