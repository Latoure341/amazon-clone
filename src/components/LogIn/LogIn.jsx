import React from "react";

const LogIn = () => {
  return (
    <>
      <div className="relative top-0 left-[35%] w-[30%] flex flex-col items-center justify-center px-4">
        <span className="flex items-center justify-center gap-2 mb-1">
          <img
            src="data:image/png;base64,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"
            className="w-2/6"
          />
          <p>.co.za</p>
        </span>

        <form className="flex flex-col gap-1 w-full border-slate-300 border p-6 rounded">
          <h1 className="text-2xl mb-2">Sign in or create account</h1>
          <label htmlFor="email" className="text-sm font-medium fw-bold">
           Enter mobile number or email
          </label>
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-2 border border-gray-400 rounded"
          />
          <button
            type="submit"
            className="mt-2 mb-4 text-sm px-3 py-1 bg-yellow-300 hover:bg-yellow-500 rounded-lg text-black cursor-pointer"
          >
            Continue
          </button>
          <p className="text-sm">By continuing, you agree to Amazon's  
            <a href="#" className="text-blue-500 underline"> Conditions of Use</a> and 
            <a href="#" className="text-blue-500 underline">Privacy Notice</a>.
          </p>
          <a href="#" className="text-sm text-blue-500 underline mt-2">Need help?</a>
        </form>
      </div>
    </>
  );
};

export default LogIn;
