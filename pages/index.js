import Head from "next/head";
import Image from "next/image";
import formPic from "../public/form.png";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";

export default function Home() {
  //router
  const router = useRouter();

  //formik logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "Russia",
      terms: "",
    },
    //validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be <=20 chars.")
        .required("Name is required."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      terms: Yup.array().required("TOS must be checked."),
    }),

    //submit form
    onSubmit: (values) => {
      console.log('submitted');
      console.log(values);
      router.push({ pathname: "/success", query: values });
    },
  });

  // console.log(formik.values);
  // console.log(formik.errors);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='absolute w-full'
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex items-center justify-center">
        <form
          className="bg-white flex rounded-lg w-1/2 font-latoRegular"
          onSubmit={formik.handleSubmit}
        >
          {/* text */}
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-['Lato-Bold']">
              Let&apos;s get stated
            </h1>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a
              nobis voluptatem nulla nesciunt dolore laborum, animi repudiandae
              !
            </p>
            <div className="mt-6">
              {/* name input */}
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block font-['Lato-Bold'] text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500
                  focus:ring-teal-500"
                  type="text"
                  name="name"
                  id=""
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Enter Your Name"
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Email input */}
              <div className="pb-4">
                <label
                  htmlFor="email"
                  className={`block font-['Lato-Bold'] text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500
                  focus:ring-teal-500"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Country input */}
              <div className="pb-4">
                <label
                  htmlFor="country"
                  className="block font-['Lato-Bold'] text-sm pb-2"
                >
                  Country
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500
                  focus:ring-teal-500"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <option value="">Russia</option>
                  <option value="">USA</option>
                  <option value="">Netherlands</option>
                  <option value="">Germany</option>
                </select>
              </div>

              {/* Terms of service input */}
              <div className="pb-4">
                <label
                  htmlFor="terms"
                  className={`block font-['Lato-Bold'] text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms Of Service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id=""
                    value="checked"
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <p className="text-sm font-['Lato-Bold'] text-gray-500">
                    I agree to the Terms of Service.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                // onClick={(e)=>e.preventDefault()}
                className="bg-teal-500 text-sm text-white py-3 mt-6 rounded-lg w-full font-['Lato-Bold']"
              >
                Start now!
              </button>
            </div>
          </div>
          {/* image */}
          <div className="flex-1 relative">
            <Image
              src={formPic}
              fill
              className="object-cover rounded-lg"
              alt="form-learn"
              priority
            />
          </div>
        </form>
      </main>
    </m.div>
  );
}
