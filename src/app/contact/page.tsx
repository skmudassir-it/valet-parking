"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
import { siteName } from "@/lib/data";

const serviceOptions = [
  "Restaurant Valet",
  "Event Valet",
  "Hotel Valet",
  "Wedding Valet",
  "Residential Valet",
  "Corporate Valet",
  "Shuttle Service",
  "Parking Management",
  "Other / Custom",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Get in Touch</h1>
          <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to elevate your arrival experience? Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="size-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">(555) 234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="size-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">hello@parkprovalet.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <FontAwesomeIcon icon={faLocationDot} className="size-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Office</p>
                    <p className="text-sm text-muted-foreground">500 Commerce Drive<br />Metro City, MC 10001</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-sm mb-2">Hours of Operation</h3>
                <div className="grid grid-cols-2 gap-y-1 text-sm text-muted-foreground">
                  <span>Mon – Fri</span><span>8 AM – 10 PM</span>
                  <span>Saturday</span><span>9 AM – 11 PM</span>
                  <span>Sunday</span><span>10 AM – 8 PM</span>
                </div>
                <p className="text-xs text-muted-foreground mt-3">24/7 service available for hotel partners</p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>Fill out the form below and we'll create a custom valet proposal for your venue.</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto mb-4">
                      <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quote Request Received!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll review your request and get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Service Needed *</label>
                        <Select
                          value={formData.service}
                          onValueChange={(v: string | null) => setFormData({ ...formData, service: v || "" })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Tell Us About Your Needs *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your venue, expected guest count, frequency of service needed, and any special requirements..."
                        rows={5}
                      />
                    </div>
                    {error && (
                      <p className="text-sm text-destructive">{error}</p>
                    )}
                    <Button type="submit" size="lg" className="btn-gold w-full sm:w-auto">
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2 size-4" />
                      Send Request
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
