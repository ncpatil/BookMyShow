import React from "react";
import { getCurrentUser } from "../calls/authCalls.js";
import { useEffect } from "react";

function Home() {
  const getUserData = async () => {
    const userData = await getCurrentUser();
    console.log(userData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;
