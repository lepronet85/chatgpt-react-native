import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const { type } = useLocalSearchParams<{ type: string }>();
  const [loading, setLoading] = useState(false);
  const [emailAdress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(emailAdress);
  }, [emailAdress]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={1}
      style={styles.container}
    >
      {loading && (
        <View style={defaultStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={"#fff"} />
        </View>
      )}
      <Image
        source={require("../assets/images/logo-dark.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>
        {type === "login" ? "Welcome back" : "Create your account"}
      </Text>
      <View style={{ marginBottom: 30 }}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          style={styles.inputField}
          value={emailAdress}
          onChangeText={setEmailAdress}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {type === "login" ? (
        <TouchableOpacity
          style={[defaultStyles.btn, styles.btnPrimary]}
          // onPress={onSignInPress}
        >
          <Text style={styles.btnPrimaryText}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[defaultStyles.btn, styles.btnPrimary]}
          // onPress={onSignUpPress}
        >
          <Text style={styles.btnPrimaryText}>Create account</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginVertical: 80,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff",
  },
  btnPrimary: {
    backgroundColor: Colors.primary,
    marginVertical: 4,
  },
  btnPrimaryText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Page;
