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

import RoundedButton from "./button-demo/RoundedButton";
import { handlePostEnquiry } from "@/app/services/actions/EnquiryFormAction";

import { SlCalender } from "react-icons/sl";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const FormSchema = z.object({
  name: z.string().min(3, { message: "Child Name must be 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  mobile: z.string().min(10, { message: "Mobile is too short" }).refine((val) => {
        const digits = val.replace(/\D/g, "");
        return digits.length === 12 && digits.startsWith("91");
      }, { message: "Please enter a valid 10-digit indian mobile number" }),
  age: z.string().min(1, { message: "Age must have atleast minimum 1 value" }).max(2, { message: "Age must have atleast maximum 2 value" }),
  message: z.string().optional(),
});

export function JoinOurTeacherDialogDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      age: "",
      mobile: "+91",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await handlePostEnquiry(data);
      console.log("Data:" + JSON.stringify(result));

      form.reset();

      toast({ title: "Success✅", description: "Teacher Join form submitted successfully", variant: "default" });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed", description: "There was an issue submitting the Teacher Join form", variant: "destructive" });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <RoundedButton
          name="Join Us"
          icon={<SlCalender size={20} />}
          type="button"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] justify-center dark:bg-sky-50 dark:text-black">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 items-center h-auto space-y-2 p-10 rounded-xl "
          >
            <DialogHeader>
              <DialogTitle className="text-4xl">Teacher Join</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 items-center dark:text-black">

              {/* Child Name */}
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
                        className="w-96 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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

              {/* Email address */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Email Address"
                        type="email"
                        required
                        title="Child Email"
                        {...field}
                        className="w-96 h-12 border-2 border-sky-500 rounded-full focus:shadow-md bg-white"
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

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Give Message"
                        type="text"
                        required
                        title="Message"
                        {...field}
                        className="w-96 h-32 border-2 border-sky-500 rounded-lg focus:shadow-md bg-white"
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
