import { TextInput, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(2, "Password must be at least 2 characters"),
});

const AccountScreen = () => {
  return (
    <View>
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
                name="email"
                placeholder="Email Address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && <Text>{errors.email}</Text>}

              <TextInput
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

const styles = StyleSheet.create({});
