import { WebView } from 'react-native-webview';
import { Dimensions, View, } from 'react-native';

const CircleBlueSpinned = () => {
  const dimensions = Dimensions.get('window');

  const fituload = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        /* From Uiverse.io by rushik0507 */ 
        .container {
          width: 3.25em;
          transform-origin: center;
          animation: rotate4 2s linear infinite;
        }

        .loader {
          fill: none;
          stroke: #106ee8;
          stroke-width: 10;
          stroke-dasharray: 2, 200;
          stroke-dashoffset: 0;
          stroke-linecap: round;
          animation: dash4 1.5s ease-in-out infinite;
        }

        @keyframes rotate4 {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dash4 {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }

          50% {
            stroke-dasharray: 90, 200;
            stroke-dashoffset: -35px;
          }

          100% {
            stroke-dashoffset: -125px;
          }
        }
        html, body {
          height: 100%;
          margin: 0;
          background: transparent;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background: transparent;
        }
      </style>
    </head>
    <body>
      <svg viewBox="25 25 50 50" class="container">
        <circle cx="50" cy="50" r="20" class="loader"></circle>
      </svg>
    </body>
    </html>
  `;

  return (
    <View style={{
      flex: 0,
      width: dimensions.width * 0.9,
      alignSelf: 'center',
      height: dimensions.height * 0.1,
    }}>
      <WebView
        startInLoadingState={false}
        showsVerticalScrollIndicator={false}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        scrollEnabled={false}
        javaScriptEnabled={true}
        source={{ html: fituload }}
        domStorageEnabled={true}
        mixedContentMode="compatibility"
        scalesPageToFit={false}
        showsHorizontalScrollIndicator={false}
        style={{ width: '100%', backgroundColor: 'transparent', height: '100%', }}
        bounces={false}
      />
    </View>
  );
};

export default CircleBlueSpinned;