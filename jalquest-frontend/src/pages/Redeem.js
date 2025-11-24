import React, { useState } from "react";
import "./Redeem.css";

const Redeem = () => {
  const [boonds, setBoonds] = useState(100); // You can later fetch this from backend
  const rewards = [
    { name: "Eco-friendly Bottle", cost: 30 },
    { name: "JalQuest Badge", cost: 50 },
    { name: "Plant Sapling", cost: 60 },
    { name: "Digital Certificate", cost: 75 },
    { name: "Surprise Box", cost: 100 },
  ];

  const handleRedeem = (cost) => {
    if (boonds >= cost) {
      alert("Reward Redeemed!");
      setBoonds(boonds - cost);
    } else {
      alert("Not enough Boonds!");
    }
  };

  return (
    <div className="redeem-container">
      <h1>🎁 Redeem Your Rewards</h1>
      <p className="boonds-balance">Your Boonds: <strong>{boonds}</strong></p>
      <div className="reward-list">
        {rewards.map((reward, index) => (
          <div className="reward-card" key={index}>
            <h3>{reward.name}</h3>
            <p>{reward.cost} Boonds</p>
            <button
              onClick={() => handleRedeem(reward.cost)}
              disabled={boonds < reward.cost}
            >
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Redeem;
