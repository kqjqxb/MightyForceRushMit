import { NavigationContainer as NavContY } from '@react-navigation/native';
import { GestureHandlerRootView as GhrViewX } from 'react-native-gesture-handler';
import { SafeAreaProvider as SafeWrapQ } from 'react-native-safe-area-context';
import Jq8Varlop from './MitorifUshigSrceOrce/RotecIghtiLimrPags/CofurLoadaingTutir';
import ZibFlox from './MitorifUshigSrceOrce/RotecIghtiLimrPags/CoserShormOnbrigh';
import { createNativeStackNavigator as StackGenQ } from '@react-navigation/native-stack';
import PlonTixy from './MitorifUshigSrceOrce/RotecIghtiLimrPags/SritonContintWaroln';

const StackObjR = StackGenQ();

const MainTreeZ = () => {
    const Forcreq = StackObjR.Screen;
    const Nashu = StackObjR.Navigator;

    const fxAnimW = {
        alpha: { headerShown: false, animation: 'fade' },
        beta: { headerShown: false, animation: 'fade' },
    };

    return (
        <NavContY>
            <Nashu initialRouteName="CofurLoadaingTutir" screenOptions={{
                contentStyle: { backgroundColor: '#1D1E2B' },
                animationEnabled: true,
            }}>
                <Forcreq
                    options={{ ...fxAnimW.alpha, gestureEnabled: false, }}
                    component={PlonTixy}
                    name="SritonContintWaroln"
                />
                <Forcreq component={ZibFlox} options={{ ...fxAnimW.beta, }} name="ShytuiOnboaidrItoc"
                />
                <Forcreq
                    component={Jq8Varlop}
                    options={{
                        ...fxAnimW.alpha,
                    }}
                    name="CofurLoadaingTutir"
                />
            </Nashu>
        </NavContY>
    );
};

const RootEntryX = () => {
    return (
        <GhrViewX style={{ flex: 1, backgroundColor: '#1D1E2B' }}>
            <SafeWrapQ>
                <MainTreeZ />
            </SafeWrapQ>
        </GhrViewX>
    );
};

export default RootEntryX;
