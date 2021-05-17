import React from "react";
import socialMediaAuth from "../../Auth/auth";
import { githubProvider, googleProvider } from "../../Auth/authMethods";
import Button from "../Button/Button";
import Feature from "../Feature/Feature";
import Icons from "./icon/icon";

export default function Signin() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res.providerData[0].displayName);
    console.log(res.providerData[0].email);
    console.log(res.providerData[0].photoURL);
    let user = {
      name: res.providerData[0].displayName,
      email: res.providerData[0].email,
      photo: res.providerData[0].photoURL,
    };

    console.log(user, "User");
  };

  return (
    <>
      <div className="container px-4 lg:px-0 w-screen h-screen text-white mx-auto flex justify-center items-center font-mono">
        <div className="font-mono flex items-center w-custom  h-98 border border-opacity-20 border-gray-500 rounded-l-lg shadow-lg">
          {/* Left Section */}
          {/* ----------------------------------------------------------------------------------*/}
          <div className="w-full hidden lg:flex lg:w-1/2 h-full bg-siColor rounded-l-xl   flex-col items-start p-9">
            <h1 className="text-lg font-bold pb-5">
              Join millions of people prototyping what’s next
            </h1>
            <div className="flex flex-col h-full items-start justify-around">
              <Feature
                title="Code Anywhere"
                des="An instant IDE on any device with a web browser."
              />
              <Feature
                title="Start Quickly"
                des="No setup, and templates for all popular frameworks."
              />
              <Feature
                title="Prototype Rapidly"
                des="Create web apps, test ideas, and share creations easily."
              />
            </div>
          </div>
          {/* Right Section */}
          {/* ---------------------------------------------------------------------------------- */}
          <div className="w-full lg:w-1/2  rounded-lg h-full bg-white lg:rounded-none lg:rounded-r-lg flex flex-col text-siColor items-center py-9 px-3">
            <h1 className="text-xl font-extrabold pt-3 pb-1">
              Sign in to CodeSandbox
            </h1>
            <p className="text-sFont text-vs  text-center letter-tight">
              Get a free account, no credit card required
            </p>
            <div className="mt-5">
              <Button
                icon={Icons.Google}
                text="Google"
                handleFunction={handleOnClick}
                provider={googleProvider}
              />
              <Button
                icon={Icons.GitHub}
                text="GitHub"
                handleFunction={handleOnClick}
                provider={githubProvider}
              />
            </div>
            <div>
              <p className="text-sFont text-center text-vvs w-60 pt-12 p-text">
                {" "}
                By continuing, you agree to CodeSandbox{" "}
                <span className="underline">Terms of Service </span> ,{" "}
                <span className="underline"> Privacy Policy</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
