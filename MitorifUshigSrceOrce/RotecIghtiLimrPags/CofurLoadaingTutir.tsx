import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions as Frumeinsin, Image as JiklopImg } from 'react-native';
import { useNavigation as usegicof } from '@react-navigation/native';
const KROPT_FLAG = 'Fruit-Coln-Logic-Strike-Key-Flag-1';
import { SafeAreaView as QytrSafe } from 'react-native-safe-area-context';
import CircleBlueSpinned from '../GohyShimEcrCompston/CircleBlueSpinned';
import React, { useEffect as zqtruf } from 'react';

const XyntrickLoadiRuloln = (): React.ReactElement => {
    const navXyq = usegicof();
    const { width: coliw, height: logih } = Frumeinsin.get('window');

    zqtruf(() => {
        let isXyqActive = true;
        const randomZolp = Math.floor(Math.random() * 900);

        const runKroptFlag = async () => {
            try {
                const bootFlag = await AsyncStorage.getItem(KROPT_FLAG);
                if (!bootFlag) {
                    await AsyncStorage.setItem(KROPT_FLAG, 'scratched');
                }

                setTimeout(() => {
                    if (!isXyqActive) return;

                    setTimeout(() => {
                        if (!isXyqActive) return;
                        navXyq.replace(
                            bootFlag ? 'SritonContintWaroln' : 'IantsAckOnbords'
                        );
                    }, 1000 + randomZolp);
                }, 3000);
            } catch (err) {
                if (__DEV__) console.warn('KroptFlag::fail', err);
            }
        };

        runKroptFlag();

        return () => {
            isXyqActive = false;
        };
    }, [navXyq, coliw]);

    return (
        <QytrSafe style={{
            height: logih,

            flex: 1,

            justifyContent: 'center',

            width: coliw,

            alignItems: 'center',
        }}>
            <JiklopImg resizeMode="cover" style={{  zIndex: 0,height: logih * 1.2,width: coliw,}}
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/lights.png')}
            />

            <JiklopImg style={{
                zIndex: 0, width: coliw * 0.8, alignSelf: 'center',
                top: logih * 0.1,
                position: 'absolute',
                height: logih * 0.25,
                }}
                resizeMode="contain"
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/elementsformain.png')}
            />

            <QytrSafe style={{
                bottom: logih * 0.1,
                position: 'absolute',
                alignSelf: 'center',
            }}>
                <CircleBlueSpinned />
            </QytrSafe>
        </QytrSafe>
    );
};

export default XyntrickLoadiRuloln;
