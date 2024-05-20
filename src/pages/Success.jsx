import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
function Success() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {loading ? (
          <PropagateLoader color="#36d7b7" />
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl font-semibold mb-4">Order successful!</h2>
            <p>Your order has been successfully placed!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Success;
