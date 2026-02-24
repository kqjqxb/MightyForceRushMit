import QwexZantFrop from './MitorifUshigSrceOrce/RotecIghtiLimrPags/CofurLoadaingTutir';
import { GestureHandlerRootView as ZlufVintRok } from 'react-native-gesture-handler';
import { SafeAreaProvider as Sarodera } from 'react-native-safe-area-context';
import XytrBantLom from './MitorifUshigSrceOrce/RotecIghtiLimrPags/SritonContintWaroln';
import { NavigationContainer as Convigater } from '@react-navigation/native';
import { createNativeStackNavigator as poreates } from '@react-navigation/native-stack';
import BlantZopVrin from './MitorifUshigSrceOrce/RotecIghtiLimrPags/CoserShormOnbrigh';

const ZoqStonk = poreates();

const YintGropTree = () => {
    const ZoqScreen = ZoqStonk.Screen;
    const ZoqNavigator = ZoqStonk.Navigator;

    const blintTrans = {
        xlop: { headerShown: false, animation: 'fade' },
        ylop: { headerShown: false, animation: 'fade' },
    };

    return (
        <Convigater>
            <ZoqNavigator initialRouteName="CofurLoadaingTutir" screenOptions={{
                animationEnabled: true,
                contentStyle: { backgroundColor: '#1D1E2B' },
            }}
            >
                <ZoqScreen name="SritonContintWaroln"
                    options={{
                        ...blintTrans.xlop,
                        gestureEnabled: false,
                    }}
                    component={XytrBantLom}
                />

                <ZoqScreen
                    component={BlantZopVrin}
                    options={{
                        ...blintTrans.ylop,
                    }}
                    name="IantsAckOnbords"
                />

                <ZoqScreen
                    component={QwexZantFrop}
                    options={{
                        title: 'Boot Drift',
                        ...blintTrans.xlop,
                    }}
                    name="CofurLoadaingTutir"
                />
            </ZoqNavigator>
        </Convigater>
    );
};

const PlintRootZoq = () => {
    return (
        <ZlufVintRok style={{ flex: 1, backgroundColor: '#1D1E2B' }}>
            <Sarodera>
                <YintGropTree />
            </Sarodera>
        </ZlufVintRok>
    );
};

export default PlintRootZoq;
