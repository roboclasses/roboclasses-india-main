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
import { Textarea } from "@/components/ui/textarea";

import { ButtonDemo } from "../button-demo/ButtonDemo";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CyanButton from "../button-demo/CyanButton";


const FormSchema = z.object({
  name: z.string().min(3, { message: "Student Name must be at least 3 character" }),
  age: z.string().min(1, { message: "Age must have minimum 1 value" }).max(2, { message: "Age must have maximum 2 value" }),
  description: z.string().optional(),
  mobile: z.string().min(10, { message: "Mobile is too short" }).refine((val) => {
      const digits = val.replace(/\D/g, "");
      return digits.length === 12 && digits.startsWith("91");
    },{message: "Please enter a valid 10-digit indian mobile number"}),
  email: z.string().email({ message: "Please enter valid email" }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      age: "",
      email: "",
      mobile: "+91",
      description: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await handlePostEnquiry(data);
      console.log("Data:" + JSON.stringify(result));

      form.reset();

      toast({ title: "Success✅", description: "Contact form submitted successfully", variant: "default" });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed", description: "There was an issue submitting the contact form",variant: "destructive" });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:w-3/5 flex flex-col justify-center items-center gap-8 
        border-t-8 border-orange-500 dark:bg-gray-800 dark:text-white h-auto space-y-2 p-10 rounded-lg shadow-2xl">

        <div className="flex flex-col gap-2 items-center text-center">
          <p className="lg:text-3xl text-xl font-bold">Any question / remarks ?</p>
          <p className="lg:text-sm text-xs font-bold text-gray-500">
            Write us a line and we will get in touch
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center dark:text-black">
          {/* Student Name */}
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
                    className="lg:w-[450px] w-[280px] h-12 border-2 border-cyan-500 rounded-full focus:shadow-md dark:text-white"
                  />
                </FormControl>
                <FormDescription>This field is for student name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Student Age */}
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
                    title="Student Age"
                    {...field}
                    className="lg:w-[450px] w-[280px] h-12 border-2 border-cyan-500 rounded-full focus:shadow-md dark:text-white"
                  />
                </FormControl>
                <FormDescription>This field is for student age.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Student Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Student Email Id"
                    type="email"
                    required
                    title="Email"
                    {...field}
                    className="lg:w-[450px] w-[280px] h-12 border-2 border-cyan-500 rounded-full focus:shadow-md dark:text-white"
                  />
                </FormControl>
                <FormDescription>This field is for email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Student Mobile */}
          <div className="w-full max-w-md">
          <FormField
  control={form.control}
  name="mobile"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <div className="h-[45px] dark:bg-gray-900 dark:text-white bg-white text-black rounded-md border border-gray-300 dark:border-gray-700">
          <PhoneInput
            country={"in"}
            {...field}
            inputProps={{ ref: field.ref, required: true }}
            containerStyle={{ width: "100%", height: "100%" }}
            inputStyle={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              color: "inherit",
              border: "none",
              outline: "none",
              paddingLeft: "48px", // space for flag dropdown
            }}
            buttonStyle={{
              backgroundColor: "transparent",
              border: "none",
            }}
            dropdownStyle={{
              backgroundColor: "#1f2937", // Tailwind dark gray-800
              color: "#fff",
            }}
          />
        </div>
      </FormControl>
      <FormDescription>This field is for child or parent mobile</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>

          </div>

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Type your message here."
                    title="Description"
                    className="lg:w-[450px] w-[280px] h-[120px] rounded-lg focus:shadow-md border-2 border-cyan-500 dark:text-white"
                  />
                </FormControl>
                <FormDescription>This text area is for additional message.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

          <CyanButton name="Submit" type="submit"/>
      </form>
    </Form>
  );
}
