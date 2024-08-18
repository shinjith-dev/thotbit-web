'use client'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

const LoginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  password: z.string({ required_error: "Password is required" }).min(0, { message: "Password is required" })
}).required()


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  })
  const onSubmit = (data: z.infer<typeof LoginSchema>) => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>

        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}
