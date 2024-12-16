import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required("กรุณากรอกข้อมูล").email("Invalid email"),
  password: yup
    .string()
    .required("กรุณากรอกข้อมูล")
    .min(8, "Password must contain at least 8 characters"),
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

  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  )
}

export default AccountScreen


const styles = StyleSheet.create({});
