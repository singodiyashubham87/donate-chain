"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CheckCircle } from "lucide-react";
import Link from "next/link";
import IntegrateWallet from "@/components/integrate-wallet";
import { ethers } from "ethers";
import { useWallet } from "../../context/WalletContext";
import contractABI from "../../contracts/abi";

// Mock data for NGOs (replace with real data from Base blockchain or API)
const mockNGOs = [
  {
    id: 1,
    name: "Seva Foundation",
    description:
      "Providing education and healthcare to underprivileged children in rural India.",
    impact: "5000+ children impacted",
    donationGoal: 10000,
    donatedAmount: 7500,
    address: "0x1...seva",
  },
  {
    id: 2,
    name: "Green India Initiative",
    description:
      "Planting trees and promoting sustainable farming in drought-hit areas.",
    impact: "10,000+ trees planted",
    donationGoal: 5000,
    donatedAmount: 3200,
    address: "0x2...green",
  },
  {
    id: 3,
    name: "Women Empowerment Network",
    description:
      "Supporting skill development and financial independence for women in India.",
    impact: "2000+ women trained",
    donationGoal: 8000,
    donatedAmount: 4500,
    address: "0x3...women",
  },
];

// Simulated Base wallet connection (replace with real integration)

const NGOs = () => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [selectedNGO, setSelectedNGO] = useState<number | null>(null);
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const { connectWallet, accountData } = useWallet();
  const contractAddress: string =
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
  const [balance, setBalance] = useState(BigInt(0));

  // const connectWallet = () => {
  //   setShowWallet(!showWallet);
  // };

  useEffect(() => {
    console.log("Fetching donation data from Base...");
  }, []);

  const getProgress = (donated: number, goal: number) =>
    Math.min((donated / goal) * 100, 100);

  const handleDonate = async () => {
    console.log("Donation Amount: ", donationAmount);
    console.log("Selected NGO: ", selectedNGO);
    if (selectedNGO && donationAmount > 0) {
      console.log("Selected NGO: ", selectedNGO);
      console.log("Donation Amount: ", donationAmount);
      try {
        await connectWallet();

        const providerInstance = new ethers.BrowserProvider(window.ethereum);
        const signer = await providerInstance.getSigner();
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setContract(contractInstance);
        const tx = await contractInstance.donate(donationAmount);
        console.log("Transaction: ", tx);
      } catch (error) {
        alert("Error connecting to wallet: " + error);
      }

      alert(
        `Donating ${donationAmount} to ${
          mockNGOs[selectedNGO - 1].name
        } at address ${mockNGOs[selectedNGO - 1].address}`
      );
      setDonationAmount(0);
      setSelectedNGO(null);
    } else {
      alert("Please select an NGO and enter a donation amount.");
    }
  };

  return (
    <div className="container py-20 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Explore NGOs</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover and support verified Indian NGOs working on impactful causes.
        Browse through our list of trusted organizations and make a difference
        today using Base blockchain for transparency.
      </p>

      {/* <div className="text-center mb-12 w-full flex justify-center">
        <IntegrateWallet />
      </div> */}

      {/* NGO List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockNGOs.map((ngo) => (
          <Card key={ngo.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                {ngo.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{ngo.description}</p>
              <p className="text-sm text-muted-foreground mb-2">
                Impact: {ngo.impact}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    width: `${getProgress(
                      ngo.donatedAmount,
                      ngo.donationGoal
                    )}%`,
                  }}
                />
              </div>
              <p className="text-sm mb-4">
                Donated: ${ngo.donatedAmount} / ${ngo.donationGoal}
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedNGO(ngo.id)}
                className="w-full mb-2"
              >
                Select for Donation
              </Button>
              {selectedNGO === ngo.id && (
                <div className="mt-4">
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    placeholder="Enter amount in APT"
                    className="w-full p-2 border rounded mb-2"
                    min="1"
                  />
                  <Button
                    onClick={handleDonate}
                    className="w-full bg-purple-600 text-white hover:bg-purple-700"
                  >
                    <Heart className="mr-2 h-4 w-4" /> Donate Now
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Creative Usage Tracking (Impact Meter) */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Total Impact Meter</h2>
        <p className="text-gray-600 mb-4">
          Track the collective impact of donations across all NGOs.
        </p>
        <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-6 mb-2">
          <div
            className="bg-green-600 h-6 rounded-full transition-all duration-500"
            style={{ width: "60%" }} // Simulated progress (replace with real data)
          />
        </div>
        <p className="text-sm text-muted-foreground">
          60% of yearly goal achieved!
        </p>
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

export default NGOs;
