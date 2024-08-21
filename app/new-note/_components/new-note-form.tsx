"use client";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import MDInput from "@/components/ui/md-input";
import { useState } from "react";

const NoteSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    tags: z.string().array(),
    content: z.string(),
  })
  .required();

const defaultValues = {
  tags: [],
};

export default function NewNoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof NoteSchema>>({
    resolver: zodResolver(NoteSchema),
    defaultValues,
  });

  const onSubmit = (data: z.infer<typeof NoteSchema>) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col gap-3 py-4"
    >
      <Input
        type="text"
        label="Name"
        description={
          <p className="text-red-800 dark:text-red-200">
            {errors.name?.message}
          </p>
        }
        {...register("name")}
      />

      <Textarea
        label="Description"
        description={
          <p className="text-red-800 dark:text-red-200">
            {errors.description?.message}
          </p>
        }
        {...register("description")}
      />

      <MDInput
        label="Content"
        description={
          <p className="text-red-800 dark:text-red-200">
            {errors.content?.message}
          </p>
        }
        {...register("content")}
        className="grow"
      />

      <Button className="w-fit">Share</Button>
    </form>
  );
}
