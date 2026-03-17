import {
    Image as ZIljsfoa,
    View as Frobvex,
    Dimensions as Xyzzor,

    SafeAreaView as Qwintar,
} from 'react-native';
import LarentnRuliQiuzScnege from './LarentnRuliQiuzScnege';
import React, { useState as usoriSitat } from 'react';


const { width: xigmerw, height: shyvysheh } = Xyzzor.get('window');
import ZoqQwexComp from './MiraliLiterHomeLanrtMnid';
import TopBarView from './TopBarView';
import TyhAchievmentsMur from './TyhAchievmentsMur';
import StatisticsRuforMygh from './StatisticsRuforMygh';
type Rosheftps =
    | 'Settings'
    | 'Lanrtn Suhri Tigiy Loc'
    | 'Statistics'
    | 'Start level'
    | 'Lantern Rush'
    | 'My achievements';
import ForshLevels from './ForshLevels';


const DrintFrozz: React.FC = () => {
    const [klypt, setKlypt] = usoriSitat<Rosheftps>('Lanrtn Suhri Tigiy Loc');

    const zorbScene = (tab: Rosheftps) => {
        switch (tab) {
            case 'Lanrtn Suhri Tigiy Loc':
                return <ZoqQwexComp setActiveTab={setKlypt} />;
            case 'My achievements':
                return <TyhAchievmentsMur />;
            case 'Statistics':
                return <StatisticsRuforMygh />;
            case 'Start level':
                return <ForshLevels />;
            case 'Lantern Rush':
                return <LarentnRuliQiuzScnege setTabZoq={setKlypt} />;
            default:
                return null;
        }
    };

    return (
        <Frobvex style={{ flex: 1, height: shyvysheh, width: xigmerw, backgroundColor: '#100B09', }}>
            <Qwintar />
            <ZIljsfoa style={{
                height: shyvysheh * 1.04,
                position: 'absolute',
                top: -shyvysheh * 0.02,
                width: xigmerw * 1.04,
                alignSelf: 'center',
            }}
                source={require('../ArceGishHumiAsteses/CerohyirilGorshLantreiImzhses/radialfon.png')}
            />
            {/* <Frobvex style={{ paddingTop: shyvysheh * 0.023 }} /> */}
            {klypt !== 'Lanrtn Suhri Tigiy Loc' && (
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