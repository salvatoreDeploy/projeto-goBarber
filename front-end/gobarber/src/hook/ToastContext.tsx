import React, { createContext, useContext, useCallback } from "react";
import { ToastContainer } from "../components/ToatContainer";

interface ToastProviderState {
  children: React.ReactNode;
}

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);

export function ToastProvider({ children }: ToastProviderState) {
  const addToast = useCallback(() => {
    console.log("addtoast");
  }, []);
  const removeToast = useCallback(() => {
    console.log("RemoveToast");
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must used within a ToasProvider");
  }

  return context;
}
