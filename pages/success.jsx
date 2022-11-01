import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg w-1/2 font-['Lato-Regular'] text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-['Lato-Bold']">Thanks for Email{router.query.name}</h1>
        <p className="">49</p>
      </div>
    </main>
  );
};

export default Success;
