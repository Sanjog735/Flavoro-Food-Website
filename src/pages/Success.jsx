import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className=" flex items-center justify-center flex-col h-screen ">
      {loading ? (
        <PropagateLoader className=" mb-10" color="#36d7b7" />
      ) : (
        <>
          <h2 className=" text-3xl text-center font-semibold mb-4">
            Order Successful!
          </h2>
          <p>Your order has been successfully placed</p>
        </>
      )}
    </div>
  );
};

export default Success;
