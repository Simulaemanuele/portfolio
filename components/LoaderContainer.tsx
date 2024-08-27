"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/MultiStepLoader";
import { loadingStates } from "@/data";

export function MultiStepLoaderContainer({
  loading,
  setLoading,
  setIsMounted,
}: {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMounted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {loading && (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <Loader
            loadingStates={loadingStates}
            loading={loading}
            setLoading={setLoading}
            setIsMounted={setIsMounted}
            duration={1000}
            loop
          />
        </div>
      )}
    </>
  );
}
