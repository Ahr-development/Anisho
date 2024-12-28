// layout.js
import ReduxProvider from "@/data/ReduxProvider";
import { wrapper } from "@/data/Store/Store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
      <Toaster/>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
};

