import React from "react";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";

interface PageRouteProps {
  pageRoute: string;
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to Splash App</h1>
    </div>
  );
};

export default Home;
