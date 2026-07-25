"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapPin, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/data";

// ---------------------------------------------------------------------------
// Zod schema
// ---------------------------------------------------------------------------

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

// ---------------------------------------------------------------------------
// ContactPage
// ---------------------------------------------------------------------------

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const watchedService = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
        setStatusMessage(json.message || "Quote request sent successfully!");
        reset();
      } else {
        setStatus("error");
        setStatusMessage(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/70 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get a Free Quote
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">
              Tell us about your valet and parking needs — we&apos;ll respond with
              a custom quote within 24 hours. No obligation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={0}
            >
              <div className="glass-card overflow-hidden p-6 sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours with a tailored proposal.
                </p>

                {/* Success / Error state */}
                {status === "success" && (
                  <div className="mb-6 flex items-start gap-3 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-5 mt-0.5 shrink-0"
                    />
                    <div>
                      <p className="font-semibold">Quote Request Sent!</p>
                      <p className="text-sm text-green-700">{statusMessage}</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800">
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm text-red-700">{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      {...register("phone")}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service Select */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Service Needed <span className="text-destructive">*</span>
                    </label>
                    <Select
                      value={watchedService}
                      onValueChange={(v: string | null) =>
                        setValue("service", v || "", { shouldValidate: true })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.title}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Tell Us About Your Needs{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Event date, number of guests, location, or any special requirements..."
                      {...register("message")}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 font-semibold"
                  >
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="mr-2 size-4"
                    />
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={1}
            >
              <div className="glass-card overflow-hidden p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="gradient-divider w-12 mb-5" />

                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <FontAwesomeIcon icon={faPhone} className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Phone
                      </p>
                      <a
                        href="tel:+15551237275"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        (555) 123-PARK
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <FontAwesomeIcon icon={faEnvelope} className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Email
                      </p>
                      <a
                        href="mailto:info@prestigevalet.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@prestigevalet.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <FontAwesomeIcon icon={faMapPin} className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Address
                      </p>
                      <p className="text-sm text-muted-foreground">
                        450 Commerce Drive, Suite 200
                        <br />
                        Metropolitan City, ST 94105
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Info card */}
              <div className="glass-card overflow-hidden p-6 mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Why Prestige?
                </h3>
                <div className="gradient-divider w-12 mb-5" />
                <ul className="space-y-3">
                  {[
                    "Free site walkthrough",
                    "Custom quote in 24 hours",
                    "No-obligation consultation",
                    "Fully insured & bonded",
                    "500+ events annually",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="size-3.5 text-secondary shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
