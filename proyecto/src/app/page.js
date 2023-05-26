"use client";
import React, { useState } from "react";
import TopBar from "@/components/TopBarInicio/TopBarInicio";
import styles from "../App/page.module.css";
import Footer from "@/components/Footer/Footer";

const PageInicio = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div className={styles.fondo}>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PageInicio;
