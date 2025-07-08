"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";

function SignupForm() {
  const { control, handleSubmit } = useForm({
    values: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Name:</label>
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              message: "Name is required",
              value: true,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type="text"
                placeholder="Write your name"
                {...field}
              >
                <TextField.Slot>
                  <PersonIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              message: "Email is required",
              value: true,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type="email"
                placeholder="email@fomain.com"
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

        <label htmlFor="password">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              message: "Password is required",
              value: true,
            },
            minLength: {
              message: "Password must be 6 at least 6 characters",
              value: 6,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root type="password" placeholder="******" {...field}>
                <TextField.Slot>
                  <LockClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

        <Button type="submit">Sign up</Button>
      </Flex>
    </form>
  );
}

export default SignupForm;
