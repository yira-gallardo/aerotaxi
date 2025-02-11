"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    callbellSettings?: {
      uuid?: string;
      script_token?: string;
    };
  }
}

const Chatbot = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.callbellSettings) {
        window.callbellSettings = {};
      }
      window.callbellSettings["uuid"] = "360cce42-de0f-475e-90da-181d3a64a3c3";
      window.callbellSettings["script_token"] = "EzQWxt8Usz9ZjVijw98zwWZ6";

      if (!document.getElementById("callbell-script")) {
        const script = document.createElement("script");
        script.id = "callbell-script";
        script.async = true;
        script.src = `https://dash.callbell.eu/include/livechat/${window.callbellSettings.script_token}/${window.callbellSettings.uuid}.js`;
        document.body.appendChild(script);
      }
    }
  }, []);

  return null;
};

export default Chatbot;
