"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

import GradientButton from "./button-demo/GradientButton";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

import { FaRegCalendarAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const FormSchema = z.object({
  name: z.string().min(3, { message: "Student Name must be atleat 3 character" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  mobile: z.string().min(10, { message: "Mobile is too short" }).refine((val) => {
    const digits = val.replace(/\D/g, "");
    return digits.length === 12 && digits.startsWith("91");
    }, { message: "Please enter a valid 10-digit indian mobile number" }),
  age: z.string().min(1, { message: "Age must have atleast minimum 1 value" }).max(2, { message: "Age must have atleast maximum 2 value" }),
});

export function DialogDemo() {
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

      toast({ title: "Success✅", description: "Free Class form submitted successfully", variant: "default" });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed", description: "There was an issue submitting the Free Class form", variant: "destructive" });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <GradientButton name="Free Classes" icon={<FaRegCalendarAlt size={20} />} type="button" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] justify-center dark:bg-sky-50 dark:text-black">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 items-center h-auto space-y-2 p-10 rounded-xl "
          >
            <DialogHeader>
              <DialogTitle className="text-4xl">Free Class</DialogTitle>
            </DialogHeader>

            {/* Child Full Name and Age */}
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
                        className="w-96 h-14 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
            </div>

            {/* Child Email and Phone  */}
            <div className="flex flex-row items-center gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter Child Email Address"
                        type="email"
                        required
                        title="Email"
                        {...field}
                        className="w-96 h-14 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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
                        inputStyle={{ width: "450px", height: "40px" }}
                        inputProps={{ ref: field.ref, required: true }}                    
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>

            <DialogFooter>
              <Button type="submit" className="px-8 py-6 shadow-md">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
