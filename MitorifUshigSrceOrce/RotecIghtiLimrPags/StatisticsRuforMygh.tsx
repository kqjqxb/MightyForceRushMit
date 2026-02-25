import AsyncStorage from '@react-native-async-storage/async-storage';
import { shihtOnts } from '../shihtOnts';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
import React, { useState, useEffect, } from 'react';
import {
    Share,
    Dimensions,
    View,
    Text,
    Image,
} from 'react-native';

export default function StatisticsRuforMygh() {
    const { width: forwids, height: oruh } = Dimensions.get('window');

    // Стейт для статистики
    const [levelsPassed, setLevelsPassed] = useState<boolean[]>([]);
    const [mightyForMitLevels, setMightyForMitLevels] = useState<boolean[]>([]);
    const [medalsReceived, setMedalsReceived] = useState(0);
    const [mightyRushPassed, setMightyRushPassed] = useState(false);

    useEffect(() => {
        // Отримати рівні з AsyncStorage
        const fetchLevels = async () => {
            try {
                const levels = await AsyncStorage.getItem('mightyForMitLevels');
                let parsed: boolean[] = [];
                if (levels) {
                    parsed = JSON.parse(levels);
                    if (!Array.isArray(parsed)) parsed = [];
                    setLevelsPassed(parsed);
                    setMightyForMitLevels(parsed);
                } else {
                    setLevelsPassed([]);
                    setMightyForMitLevels([]);
                }

                // Логіка медалей як в ачівках
                const trueCount = parsed.filter(Boolean).length;
                const rush = await AsyncStorage.getItem('mightyRushPassed');
                setMightyRushPassed(rush === 'true');
                let medals = 0;
                if (trueCount >= 5) medals++;
                if (trueCount >= 10) medals++;
                if (rush === 'true') medals++;
                setMedalsReceived(medals);
            } catch (e) {
                setLevelsPassed([]);
                setMightyForMitLevels([]);
                setMedalsReceived(0);
                setMightyRushPassed(false);
            }
            console.log('Fetched levels passed:', levelsPassed);
        };
        fetchLevels();
    }, []);

    // Підрахунок кількості true
    const trueLevelsCount = levelsPassed.filter(Boolean).length;

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: 'transparent', alignItems: 'center', }}>
            <Image
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/statbul.png')}
                style={{
                    width: forwids,
                    marginTop: - oruh * 0.08,
                    height: forwids,
                    alignSelf: 'center',
                }}
                resizeMode="stretch"
            />

            <View style={{
                borderColor: '#FFD076',
                backgroundColor: '#4740ce71',
                borderRadius: forwids * 0.06,
                width: forwids * 0.92,
                paddingVertical: oruh * 0.025,
                alignItems: 'center',
                marginBottom: oruh * 0.03,
                marginTop: forwids * 0.03,
                borderWidth: 2,
            }}>
                <Text style={{
                    marginBottom: oruh * 0.018,
                    fontSize: forwids * 0.075,
                    fontFamily: shihtOnts.foriLexenMed,
                    color: '#C6C7E9',
                }}>
                    My statistic
                </Text>
                <Text style={{
                    marginBottom: oruh * 0.012,
                    fontSize: forwids * 0.052,
                    color: '#C6C7E9',
                    fontFamily: shihtOnts.foriLexenLit,
                }}>
                    Level passed: {trueLevelsCount}
                </Text>
                <Text style={{
                    fontFamily: shihtOnts.foriLexenLit,
                    marginBottom: oruh * 0.012,
                    color: '#C6C7E9',
                    fontSize: forwids * 0.052,
                }}>
                    Medals received: {medalsReceived}
                </Text>
                <Text style={{
                    fontSize: forwids * 0.052,
                    marginBottom: oruh * 0.018,
                    color: '#C6C7E9',
                    fontFamily: shihtOnts.foriLexenLit,
                }}>
                    Mighty Rush passed: {mightyRushPassed ? 'Yes' : 'No'}
                </Text>
                <CikrLogiColifBut
                    timiTixtLbl={'Share'}
                    onPress={() => {
                        Share.share({
                            message: `My Mighty Force Rush stats:\nLevels passed: ${trueLevelsCount}\nMedals received: ${medalsReceived}\nMighty Rush passed: ${mightyRushPassed ? 'Yes' : 'No'}`,
                        })
                    }}
                    adothStyliOfCont={{
                        height: oruh * 0.053,
                        width: forwids * 0.43,
                        marginTop: oruh * 0.01,
                    }}
                />
            </View>
        </View>
    );
}
