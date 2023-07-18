"use client";
import React, { useState } from "react";
import TopBar from "@/components/TopBarInicio/TopBarInicio";
import styles from "../App/page.module.css";
import Footer from "@/components/Footer/Footer";
import Inicio from "@/components/Inicio/inicio.jsx" //cambio

const PageInicio = () => {
  Inicio("/")
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
