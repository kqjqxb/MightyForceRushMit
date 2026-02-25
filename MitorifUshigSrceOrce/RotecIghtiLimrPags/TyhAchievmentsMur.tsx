import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { shihtOnts } from '../shihtOnts';
import React, { useEffect, useState } from 'react';
import {
    Share,
    Image, View, Text,
    Dimensions,
} from 'react-native';

const medals = [
    {
        img: require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/achmedals/brnz.png'), // заміни на свій шлях
        desc: 'For passing level 5!',
        key: 'bronze',
        title: 'Bronze',
    },
    {
        desc: 'For passing level 10!',
        img: require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/achmedals/silv.png'), // заміни на свій шлях
        title: 'Silver',
        key: 'silver',
    },
    {
        title: 'Gold',
        img: require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/achmedals/gold.png'), // заміни на свій шлях
        desc: 'For completing the Mighty Rush mode',
        key: 'gold',
    },
];

export default function TyhAchievmentsMur() {
    const { width: oepiw, height: snah } = Dimensions.get('window');
    const medalSize = oepiw * 0.23;
    const cardHeight = snah * 0.22;
    const cardRadius = oepiw * 0.06;
    const cardMargin = snah * 0.02;
    const fontTitle = oepiw * 0.07;
    const fontDesc = oepiw * 0.045;

    const [achievements, setAchievements] = useState({
        bronze: false,
        silver: false,
        gold: false,
    });

    useEffect(() => {
        (async () => {
            // Отримуємо масив пройдених рівнів
            const levelsRaw = await AsyncStorage.getItem('mightyForMitLevels');
            let levels: boolean[] = [];
            if (levelsRaw) {
                try {
                    levels = JSON.parse(levelsRaw);
                    if (!Array.isArray(levels)) levels = [];
                } catch {
                    levels = [];
                }
            }
            // рахуємо кількість true
            const trueCount = levels.filter(Boolean).length;

            console.log('Fetched levels from storage:', levels);
            
            const isRushPassed = await AsyncStorage.getItem('mightyRushPassed');

            setAchievements({
                bronze: trueCount >= 5,
                silver: trueCount >= 10,
                gold: isRushPassed === 'true',
            });
        })();
    }, []);

    const handleShare = async (title: string) => {
        await Share.share({
            message: `I got the ${title} medal in Mighty Rush!`,
        });
    };

    return (
        <View style={{
            paddingTop: snah * 0.04,
            justifyContent: 'flex-start',
            flex: 1,
            alignItems: 'center',
        }}>
            {medals.map((medal, idx) => {
                const unlocked = achievements[medal.key as keyof typeof achievements];
                return (
                    <View
                        key={medal.key}
                        style={{
                            alignItems: 'center',
                            marginBottom: cardMargin,
                            width: oepiw * 0.88,
                            backgroundColor: '#2620A6',
                            borderRadius: cardRadius,
                            flexDirection: 'row',
                            borderColor: '#FFD076',
                            borderWidth: oepiw * 0.005,
                            paddingHorizontal: oepiw * 0.04,
                            height: cardHeight,
                        }}
                    >
                        {unlocked ? (
                            <>
                                <Image source={medal.img} style={{
                                    marginRight: oepiw * 0.04,
                                    borderRadius: medalSize / 2,
                                    width: oepiw * 0.3,
                                    height: oepiw * 0.3,
                                }}
                                />
                                <View style={{ flex: 1, alignItems: 'center', }}>
                                    <Text style={{
                                        marginBottom: snah * 0.01,
                                        fontFamily: shihtOnts.foriLexenMed,
                                        fontSize: fontTitle,
                                        color: '#C6C7E9',
                                    }}>
                                        {medal.title}
                                    </Text>
                                    <Text style={{
                                        marginBottom: snah * 0.02,
                                        fontFamily: shihtOnts.foriLexenLit,
                                        fontSize: fontDesc,
                                        color: '#C6C7E9',
                                    }}>
                                        {medal.desc}
                                    </Text>
                                    <CikrLogiColifBut
                                        timiTixtLbl={'Share'}
                                        onPress={() => handleShare(medal.title)}
                                        adothStyliOfCont={{ width: oepiw * 0.43, height: snah * 0.053, }}
                                    />
                                </View>
                            </>
                        ) : (
                            <>
                                <View style={{
                                    opacity: 0.6,
                                    borderWidth: oepiw * 0.008,
                                    justifyContent: 'center',
                                    height: cardHeight * 0.64,
                                    borderRadius: cardHeight / 2,
                                    marginRight: oepiw * 0.04,
                                    borderColor: '#FFD076',
                                    width: cardHeight * 0.64,
                                    alignItems: 'center',
                                    backgroundColor: '#C6C7E9',
                                }} />
                                <View style={{ justifyContent: 'center', flex: 1, }}>
                                    <Text style={{
                                        fontSize: fontDesc,
                                        textAlign: 'center',
                                        fontFamily: shihtOnts.foriLexenLit,
                                        color: '#C6C7E9',
                                    }}>
                                        You didn't{'\n'}get this medal
                                    </Text>
                                </View>
                            </>
                        )}
                    </View>
                );
            })}
        </View>
    );
}
