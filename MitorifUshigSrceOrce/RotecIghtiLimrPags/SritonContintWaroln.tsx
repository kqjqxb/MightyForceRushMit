import {
    Dimensions as Lofismn,
    View as Julnivew,
    SafeAreaView as Stafe,
    Image as Zobroln,
} from 'react-native';
import React, {
    useState as furtStatilo,
    useEffect as furtrikEfechn,
} from 'react';
type Cagesbe =
    | 'About App'
    | 'Settings'
    | 'Game Modes'
    | 'Poeck Jacn Ateians Start Application'
    | 'Points Exchange';

import ZoqQwexComp from './PoetJaekHomeTians';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CikrLogiColifBut from '../GohyShimEcrCompston/CikrLogiColifBut';

const { width: fitukwot, height: tiroh } = Lofismn.get('window');

const plopBgs = [
    require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/litsinfonts/lights.png'),
    require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/litsinfonts/grelitn.png'),
    require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/litsinfonts/pirilst.png'),
    require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/litsinfonts/relid.png'),
];

const QlopObgrZoq: React.FC = () => {
    const [tabZoq, setTabZoq] = furtStatilo<Cagesbe>('Poeck Jacn Ateians Start Application');
    const [curBgZoq, setCurBgZoq] = furtStatilo<number>(0);

    // --- music state and effect (unique keys/vars) ---
    const [isZoqMusOn, setIsZoqMusOn] = furtStatilo<boolean>(false);
    const [zoqMusPlayer, setZoqMusPlayer] = furtStatilo<any | null>(null);

    // load music setting from AsyncStorage (unique key)
    furtrikEfechn(() => {
        AsyncStorage.getItem('plopGateMusicOn').then((val) => {
            if (val === null) {
                AsyncStorage.setItem('plopGateMusicOn', 'true');
                setIsZoqMusOn(true);
            } else {
                setIsZoqMusOn(val === 'true');
            }
        });
    }, []);

    // Load active background from AsyncStorage
    furtrikEfechn(() => {
        let isZoqActive = true;
        (async () => {
            try {
                const idx = await AsyncStorage.getItem('plopGateActiveBg');
                if (!isZoqActive) return;
                if (idx === null) {
                    await AsyncStorage.setItem('plopGateActiveBg', '0');
                    setCurBgZoq(0);
                } else {
                    setCurBgZoq(Number(idx) || 0);
                }
            } catch { }
        })();
        return () => { isZoqActive = false; };
    }, []);

    // Setter to update both state and AsyncStorage
    const handleSetCurBgZoq = async (idx: number) => {
        setCurBgZoq(idx);
        await AsyncStorage.setItem('plopGateActiveBg', String(idx));
    };

    // Setter for music toggle, persists to AsyncStorage
    const handleSetZoqMusOn = async (on: boolean) => {
        setIsZoqMusOn(on);
        await AsyncStorage.setItem('plopGateMusicOn', on ? 'true' : 'false');
    };

    const renderTabScene = (tab: Cagesbe) => {
        switch (tab) {
            case 'Poeck Jacn Ateians Start Application':
                return <ZoqQwexComp setActiveTab={setTabZoq} />;
            default:
                return null;
        }
    };

    return (
        <Julnivew style={{
            width: fitukwot,
            height: tiroh,
            flex: 1,
            backgroundColor: '#100B09',
        }}>
            <Stafe />
            <Zobroln style={{
                alignSelf: 'center',
                position: 'absolute',
                width: fitukwot * 1.04,
                height: tiroh * 1.04,
                top: -tiroh * 0.02,
            }}
                source={plopBgs[curBgZoq]}
            />
            <Julnivew style={{ paddingTop: tiroh * 0.023 }} />

            <Julnivew style={{ flex: 1, zIndex: 1 }}>
                {renderTabScene(tabZoq)}
            </Julnivew>

            {tabZoq !== 'Poeck Jacn Ateians Start Application' && (
                <CikrLogiColifBut
                    onPress={() => setTabZoq('Poeck Jacn Ateians Start Application')}
                    buttype='round-square'
                    buttonText={'Menu'}
                    stirifonRozm={fitukwot * 0.05}
                    morStilOfWrapBtn={{
                        opacity: 1,
                        height: tiroh * 0.07,
                        position: 'absolute',
                        zIndex: 10,
                        alignSelf: 'center',
                        bottom: tiroh * 0.01,
                        width: fitukwot * 0.4,
                    }}
                />
            )}
        </Julnivew>
    );
};

export default QlopObgrZoq;