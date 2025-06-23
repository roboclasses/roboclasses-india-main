"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { ButtonDemo } from "../button-demo/ButtonDemo";
import { FREE } from "@/constants/Images";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CyanButton from "../button-demo/CyanButton";

const FormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Student Name must be at least 3 character" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  age: z
    .string()
    .min(1, { message: "Age must have atleast minimum 1 value" })
    .max(2, { message: "Age must have atleast maximum 2 value" }),
  mobile: z
    .string()
    .min(10, { message: "Mobile is too short" })
    .refine(
      (val) => {
        const digits = val.replace(/\D/g, "");
        return digits.length === 12 && digits.startsWith("91");
      },
      { message: "Please enter a valid 10-digit indian mobile number" }
    ),
});

export function FreeTrialClassForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      mobile: "+91",
      email: "",
      age: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await handlePostEnquiry(data);
      console.log("Data:" + JSON.stringify(result));

      form.reset();

      toast({
        title: "Success✅",
        description: "Free Trial Class form submitted successfully",
        variant: "default",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed",
        description: "There was an issue submitting the Free Trial Class form",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:w-5/6 h-auto flex lg:flex-row flex-col lg:gap-16 gap-6 bg-white dark:bg-gray-800 dark:text-white items-center p-10 rounded-lg shadow-2xl"
      >
        <Image src={FREE} alt="free class image" height={239} width={277} />
        <div className="flex flex-col gap-6 items-center">
          <p className="lg:text-3xl text-xl font-bold"> Register for a Free trial class</p>

          {/* Student Name and Email */}
          <div className="flex lg:flex-row flex-col items-center gap-4 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter Student Name"
                      type="text"
                      required
                      title="Student Name"
                      {...field}
                      className="w-80 h-12 border-2 bg-white border-cyan-500 rounded-full focus:shadow-md"
                    />
                  </FormControl>
                  <FormDescription>This field is for student name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter Student Email"
                      type="email"
                      required
                      title="Email"
                      {...field}
                      className="w-80 h-12 border-2 bg-white border-cyan-500 rounded-full focus:shadow-md"
                    />
                  </FormControl>
                  <FormDescription>This field is for student email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Student Phone and Age */}
          <div className="flex lg:flex-row flex-col items-center gap-4 w-full">
            <div className="w-full max-w-md">
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneInput
                      country={"in"}
                      {...field}
                      inputStyle={{ width: "100%", height: "40px" }}
                      inputProps={{ ref: field.ref, required: true }}
                    />
                  </FormControl>
                  <FormDescription>This field is for student mobile number.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter Student Age"
                      type="number"
                      required
                      title="Age"
                      {...field}
                      className="w-80 h-12 border-2 bg-white border-cyan-500 rounded-full focus:shadow-md"
                    />
                  </FormControl>
                  <FormDescription>This field is for student age.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center pt-2">
            <CyanButton name="Submit" type="submit" />
          </div>
        </div>
      </form>
    </Form>
  );
}
