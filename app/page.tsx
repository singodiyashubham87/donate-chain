import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Sparkles, Shield, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredNgos } from "./data/featured-ngos";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col px-44">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center space-y-4 py-32 text-center md:py-36 lg:py-40">
          <Image
            src="/community.jpg"
            alt="Community"
            layout="fill"
            className="absolute inset-0 opacity-30 z-[-1] object-cover object-center"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Empowering NGOs through
              <br />
              Transparent Donations
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Join us in creating lasting impact through blockchain-powered
              transparent donations. Support verified Indian NGOs and track your
              contribution&apos;s journey.
            </p>
          </div>
        </div>
        <Button
          size="lg"
          asChild
          className="absolute left-1/2 bottom-10 -translate-x-1/2"
        >
          <Link href="/ngos">
            Explore NGOs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* How it Works */}
      <section className="border-t bg-muted/50 w-full flex flex-col items-center justify-center">
        <div className="container py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Verified NGOs</h3>
              <p className="text-muted-foreground">
                We carefully verify each NGO to ensure your donations reach
                genuine causes
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Transparent Tracking
              </h3>
              <p className="text-muted-foreground">
                Track your donations in real-time using blockchain technology
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Maximum Impact</h3>
              <p className="text-muted-foreground">
                100% of your donation goes directly to the chosen cause
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t w-full flex flex-col items-center justify-center">
        <div className="container py-20">
          <div className="flex flex-col items-center text-center">
            <Heart className="mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="mb-8 max-w-[600px] text-muted-foreground">
              Join thousands of donors who are creating positive change through
              transparent giving.
            </p>
            <Button size="lg" asChild>
              <Link href="/ngos">Start Donating Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-t bg-muted/50 w-full flex flex-col items-center justify-center">
        <div className="container py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Our Donors Say
          </h2>
          <TestimonialCard />
        </div>
      </section>

      {/* Featured NGOs Section */}
      <section className="border-t w-full bg-muted/50 flex flex-col items-center justify-center">
        <div className="container py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Featured NGOs
          </h2>
          <div className="grid gap-8 md:grid-cols-3 justify-items-center text-center">
            {featuredNgos?.map((ngo, i) => (
              <div
                key={ngo?.id}
                className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 p-6 rounded-xl shadow-md w-full max-w-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{ngo?.name}</h3>
                <p className="text-muted-foreground mb-4">{ngo?.desc}</p>
                <Link
                  href={ngo?.link}
                  className="text-primary font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
