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

import { ButtonDemo } from "../button-demo/ButtonDemo";
import { FREE } from "@/constants/Images";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const FormSchema = z.object({
  name: z.string().min(3, { message: "Student Name must be at least 3 character" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  age: z.string().min(1, { message: "Age must have atleast minimum 1 value" }).max(2, { message: "Age must have atleast maximum 2 value" }),
  mobile: z.string().min(10, { message: "Mobile is too short" }).refine((val) => {
    const digits = val.replace(/\D/g, "");
    return digits.length === 12 && digits.startsWith("91");
    },{ message: "Please enter a valid 10-digit indian mobile number" }),
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
  
        toast({ title: "Success✅", description: "Free Trial Class form submitted successfully", variant: "default" });
      } catch (error) {
        console.error(error);
        toast({ title: "Failed", description: "There was an issue submitting the Free Trial Class form", variant: "destructive" });
      }
    }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-5/6 h-[400px] flex flex-row gap-16 bg-white dark:bg-gray-800 dark:text-white items-center space-y-2 p-10 rounded-lg shadow-2xl">
        <div>
          <Image src={FREE} alt="free class image" height={239} width={277} />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <p className="text-3xl font-bold"> Register for a Free trial class</p>

          {/* Student Name and Email */}
          <div className="flex flex-row items-center gap-4">

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
                      className="w-80 h-12 border-2 bg-white border-sky-500 rounded-full focus:shadow-md"
                    />
                  </FormControl>
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
                      className="w-80 h-12 border-2 bg-white border-sky-500 rounded-full focus:shadow-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Student Phone and Age */}
          <div className="flex flex-row items-center gap-4">

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneInput
                      country={"in"}
                      {...field}
                      inputStyle={{ width: "300px", height: "40px" }}
                      inputProps={{ ref: field.ref, required: true }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                      className="w-80 h-12 border-2 bg-white border-sky-500 rounded-full focus:shadow-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>

          <div className="flex justify-center pt-2">
            <ButtonDemo
              name="Submit"
              type="button"
              className="px-6 py-2 bg-sky-500 text-white rounded-xl
            hover:bg-slate-300 hover:text-sky-500 transition-all duration-300 delay-75 ease-in-out"
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
