"use client";
import React, { useState } from "react";
import TopBar from "@/components/TopBarInicio/TopBarInicio";
import styles from "../App/page.module.css";

const PageInicio = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div className={styles.fondo}>
      </div>
    </div>
  );
};

export default PageInicio;
