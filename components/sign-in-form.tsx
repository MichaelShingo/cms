"use client";

import { authClient } from "@/lib/auth-client";
import { signInFormSchema } from "@/lib/auth-schema";
import { Button, Input } from "@heroui/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function SignInForm() {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    const { email, password } = values;
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: () => {
          toast.loading("Signing in...");
        },
        onSuccess: () => {
          toast.dismiss();
          toast.success("Signed in successfully");
          redirect("/dashboard");
        },
        onError: (ctx) => {
          toast.dismiss();
          toast.error(ctx.error.message);
        },
      }
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            type="email"
            label="Email"
            placeholder="m@example.com"
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            type="password"
            label="Password"
            placeholder="********"
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}
