"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormAiAnalyzerSchema } from "@/helpers/validations/validation-ai-analyzer";

export function FormAiAnalyzer() {
  const form = useForm<z.infer<typeof FormAiAnalyzerSchema>>({
    mode: "all",
    resolver: zodResolver(FormAiAnalyzerSchema),
    defaultValues: {
      ai_analyzer: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormAiAnalyzerSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-6 h-full"
      >
        <FormField
          control={form.control}
          name="ai_analyzer"
          render={({ field }) => (
            <FormItem className="h-full">
              <FormControl>
                <Textarea
                  placeholder="Tell us about your current mental state..."
                  className=" w-full  resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={!form.formState.isValid}
          className="mr-4 bg-netral-primary"
        >
          Analyze
        </Button>
        <Button type="button" disabled={!form.formState.isValid} variant="destructive">
          Cancel
        </Button>
      </form>
    </Form>
  );
}
