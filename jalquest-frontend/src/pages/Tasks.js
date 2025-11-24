import React, { useState, useEffect } from "react";
import api from "../api/axios"; // Import Axios instance

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks"); // GET request
      console.log("Fetched tasks: ", response.data);//show in console
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Call fetchTasks when component loads
  }, []);

  const openCamera = async (taskId, type) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      const capture = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 640;
        canvas.height = 480;
        const context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        stream.getTracks().forEach((track) => track.stop());

        const capturedImage = canvas.toDataURL("image/png");
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, [type]: capturedImage } : task
          )
        );
      };

      setTimeout(capture, 2000); // Auto-captures after 2 seconds
    } catch (error) {
      alert("Camera access denied or unavailable!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Today's Tasks <span style={styles.tag}>Ongoing Development</span>
      </h1>
      <p style={styles.description}>
        Complete these tasks to earn Boonds and contribute to water conservation!
      </p>
      <div style={styles.taskList}>
        {tasks.length === 0 ? (
          <p>LOADING...</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} style={styles.taskCard}>
              <p style={styles.taskTitle}>{task.title}</p>
              <div style={styles.buttonGroup}>
                <button
                  style={styles.captureButton}
                  onClick={() => openCamera(task.id, "before")}
                >
                  📷 Capture Before
                </button>
                <button
                  style={styles.captureButton}
                  onClick={() => openCamera(task.id, "after")}
                  disabled={!task.before} // Enable after "Before" is captured
                >
                  📸 Capture After
                </button>
              </div>
              <div style={styles.imageContainer}>
                {task.before && (
                  <img src={task.before} alt="Before" style={styles.image} />
                )}
                {task.after && (
                  <img src={task.after} alt="After" style={styles.image} />
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#0077b6",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  tag: {
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    padding: "6px 14px",
    borderRadius: "20px",
    marginLeft: "12px",
    verticalAlign: "middle",
    boxShadow: "0 4px 12px rgba(37, 117, 252, 0.6)",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    transition: "transform 0.3s ease",
    cursor: "default",
  },
  taskList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  taskCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    width: "90%",
    maxWidth: "500px",
    textAlign: "center",
  },
  taskTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  captureButton: {
    backgroundColor: "#0077b6",
    color: "#fff",
    padding: "8px 15px",
    fontSize: "14px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "8px",
    border: "2px solid #0077b6",
  },
};

export default Tasks;
