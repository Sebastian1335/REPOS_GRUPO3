"use client"
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import 'bootstrap/dist/js/bootstrap.bundle.js' ;

import './globals.css'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import TopBar from "@/components/TopBar/TopBar.jsx";
import Menu from "@/components/Menu/Menu.jsx";
import styles from "@/app/page.module.css";

const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }) {
  
  //Mostrar Menu
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function aparecerMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  let barraLateral;
  if (menuIsVisible) {
    barraLateral = <Menu />;
  }

  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        {window.localStorage.getItem("rol") == null || window.localStorage.getItem("rol") == ""?
          children
        :
          <div>
            <TopBar onButtonClick={aparecerMenu}></TopBar>
            <div className={styles.Main}>
              <div className={styles.Info}>
                {children}
              </div>
              <div className={styles.Menu}>{barraLateral}</div>
            </div>
        </div>
        }
      </body>
    </html>
  )
}

export default dynamic(() => Promise.resolve(RootLayout), {
  ssr: false,
});