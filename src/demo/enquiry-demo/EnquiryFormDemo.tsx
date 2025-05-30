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
import { Textarea } from "@/components/ui/textarea";

import { ButtonDemo } from "../button-demo/ButtonDemo";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const FormSchema = z.object({
  name: z.string().min(3, { message: "Student Name must be at least 3 characters" }),
  age: z.string().min(1, { message: "Age must have atleast minimum 1 value" }).max(2, { message: "Age must have atleast maximum 2 value" }),
  adminName: z.string().optional(),
  requirement: z.string().optional(),
  mobile: z.string().min(10, { message: "Mobile is too short" }).refine((val) => {
        const digits = val.replace(/\D/g, "");
        return digits.length === 12 && digits.startsWith("91");
      }, { message: "Please enter a valid 10-digit indian mobile number" }),
  email: z.string().email({ message: "Please enter a valid email" }),
});

export function EnquiryFormDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      age: "",
      adminName: "",
      email: "",
      mobile: "+91",
      requirement: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await handlePostEnquiry(data);
      console.log("Data:" + JSON.stringify(result));

      form.reset();

      toast({ title: "Success✅", description: "School or College Enquiry form submitted successfully", variant: "default" });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed", description: "There was an issue submitting the School or College Enquiry form", variant: "destructive" });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-6/7 flex flex-col gap-8 border-t-8 border-orange-500 bg-white dark:bg-gray-800 dark:text-white items-center h-auto space-y-2 p-10 rounded-lg shadow-2xl"
      >
        <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl font-bold">Any question / remarks ?</p>
          <p className="text-sm font-bold text-gray-500">
            Write us a line and we will get in touch
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">

          {/* School or College Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter School or College name"
                    type="text"
                    required
                    title="School or College Name"
                    {...field}
                    className="w-[930px] h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                  />
                </FormControl>
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
                    className="w-[930px] h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Admin Name */}
          <FormField
            control={form.control}
            name="adminName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Admin Name"
                    type="text"
                    required
                    title="Admin Name"
                    {...field}
                    className="w-[930px] h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Email Address"
                    type="email"
                    required
                    title="Email"
                    {...field}
                    className="w-[930px] h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Student Mobile */}
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput
                    country={"in"}
                    {...field}
                    inputStyle={{ width: "930px", height: "40px" }}
                    inputProps={{ ref: field.ref, required: true }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Requirement */}
          <FormField
            control={form.control}
            name="requirement"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Type your requirement here..."
                    title="Requirement"
                    className="w-[930px] h-[120px] rounded-lg focus:shadow-md border-2 border-sky-500 dark:bg-white dark:text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>
        <div>
          <ButtonDemo
            name="Submit"
            type="submit"
            className="bg-sky-500 px-10 py-6 text-white rounded-full hover:bg-slate-300 hover:text-sky-500
            transition-all duration-300 delay-75 ease-in-out"
          />
        </div>
      </form>
    </Form>
  );
}
