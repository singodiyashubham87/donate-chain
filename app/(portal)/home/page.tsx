"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push("/about-us")}>
        About Us
      </button>
      <button type="button" onClick={() => router.push("/contact-us")}>
        Contact Us
      </button>
    </div>
  );
};

export default Home;
