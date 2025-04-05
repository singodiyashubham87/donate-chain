import React from "react";
import { useRouter } from "next/router";

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
