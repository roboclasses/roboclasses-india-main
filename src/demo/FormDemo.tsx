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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { ButtonDemo } from "./button-demo/ButtonDemo";
import { cn } from "@/lib/utils";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export const FormSchema = z.object({
  name: z.string().min(2, { message: "Student Name must be at least 2 characters" }),
  age: z.string().min(1, { message: "Age must be atleast minimum 1 value" }).max(2, { message: "Age must be atleast maximum 2 value" }),
  mobile: z.string().min(10, { message: "Mobile number is too short" }).refine((val) => {
      const digits = val.replace(/\D/g, ""); // Remove non-digits
      return digits.length === 12 && digits.startsWith("91"); // For +91 + 10 digits
    },
    { message: "Please enter a valid 10-digit Indian mobile number" }
  ),
  email: z.string().email({ message: "Please enter a valid email" }),
  mode: z.enum(["online", "offline"], { message: "Please select a mode" }),
});

export function FormDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      age: "",
      mobile: "+91",
      email: "",
      mode: "offline",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await handlePostEnquiry(data);
      console.log("Data:" + JSON.stringify(result));

      form.reset();

      toast({
        title: "Success✅",
        description: "Enquiry form submitted successfully",
        variant: "default",
      });
      
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed",
        description: "There was an issue submitting the enquiry form",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 p-5 rounded-xl bg-[#F0F0F0]/50 mt-5 text-black flex flex-col items-center lg:w-[380px] w-[360px]"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="lg:text-3xl text-xl font-bold">Enquire Now</p>
          <p className="text-slate-800 text-xs lg:font-semibold" style={{ letterSpacing: "0.05em" }}>
            Learn from our best teachers
          </p>
          <div className="flex flex-row items-center gap-1">
            <hr className="border-1 border-slate-400 w-16 rounded-lg" />
            <p className="lg:text-md text-sm font-extrabold text-slate-800">
              Select the session mode
            </p>
            <hr className="border-1 border-slate-400 w-16 rounded-lg" />
          </div>

          {/* Class Mode (Offline/Online) */}
          <FormField
            control={form.control}
            name="mode"
            render={({ field }) => (
              <FormItem>
                <Tabs
                  value={field.value}
                  onValueChange={field.onChange}
                  className="mt-2"
                >
                  <TabsList className="grid w-[345px] grid-cols-2">
                    <TabsTrigger
                      value="online"
                      className={cn(
                        field.value === "online"
                          ? "bg-custom-gradient text-white"
                          : "text-slate-500"
                      )}
                    >
                      Online
                    </TabsTrigger>
                    <TabsTrigger
                      value="offline"
                      className={cn(
                        field.value === "offline"
                          ? "bg-custom-gradient text-white"
                          : "text-slate-500"
                      )}
                    >
                      Offline
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row items-center gap-1">
            <hr className="border-1 border-zinc-400 w-20 rounded-lg" />
            <p className="lg:text-md text-sm font-semibold px-2 text-zinc-800">Enter Your Details</p>
            <hr className="border-1 border-zinc-400 w-20 rounded-lg" />
          </div>
        </div>

        {/* Student/Parent Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Student Name"
                  {...field}
                  required
                  type="text"
                  className="w-[340px] dark:text-white border-0 border-slate-300 rounded-lg focus:ring-4 ring-cyan-500 shadow-none"
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
                  placeholder="Age"
                  required
                  type="number"
                  {...field}
                  className="w-[340px] dark:text-white border-0 border-slate-300 rounded-lg focus:ring-4 ring-cyan-500 shadow-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Student/Parent Mobile */}
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
      <FormMessage />
    </FormItem>
  )}
/>
</div>


        {/* Email Address */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email Address"
                  {...field}
                  required
                  type="email"
                  className="w-[340px] dark:text-white border-0 border-slate-300 rounded-lg focus:ring-4 ring-cyan-500 shadow-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonDemo name="Submit" type="submit" className="w-[340px] focus:bg-accent-foreground focus:text-white"/>
      </form>
    </Form>
  );
}
