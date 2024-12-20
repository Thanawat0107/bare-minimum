import { TextInput, Button, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { LinearGradient } from "expo-linear-gradient";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(2, "Password must be at least 2 characters"),
});

const AccountScreen = () => {
  const onPressSend = (formData) => {
    Alert.alert(JSON.stringify(formData));
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(9, 112, 24, 0.8)", "transparent"]}
        style={styles.background}
      />
      <View>
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <TextInput
                style={styles.textInput}
                name="email"
                placeholder="Email Address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && <Text>{errors.email}</Text>}

              <TextInput
                style={styles.textInput}
                name="password"
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text>{errors.password}</Text>
              )}
              <Button
                onPress={handleSubmit}
                title="LOGIN"
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  textInput: {
    height: 40,
    width: "100%",
    marginBottom: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 14,
    color: "red",
  },
  signupContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    elevation: 10,
    backgroundColor: "#e9f0ea",
    borderRadius: 10,
  },
});

