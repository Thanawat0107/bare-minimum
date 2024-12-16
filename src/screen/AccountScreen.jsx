import { 
  TextInput, 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  Alert, 
  Keyboard, 
  TouchableWithoutFeedback 
} from 'react-native';
import React from 'react';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LinearGradient } from "expo-linear-gradient";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(2, "Password must be at least 2 characters"),
});

const AccountScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onPressSend = (formData) => {
    Alert.alert(JSON.stringify(formData));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(9, 112, 24, 0.8)", "transparent"]}
          style={styles.background}
        />
        <View style={styles.signupContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChange}
                placeholder="Email"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChange}
                placeholder="Password"
                secureTextEntry
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
          <Button title="Submit" onPress={handleSubmit(onPressSend)} />
        </View>
      </View>
    </TouchableWithoutFeedback>
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