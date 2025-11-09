"use client";

import { authClient } from "@/lib/auth-client";
import { formSchema } from "@/lib/auth-schema";
import { Button, Input } from "@heroui/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, password } = values;
    await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: () => {
          toast("Signing up...");
        },
        onSuccess: () => {
          form.reset();
          redirect("/sign-in");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      }
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            label="Name"
            placeholder="John Doe"
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error?.message}
            {...field}
          />
        )}
      />
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
        Register
      </Button>
    </form>
  );
}
