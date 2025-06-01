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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import Image from "next/image";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CyanButton from "../button-demo/CyanButton";


const FormSchema = z.object({
  name: z.string().min(3, { message: "Student Name must be at least 3 characters" }),
  age: z.string(),
  description: z.string().optional(),
  mobile: z.string().min(10, { message: "Mobile is too short" }).refine((val) => {
    const digits = val.replace(/\D/g, "");
    return digits.length === 12 && digits.startsWith("91");
    }),
  email: z.string().email({ message: "Please enter a valid email" }),
});

type formTypes = {
  src: string;
  title: string;
};

export function HomeSchoolingFormDemo({ src, title }: formTypes) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      mobile: "+91",
      email: "",
      age: "",
      description: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await handlePostEnquiry(data);
      console.log("Data:" + JSON.stringify(result));

      form.reset();

      toast({ title: "Success✅",description: "Free Trial Class form submitted successfully",variant: "default" });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed",description: "There was an issue submitting the Free Trial Class form", variant: "destructive" });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/5 flex flex-row border-t-8 border-orange-500
         gap-16 bg-white dark:bg-gray-800 dark:text-white items-center h-auto space-y-2 p-10 rounded-lg shadow-2xl"
      >
        <div>
          <Image src={src} alt="homeschooling-image" height={444} width={444} />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <p className="text-4xl font-bold mb-5">{title}</p>

          {/* Name and Age */}
          <div className="flex flex-row items-center gap-4">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter Child Name"
                      type="text"
                      required
                      title="Child Name"
                      {...field}
                      className="w-80 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

             <FormField
              control={form.control}
              name={"age"}
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        title="Child Age"
                        className="w-80 h-12 border-2 border-sky-500 rounded-full "
                      >
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="6-9">6-9 Years</SelectItem>
                      <SelectItem value="9-12">9-12 Years</SelectItem>
                      <SelectItem value="12+">12+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
           
          </div>

          {/* Email and Mobile */}
          <div className="flex flex-row items-center gap-4">

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
                      title="Child Email"
                      {...field}
                      className="w-80 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneInput
                      country={"in"}
                      {...field}
                      inputStyle={{ width: "320px", height: "40px" }}
                      inputProps={{ ref: field.ref, required: true }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>

          <CyanButton name="Submit" type="submit" />
        </div>
      </form>
    </Form>
  );
}
