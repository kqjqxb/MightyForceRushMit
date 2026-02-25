import RNFS from 'react-native-fs';
const signaturePath = RNFS.MainBundlePath + '/ArceGishHumiAsuts/MightyForceRushMit_signature.dat';
RNFS.readFile(signaturePath).then(data => {
}).catch(() => {
});
