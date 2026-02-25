import { shihtOnts } from '../shihtOnts';
import React from 'react';
import { Text } from 'react-native-gesture-handler';
import { TouchableOpacity, Dimensions, Image, View, } from 'react-native';

type TopBarViewProps = {
    tabZoq: string;
    setTabZoq: (tab: any) => void;
    myWidth: number;
};
const { width: myWidth, height: myHeight } = Dimensions.get('window');

const TopBarView: React.FC<TopBarViewProps> = ({ tabZoq, setTabZoq }) => (
    <View style={{
        width: myWidth * 0.91,
        alignSelf: 'center',
        zIndex: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    }}>
        <TouchableOpacity onPress={() => setTabZoq('Ritum Ighty Localize Of Apka')}>
            <Image
                source={require('../ArceGishHumiAsteses/ShorimTirceZobrazhnnya/barowinthebordr.png')}
                style={{
                    width: myWidth * 0.14,
                    height: myWidth * 0.14,
                }}
                resizeMode="contain"
            />
        </TouchableOpacity>

        <Text style={[{
            fontFamily: shihtOnts.foriLexenBod,
            textAlign: 'center',
            fontSize: myWidth * 0.064,
            color: '#C6C7E9',
            paddingHorizontal: myWidth * 0.04,
            letterSpacing: 1,
        }]} numberOfLines={1} adjustsFontSizeToFit>
            {tabZoq}
        </Text>

        <View style={{ width: myWidth * 0.14 }} />
    </View>
);

export default TopBarView;
