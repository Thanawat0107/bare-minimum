import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as yup from "yup";
import { useForm, Controller  } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters"),
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
    // Perform actions with the validated form data
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        {/* Email Input */}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[
                styles.input,
                errors.email && styles.inputError, // Add error style
              ]}
              value={value}
              onChangeText={onChange}
              placeholder="Enter your email"
              keyboardType="email-address" // Add keyboard type
              autoCapitalize="none" // Disable auto-capitalize
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        {/* Password Input */}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[
                styles.input,
                errors.password && styles.inputError, // Add error style
              ]}
              value={value}
              onChangeText={onChange}
              placeholder="Enter your password"
              secureTextEntry // For password masking
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </View>

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit(onPressSend)} />
    </View>
  );
}

export default AccountScreen


const styles = StyleSheet.create({});
