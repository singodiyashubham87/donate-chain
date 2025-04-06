'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Users, Shield } from "lucide-react";
import Link from "next/link";

// Mock data for milestones and team (replace with real data)
const milestones = [
  {
    id: 1,
    title: "Platform Launch",
    date: "Jan 2025",
    description: "Launched DonateChain on Base Devnet",
  },
  {
    id: 2,
    title: "First Donation",
    date: "Feb 2025",
    description: "First transparent donation recorded",
  },
  {
    id: 3,
    title: "100 NGOs Onboarded",
    date: "Mar 2025",
    description: "Reached 100 verified Indian NGOs",
  },
];

const team = [
  { id: 1, name: "Shubham Singodiya", role: "Full-Stack Developer" },
  { id: 2, name: "Kashika Gupta", role: "UI/UX Designer" },
  { id: 3, name: "Vidip Ghosh", role: "Full-Stack + Blockchain Developer" },
  { id: 4, name: "Ayush Yadav", role: "Full-Stack + Blockchain Developer" },
];

const connectWallet = () => {
  alert(
    "Connecting to Base wallet... (Placeholder for @base-labs/wallet-adapter)"
  );
  // Integrate with Base wallet adapter here
};

const AboutUs = () => {
  return (
    <div className="container py-20 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Welcome to DonateChain! We are a decentralized platform built on the
        Base blockchain, dedicated to connecting donors with Indian NGOs
        through transparent and efficient donations. Our mission is to empower
        social good with cutting-edge Web3 technology.
      </p>

      {/* Mission and Vision */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              To create a transparent donation ecosystem where every
              contribution is tracked on the Base blockchain, ensuring 100%
              impact for verified Indian NGOs.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              To revolutionize philanthropy by leveraging decentralization,
              making donations secure, verifiable, and accessible to all.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Connect Wallet Section */}
      <div className="text-center mb-12">
        <Button
          onClick={connectWallet}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Globe className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          Explore our platform securely with your wallet.
        </p>
      </div>

      {/* Creative Usage Tracking - Milestone Timeline */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-gray-300" />
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-1/2" />
              <div className="bg-white p-4 rounded-lg shadow-md relative z-10 w-1/3">
                <h3 className="text-lg font-semibold">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {milestone.date}
                </p>
                <p className="text-gray-600 mt-2">{milestone.description}</p>
              </div>
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  {member.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
