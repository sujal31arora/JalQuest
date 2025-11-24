import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const TaskCapture = () => {
  const webcamRef = useRef(null);
  const [beforePhoto, setBeforePhoto] = useState(null);
  const [afterPhoto, setAfterPhoto] = useState(null);

  const capturePhoto = (type) => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (type === "before") {
      setBeforePhoto(imageSrc);
    } else {
      setAfterPhoto(imageSrc);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Capture Task Photos 📸</h2>
      <Webcam ref={webcamRef} screenshotFormat="image/png" style={styles.webcam} />
      
      <div style={styles.buttons}>
        <button onClick={() => capturePhoto("before")}>Capture Before Photo</button>
        <button onClick={() => capturePhoto("after")}>Capture After Photo</button>
      </div>

      <div style={styles.photos}>
        {beforePhoto && <img src={beforePhoto} alt="Before Task" style={styles.image} />}
        {afterPhoto && <img src={afterPhoto} alt="After Task" style={styles.image} />}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  webcam: { width: "100%", maxWidth: "400px", borderRadius: "10px" },
  buttons: { margin: "10px" },
  photos: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" },
  image: { width: "150px", borderRadius: "10px", border: "2px solid black" },
};

export default TaskCapture;
