import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const webviewRef = useRef(null);

  backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack();
  };

  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} style="light" />

      <WebView
        source={{ uri: "https://quran-rizalyoga.vercel.app/" }}
        originWhitelist={["*"]}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            color="blue"
            size="large"
            style={{
              flex: 1,
            }}
          />
        )}
        ref={webviewRef}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
          setCurrentUrl(navState.url);
        }}
      />
      {/* <View
        style={{
          width: 400,
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#2ed2d2",
        }}
      >
        <TouchableOpacity onPress={backButtonHandler}>
          <Text style={{ color: "white", fontSize: 20 }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={frontButtonHandler}>
          <Text style={{ color: "white", fontSize: 20 }}>Forward</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252839",
    // justifyContent: "center",
  },
  tittles: {
    color: "#fff",
    fontWeight: "bold",
  },
  subText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
