"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabaseBrowser } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ------------------------------------------------------------------ */
/* 🎯 Validation schemas                                               */
/* ------------------------------------------------------------------ */

const signUpSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email(),
  password: z.string().min(8, "Min 8 characters"),
});
const signInSchema = signUpSchema.omit({ name: true });

type SignUpData = z.infer<typeof signUpSchema>;
type SignInData = z.infer<typeof signInSchema>;

/* ------------------------------------------------------------------ */
/* 📄 Component                                                        */
/* ------------------------------------------------------------------ */

export function AuthForm({ mode }: { mode: "signup" | "signin" }) {
  const supabase = supabaseBrowser();
  const router = useRouter();

  const form = useForm<SignUpData | SignInData>({
    resolver: zodResolver(mode === "signup" ? signUpSchema : signInSchema),
  });

  /* -------------------------------------------------------------- */
  /* 🔄 Submit handler                                              */
  /* -------------------------------------------------------------- */
  async function onSubmit(values: any) {
    if (mode === "signup") {
      /* 1️⃣  Create the user */
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error) {
        alert(error.message);
        return;
      }

      /* 2️⃣  Save the full name in `profiles` (non-null assertion) */
      const userId = data.user!.id; // `data.user` is guaranteed on success

      await supabase.from("profiles").insert({
        user_id: userId,
        full_name: values.name,
      });
    } else {
      /* 🔑  Sign-in branch */
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      if (error) {
        alert(error.message);
        return;
      }
    }

    /* 3️⃣  Success → dashboard */
    router.push("/dashboard");
  }

  /* -------------------------------------------------------------- */
  /* 🖼️  UI                                                         */
  /* -------------------------------------------------------------- */
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-4 rounded-2xl bg-white p-6 shadow-soft"
    >
      {mode === "signup" && (
        <Input placeholder="Name" {...form.register("name")} />
      )}

      <Input type="email" placeholder="Email" {...form.register("email")} />
      <Input
        type="password"
        placeholder="Password"
        {...form.register("password")}
      />

      <Button type="submit" disabled={form.formState.isSubmitting}>
        {mode === "signup" ? "Create account" : "Sign in"}
      </Button>
    </form>
  );
}