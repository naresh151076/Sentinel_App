"use client";

import { createContext, useContext, useState } from "react";

interface ActiveRequestContextType {
  activeRequestId: string | null;
  setActiveRequestId: (id: string | null) => void;
}

const ActiveRequestContext = createContext<ActiveRequestContextType | undefined>(
  undefined
);

export function ActiveRequestProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeRequestId, setActiveRequestId] = useState<string | null>(null);

  return (
    <ActiveRequestContext.Provider value={{ activeRequestId, setActiveRequestId }}>
      {children}
    </ActiveRequestContext.Provider>
  );
}

export function useActiveRequest() {
  const context = useContext(ActiveRequestContext);
  if (!context) {
    throw new Error(
      "useActiveRequest must be used within ActiveRequestProvider"
    );
  }
  return context;
}
