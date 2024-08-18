"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoginSchema = z
  .object({
    email: z.string({ required_error: "Email is required" }).email(),
    password: z
      .string({ required_error: "Password is required" })
      .min(0, { message: "Password is required" }),
  })
  .required();

type Props = {
  signIn: (data: z.infer<typeof LoginSchema>) => void;
};

export default function LoginForm({ signIn }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    signIn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <div className="space-y-3">
        <Input
          type="email"
          label="Email"
          description={
            <p className="text-red-800 dark:text-red-200">
              {errors.email?.message}
            </p>
          }
          {...register("email")}
        />

        <Input
          description={<p>{errors.password?.message}</p>}
          type="password"
          label="Password"
          {...register("password")}
        />
      </div>

      <Button type="submit" className="mx-auto block">
        Login
      </Button>
    </form>
  );
}
