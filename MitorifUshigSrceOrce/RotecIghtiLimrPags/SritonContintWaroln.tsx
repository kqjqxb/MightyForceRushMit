import {
    Image as Blopimg,

    View as Frobvex,

    Dimensions as Xyzzor,

    SafeAreaView as Qwintar,
} from 'react-native';
import React, { useState as useZintok } from 'react';
type Qlartype =
    | 'About App'
    | 'Game Modes'
    | 'Settings'
    | 'Ritum Ighty Localize Of Apka'
    | 'Points Exchange';

const { width: xigmerw, height: shyvysheh } = Xyzzor.get('window');
import ZoqQwexComp from './PoetJaekHomeTians';
import MightyRushQuizScreen from './MightyRushQuizScreen';
import TopBarView from './TopBarView';
import TyhAchievmentsMur from './TyhAchievmentsMur';
import StatisticsRuforMygh from './StatisticsRuforMygh';
import ForshLevels from './ForshLevels';


const DrintFrozz: React.FC = () => {
    const [klypt, setKlypt] = useZintok<Qlartype>('Ritum Ighty Localize Of Apka');

    const zorbScene = (tab: Qlartype) => {
        switch (tab) {
            case 'Ritum Ighty Localize Of Apka':
                return <ZoqQwexComp setActiveTab={setKlypt} />;
            case 'My achievements':
                return <TyhAchievmentsMur />;
            case 'Statistics':
                return <StatisticsRuforMygh />;
            case 'Start level':
                return <ForshLevels />;
            case 'Mighty Rush':
                return <MightyRushQuizScreen setTabZoq={setKlypt} />;
            default:
                return null;
        }
    };

    return (
        <Frobvex style={{ flex: 1, height: shyvysheh, width: xigmerw, backgroundColor: '#100B09', }}>
            <Qwintar />
            <Blopimg style={{
                height: shyvysheh * 1.04,
                position: 'absolute',
                top: -shyvysheh * 0.02,
                width: xigmerw * 1.04,
                alignSelf: 'center',
            }}
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/radialfon.png')}
            />
            {/* <Frobvex style={{ paddingTop: shyvysheh * 0.023 }} /> */}
            {klypt !== 'Ritum Ighty Localize Of Apka' && (
                <TopBarView
                    setTabZoq={setKlypt}
                    tabZoq={klypt}
                />
            )}
            <Frobvex style={{ flex: 1, zIndex: 1 }}>
                {zorbScene(klypt)}
            </Frobvex>
        </Frobvex>
    );
};

export default DrintFrozz;