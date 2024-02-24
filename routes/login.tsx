import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //TODO: request to https://pacific-peak-09117-1584c379b9a2.herokuapp.com/api/login/
    //TODO: save LoggedIn variable in SharedPreferences
    navigation.navigate("HomePage");
  };

  return (
    <>
      <Text style={styles.title}>Login</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Button
          onPress={() => {
            handleLogin();
          }}
          title={"LOG IN"}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    position: "absolute",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: "23%",
    marginLeft: 20,
  },
  input: {
    height: 60,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
