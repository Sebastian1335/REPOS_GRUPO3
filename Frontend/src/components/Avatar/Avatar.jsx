"use client";
import { useRef, useState, useEffect } from "react";
import { Box, Modal, Slider, Button } from "@mui/material";
import AvatarEditor from "react-avatar-editor";
import styles from "../Avatar/Avatar.module.css";

const boxStyle = {
  width: "300px",
  height: "300px",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const CropperModal = ({ src, modalOpen, setModalOpen, setPreview }) => {
  const [slideValue, setSlideValue] = useState(10);
  const cropRef = useRef(null);

  const handleSave = async () => {
    if (cropRef.current) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setPreview(URL.createObjectURL(blob));
      setModalOpen(false);
    }
  };

  return (
    <Modal sx={modalStyle} open={modalOpen}>
      <Box sx={boxStyle}>
        <AvatarEditor
          ref={cropRef}
          image={src}
          style={{ width: "100%", height: "100%" }}
          border={50}
          borderRadius={150}
          color={[0, 0, 0, 0.72]}
          scale={slideValue / 10}
          rotate={0}
        />

        <Slider
          min={10}
          max={50}
          sx={{
            margin: "0 auto",
            width: "80%",
            color: "cyan",
          }}
          size="medium"
          defaultValue={slideValue}
          value={slideValue}
          onChange={(e) => setSlideValue(e.target.value)}
        />

        <Box
          sx={{
            display: "flex",
            padding: "10px",
            border: "3px solid white",
            background: "black",
          }}
        >
          <Button
            size="small"
            sx={{
              marginRight: "10px",
              color: "white",
              borderColor: "white",
            }}
            variant="outlined"
            onClick={(e) => setModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            sx={{ background: "#5596e6" }}
            size="small"
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const Cropper = () => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setSrc(URL.createObjectURL(file));
    setModalOpen(true);
  };

  useEffect(() => {
    const storedSrc = localStorage.getItem("cropperSrc");
    if (storedSrc) {
      setSrc(storedSrc);
      setPreview(storedSrc);
    }
  }, []);

  useEffect(() => {
    if (src) {
      localStorage.setItem("cropperSrc", src);
    }
  }, [src]);

  return (
    <>
      <main className={styles.container}>
        <CropperModal
          modalOpen={modalOpen}
          src={src}
          setPreview={setPreview}
          setModalOpen={setModalOpen}
        />
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImgChange}
        />
        <div className={styles.imgContainer}>
          <img
            src={
              preview || "https://cdn-icons-png.flaticon.com/512/727/727399.png"
            }
            alt=""
            width="200"
            height="200"
          />
        </div>
        <a href="/" onClick={handleInputClick}>
          Adjuntar Imagen
        </a>
      </main>
    </>
  );
};

export default Cropper;
