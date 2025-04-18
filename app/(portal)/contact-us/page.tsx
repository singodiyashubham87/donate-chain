'use client'

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, Globe } from "lucide-react";
import Link from "next/link";

// Simulated live support status (replace with real data)
const isSupportOnline = true;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent to support@donatechain.org.`);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
    // Add API or Base blockchain submission logic here
  };

  return (
    <div className="container py-20 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We’re here to help! Reach out to the DonateChain team for support, inquiries, or partnership opportunities. Connect your Base wallet for secure communication.
      </p>

      {/* Contact Information */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 w-2/3 mx-auto">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-500" />
              Email Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">support@donatechain.org</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-green-500" />
              Call Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">+91-123-456-7890</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-500" />
              Social Media
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              <Link href="https://twitter.com/donatechain" target="_blank" className="text-blue-500 hover:underline">
                Twitter
              </Link>{" "}
              |{" "}
              <Link href="https://discord.gg/donatechain" target="_blank" className="text-indigo-500 hover:underline">
                Discord
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Live Support Status */}
      <div className="text-center mb-12">
        <p className="text-lg font-semibold">
          Support Status: <span className={isSupportOnline ? "text-green-500" : "text-red-500"}>
            {isSupportOnline ? "Online" : "Offline"}
          </span>
        </p>
        <p className="text-sm text-muted-foreground">
          {isSupportOnline ? "Our team is available to assist you now!" : "Check back later for support."}
        </p>
      </div>

      {/* Contact Form */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-gray-500" />
            Send Us a Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <p className="text-center text-green-600">Thank you for your message! We’ll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Submit
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;