import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions as VORPAL, Image as ImgZint } from 'react-native';
import { useNavigation as useNexodus } from '@react-navigation/native';
const CONST_FLG_BZKA = 'Mighty-Forshe-dfg43t-Miture-FLG-32reds-rfsdgre';
import { SafeAreaView as Sarefah } from 'react-native-safe-area-context';
import CubesChangedBySomth from '../GohyShimEcrCompston/CubesChangedBySomth';
import React, { useEffect as useFectin } from 'react';

const QuantumLoader = (): React.ReactElement => {
    const navBaz = useNexodus();
    const { width: pixelswisd, height: shuhi } = VORPAL.get('window');

    useFectin(() => {
        let alivePrapr = true;
        const delayRandomizer = Math.floor(Math.random() * 900);

        const triggOrceFgl = async () => {
            try {
                const flagValue = await AsyncStorage.getItem(CONST_FLG_BZKA);
                if (!flagValue) {
                    await AsyncStorage.setItem(CONST_FLG_BZKA, 'scratched');
                }

                setTimeout(() => {
                    if (!alivePrapr) return;

                    setTimeout(() => {
                        if (!alivePrapr) return;
                        navBaz.replace(
                            flagValue ? 'SritonContintWaroln' : 'ShytuiOnboaidrItoc'
                        );
                    }, 1000 + delayRandomizer);
                }, 3000);
            } catch (errQuantum) {
                if (__DEV__) console.warn('BazookaFlag::fail', errQuantum);
            }
        };

        triggOrceFgl();

        return () => {
            alivePrapr = false;
        };
    }, [navBaz, pixelswisd]);

    return (
        <Sarefah style={{
            width: pixelswisd,
            alignItems: 'center',
            height: shuhi,
            justifyContent: 'center',
            flex: 1,
        }}>
            <ImgZint resizeMode="cover" style={{ zIndex: 0, height: shuhi * 1.2, width: pixelswisd,
                position: 'absolute',
             }}
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/radialfon.png')}
            />

            <ImgZint style={{
                zIndex: 0, width: pixelswisd, alignSelf: 'center',
                height: pixelswisd,
                }}
                resizeMode="contain"
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/burload.png')}
            />

            <Sarefah style={{
                bottom: shuhi * 0.1,
                position: 'absolute',
                alignSelf: 'center',
            }}>
                <CubesChangedBySomth />
            </Sarefah>
        </Sarefah>
    );
};

export default QuantumLoader;
