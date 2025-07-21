"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";
import { ButtonDemo } from "../button-demo/ButtonDemo";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export const FormSchema = z.object({
  name: z.string().min(3, { message: "Student Name must be at least 3 character" }),
  age: z.string().min(1, { message: "Age must have at least minimum 1 value" }).max(2, { message: "Age must have at least maximum 2 value" }),
  mobile: z.string().min(10, {message: "Mobile is too short"})
  .refine((val) => {
    const digits = val.replace(/\D/g, "");
    return digits.length === 12 && digits.startsWith('91')
  },{ message:"Please enter a valid 10-digit indian mobile number" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  terms: z.boolean().default(true).optional(),
});

export function FormDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      age: "",
      mobile: "+91",
      email: "",
      terms: true,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await handlePostEnquiry(data);
      console.log("Data:" + JSON.stringify(result));

      form.reset();

      toast({ title: "Success✅", description: "Enquiry form submitted successfully", variant: "default" });
      
    } catch (error) {
      console.error(error);
      toast({ title: "Failed", description: "There was an issue submitting the enquiry form", variant: "destructive" });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-[530px] space-y-2 p-5 rounded-xl bg-white mt-5
         text-black flex flex-col items-center "
      >
        <div className="flex flex-col items-center gap-3">
          <p className="lg:text-3xl text:2xl font-bold">ROBO ROMP 2025</p>
          <p className="lg:text-xl text-sm font-extrabold text-transparent bg-clip-text bg-custom-gradient">
            Register to participate
          </p>
          <div className="flex flex-row items-center gap-1 my-3">
            <hr className="border-1 border-slate-300 lg:w-20 w-6 rounded-lg" />
            <p className="lg:text-md text-xs">Enter Your Details</p>
            <hr className="border-1 border-slate-300 lg:w-20 w-6 rounded-lg" />
          </div>
        </div>

        {/* Student Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter Student Name"
                  required
                  type="text"
                  title="Student Name"
                  {...field}
                  className="lg:w-[450px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Student/Parent Mobile */}
        <div className="max-w-md w-full">
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
               <PhoneInput
                  country={"in"}
                  {...field}  
                  inputStyle={{width: "100%", height: "40px"}}
                  inputProps={{ ref: field.ref, required: true }}
                />
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
                  type="email"
                  required
                  title="Email Address"
                  {...field}
                  className="lg:w-[450px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm"
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
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger title="Age" className="lg:w-[450px] w-[230px] border-2 border-slate-300 rounded-lg focus:ring-1 ring-gold focus:shadow-sm">
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="6-10">6-10 Years</SelectItem>
                  <SelectItem value="10+">10+ Years</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border-none p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-gray-600 lg:text-base text-xs">
                I accecpt all terms and conditions.
              </FormLabel>
            </FormItem>
          )}
        />

        <ButtonDemo name="Submit" type="submit" className="w-full focus:bg-accent-foreground focus:text-white" />
      </form>
    </Form>
  );
}
