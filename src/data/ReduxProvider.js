
"use client"

// این فایل را به صورت Client Component تعریف می‌کنیم

import { Provider } from "react-redux";
import { makeStore } from "./Store/Store";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { checkAuthenticated } from "@/utils/checkAuthenticated";


const ReduxProvider = ({ children }) => {
  useEffect(() => {
    const browserUUID = localStorage.getItem('browserUUID') || uuidv4();
    localStorage.setItem('browserUUID', browserUUID); // اطمینان از ذخیره UUID

  }, [])

  
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
};

export default ReduxProvider;