import React, { useEffect, useState } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    // Replace this later with Axios call to backend
    const dummyData = [
      { name: "Devansh", boonds: 92 },
      { name: "Vaibhav", boonds: 85 },
      { name: "Sameer", boonds: 74 },
      { name: "Harshita", boonds: 60 },
      { name: "example", boonds: 49 },
    ];
    setLeaders(dummyData.sort((a, b) => b.boonds - a.boonds));
  }, []);

  return (
    <div className="leaderboard-container">
      <h1>🏆 Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Boonds</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((user, index) => (
            <tr key={index}>
              <td>#{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.boonds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
