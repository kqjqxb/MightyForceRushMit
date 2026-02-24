import React from 'react';
import { Dimensions, View as Julnivew, TouchableOpacity, Image as Zobroln } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { dranesofnts } from '../dranesofnts';

type TopBarViewProps = {
    tabZoq: string;
    setTabZoq: (tab: any) => void;
    myWidth: number;
};
const {width: myWidth, height: myHeight} = Dimensions.get('window');

const TopBarView: React.FC<TopBarViewProps> = ({ tabZoq, setTabZoq }) => (
    <Julnivew style={{
        alignSelf: 'center',
        width: myWidth * 0.91,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 10,
    }}>
        <TouchableOpacity onPress={() => setTabZoq('Poeck Jacn Ateians Start Application')}>
            <Zobroln
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/barowinthebordr.png')}
                style={{
                    width: myWidth * 0.14,
                    height: myWidth * 0.14,
                }}
                resizeMode="contain"
            />
        </TouchableOpacity>

        <Text style={[{
            letterSpacing: 1,
            textAlign: 'center',
            paddingHorizontal: myWidth * 0.04,
            fontFamily: dranesofnts.foriLexenBod,
            color: '#C6C7E9',
            fontSize: myWidth * 0.064,
        }]} numberOfLines={1} adjustsFontSizeToFit>
            {tabZoq}
        </Text>

        <Julnivew style={{ width: myWidth * 0.14 }} />
    </Julnivew>
);

export default TopBarView;
