import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const Success = () => {
  const [pieces, setPieces] = useState(200);
  const router = useRouter();

const stopConfetti = () => {
  setTimeout(()=>{
    setPieces(0)
  }, 3000)
};

useEffect(()=>{
  stopConfetti();
},[])

  return (
    <m.main
      className="h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center bg-white rounded-lg w-1/2 font-['Lato-Regular'] text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-['Lato-Bold']">
          Thanks for Email{router.query.name}
        </h1>
        <p className="text-lg text-gray-500">
          We have sent you an email over at {router.query.email}.
        </p>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces}/>
    </m.main>
  );
};

export default Success;
