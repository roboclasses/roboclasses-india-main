"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { ButtonDemo } from "./button-demo/ButtonDemo";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const FormSchema = z.object({
  name: z.string().min(3, { message: "First Name must be at least 3 character" }),
  age: z.string().min(1, { message: "Age must have atleast minimum 1 value" }).max(2, { message: "Age must have atleast maximum 2 value" }),
  password: z.string().min(8, { message: "password must be atleast 8 character" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  mobile: z.string().min(10, { message: "Mobile is too short" }).refine((val) => {
    const digits = val.replace(/\D/g, "");
    return digits.length === 12 && digits.startsWith("91");
    }, { message: "Please enter a valid 10-digit indian mobile number" }),
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      age: "",
      email: "",
      mobile: "+91",
      password: "",
    },
  });

   async function onSubmit(data: z.infer<typeof FormSchema>) {
      try {
        const result = await handlePostEnquiry(data);
        console.log("Data:" + JSON.stringify(result));
  
        form.reset();
  
        toast({ title: "Success✅", description: "Registration form submitted successfully", variant: "default" });
      } catch (error) {
        console.error(error);
        toast({ title: "Failed", description: "There was an issue submitting the Registration form", variant: "destructive" });
      }
    }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-xl h-auto flex flex-col gap-4 p-5 rounded-md
         bg-sky-200/40 items-center ml-96"
      >
        <div className="flex flex-col gap-1 items-center mb-6 text-black">
          <p className="text-4xl font-extrabold">CREATE ACCOUNT</p>
          <p className="text-gray-600">
            Please Register using account detail bellow
          </p>
        </div>

        {/* First name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your First Name"
                  type="text"
                  required
                  title="First Name"
                  {...field}
                  className="rounded-full border-2 border-sky-500 bg-white py-6 w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Child Age */}
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter Child Age"
                  type="number"
                  required
                  title="Child Age"
                  {...field}
                  className="w-96 h-14 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Parent or Child Phone number */}
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneInput
                  country={"in"}
                  {...field}
                  inputStyle={{ width: "450px", height: "40px" }}
                  inputProps={{ ref: field.ref, required: true }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email address */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your Email Address"
                  type="email"
                  required
                  title="Email"
                  {...field}
                  className="rounded-full border-2 border-sky-500 bg-white py-6 w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name={"password"}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter a strong password"
                  type="password"
                  required
                  title="Password"
                  {...field}
                  className="rounded-full border-2 border-sky-500 bg-white py-6 w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center pt-2">
          <ButtonDemo
            name="Create"
            type="submit"
            className="bg-sky-500 text-white rounded-full shadow-md px-8 py-6"
          />
        </div>
        <div className="flex text-left mt-2">
          <Link href="/" className="text-base font-bold text-sky-500  hover:text-black">
            Return To Store
          </Link>
        </div>
      </form>
    </Form>
  );
}
