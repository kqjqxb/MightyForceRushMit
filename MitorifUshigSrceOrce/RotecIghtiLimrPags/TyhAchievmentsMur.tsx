import React, { useEffect, useState } from 'react';
import {
    View as PonakXob,
    Dimensions as ResizOfTheScn,
    Image,
    Text,
    Share,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';
import { dranesofnts } from '../dranesofnts';

const medals = [
    {
        key: 'bronze',
        title: 'Bronze',
        desc: 'For passing level 5!',
        img: require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/achmedals/brnz.png'), // заміни на свій шлях
    },
    {
        key: 'silver',
        title: 'Silver',
        desc: 'For passing level 10!',
        img: require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/achmedals/silv.png'), // заміни на свій шлях
    },
    {
        key: 'gold',
        title: 'Gold',
        desc: 'For completing the Mighty Rush mode',
        img: require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/achmedals/gold.png'), // заміни на свій шлях
    },
];

export default function TyhAchievmentsMur() {
    const { width: oepiw, height: snah } = ResizOfTheScn.get('window');
    const medalSize = oepiw * 0.23;
    const cardHeight = snah * 0.22;
    const cardRadius = oepiw * 0.06;
    const cardMargin = snah * 0.02;
    const fontTitle = oepiw * 0.07;
    const fontDesc = oepiw * 0.045;

    const [completedLevels, setCompletedLevels] = useState<number[]>([]);
    const [achievements, setAchievements] = useState({
        bronze: false,
        silver: false,
        gold: false,
    });

    useEffect(() => {
        (async () => {
            // Отримуємо масив пройдених рівнів
            const levelsRaw = await AsyncStorage.getItem('mightyForMitLevels');
            let levels: number[] = [];
            if (levelsRaw) {
                try {
                    levels = JSON.parse(levelsRaw);
                    if (!Array.isArray(levels)) levels = [];
                } catch {
                    levels = [];
                }
            }
            setCompletedLevels(levels);

            // Трекінг ачівок по кількості пройдених рівнів
            setAchievements({
                bronze: levels.length >= 5,
                silver: levels.length >= 10,
                gold: levels.length >= 20, // змінити число якщо треба
            });
        })();
    }, []);

    const handleShare = async (title: string) => {
        await Share.share({
            message: `I got the ${title} medal in Mighty Rush!`,
        });
    };

    return (
        <PonakXob style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: snah * 0.04,
        }}>
            {medals.map((medal, idx) => {
                const unlocked = achievements[medal.key as keyof typeof achievements];
                return (
                    <PonakXob
                        key={medal.key}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#2620A6',
                            borderRadius: cardRadius,
                            marginBottom: cardMargin,
                            width: oepiw * 0.88,
                            height: cardHeight,
                            borderWidth: oepiw * 0.005,
                            borderColor: '#FFD076',
                            paddingHorizontal: oepiw * 0.04,
                        }}
                    >
                        {unlocked ? (
                            <>
                                <Image
                                    source={medal.img}
                                    style={{
                                        width: oepiw * 0.3,
                                        height: oepiw * 0.3,
                                        borderRadius: medalSize / 2,
                                        marginRight: oepiw * 0.04,
                                    }}
                                />
                                <PonakXob style={{
                                    flex: 1,
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        color: '#C6C7E9',
                                        fontSize: fontTitle,
                                        fontFamily: dranesofnts.foriLexenMed,
                                        marginBottom: snah * 0.01,
                                    }}>
                                        {medal.title}
                                    </Text>
                                    <Text style={{
                                        color: '#C6C7E9',
                                        fontSize: fontDesc,
                                        fontFamily: dranesofnts.foriLexenLit,
                                        marginBottom: snah * 0.02,
                                    }}>
                                        {medal.desc}
                                    </Text>
                                    <CikrLogiColifBut
                                        onPress={() => handleShare(medal.title)}
                                        buttonText={'Share'}
                                        morStilOfWrapBtn={{
                                            width: oepiw * 0.43,
                                            height: snah * 0.053,
                                        }}
                                    />
                                </PonakXob>
                            </>
                        ) : (
                            <>
                                <PonakXob style={{
                                    width: cardHeight * 0.64,
                                    height: cardHeight * 0.64,
                                    borderRadius: cardHeight / 2,
                                    backgroundColor: '#C6C7E9',
                                    opacity: 0.6,
                                    marginRight: oepiw * 0.04,
                                    borderWidth: oepiw * 0.008,
                                    borderColor: '#FFD076',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }} />
                                <PonakXob style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{
                                        color: '#C6C7E9',
                                        fontSize: fontDesc,
                                        fontFamily: dranesofnts.foriLexenLit,
                                        textAlign: 'center',
                                    }}>
                                        You didn't{'\n'}get this medal
                                    </Text>
                                </PonakXob>
                            </>
                        )}
                    </PonakXob>
                );
            })}
        </PonakXob>
    );
}
