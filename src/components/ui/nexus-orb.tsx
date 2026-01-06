"use client";
import React, { useState } from "react";
import { SiSupabase, SiNextdotjs, SiTailwindcss, SiStripe, SiReact, SiTypescript } from "react-icons/si";

export default function NexusOrb() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const icons = [
    { id: 1, icon: SiNextdotjs, color: "#ffffff" },
    { id: 2, icon: SiSupabase, color: "#3FCF8E" },
    { id: 3, icon: SiTailwindcss, color: "#06B6D4" },
    { id: 4, icon: SiStripe, color: "#635BFF" },
    { id: 5, icon: SiReact, color: "#61DAFB" },
    { id: 6, icon: SiTypescript, color: "#3178C6" },
  ];

  const SIZE = 450;
  const CENTER = SIZE / 2;
  const RADIUS = 170;

  // Pre-calculate all positions (6 icons = 60 degrees apart)
  const getPosition = (index: number) => {
    const angle = ((index * 60) - 90) * (Math.PI / 180);
    return {
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle),
      lineEndX: CENTER + 135 * Math.cos(angle),
      lineEndY: CENTER + 135 * Math.sin(angle),
      lineStartX: CENTER + 50 * Math.cos(angle),
      lineStartY: CENTER + 50 * Math.sin(angle),
    };
  };

  return (
    <div
      style={{
        position: "relative",
        width: SIZE,
        height: SIZE,
        flexShrink: 0,
      }}
    >
      {/* Keyframe animations */}
      <style>{`
        @keyframes nexus-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        @keyframes nexus-glow {
          0%, 100% { box-shadow: 0 0 20px 0px rgba(6, 182, 212, 0.4); }
          50% { box-shadow: 0 0 40px 8px rgba(6, 182, 212, 0.2); }
        }
      `}</style>

      {/* SVG Lines */}
      <svg
        width={SIZE}
        height={SIZE}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        {icons.map((item, i) => {
          const pos = getPosition(i);
          return (
            <line
              key={item.id}
              x1={pos.lineStartX}
              y1={pos.lineStartY}
              x2={pos.lineEndX}
              y2={pos.lineEndY}
              stroke={hoveredId === item.id ? "#06b6d4" : "#334155"}
              strokeWidth="1.5"
              style={{
                opacity: hoveredId === item.id ? 1 : 0.5,
                transition: "all 0.3s ease",
              }}
            />
          );
        })}
      </svg>

      {/* Center Icon */}
      <div
        style={{
          position: "absolute",
          top: CENTER,
          left: CENTER,
          transform: "translate(-50%, -50%)",
          width: 100,
          height: 100,
          borderRadius: 20,
          backgroundColor: "rgba(30, 41, 59, 0.8)",
          border: "1px solid rgba(6, 182, 212, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 20,
          animation: "nexus-glow 3s ease-in-out infinite",
        }}
      >
        <img src="/Agentronix-Icon.png" alt="Agentronix" style={{ width: 60, height: 60, objectFit: "contain" }} />
      </div>

      {/* Orbiting Icons */}
      {icons.map((item, i) => {
        const pos = getPosition(i);
        const Icon = item.icon;
        const isHovered = hoveredId === item.id;

        return (
          <div
            key={item.id}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              animation: isHovered ? "none" : `nexus-float 4s ease-in-out infinite`,
              animationDelay: `${i * 0.25}s`,
            }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor: isHovered ? "rgba(51, 65, 85, 0.8)" : "rgba(30, 41, 59, 0.5)",
                border: isHovered ? "1px solid rgba(6, 182, 212, 0.6)" : "1px solid rgba(71, 85, 105, 0.5)",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                boxShadow: isHovered ? "0 10px 25px -5px rgba(6, 182, 212, 0.2)" : "none",
              }}
            >
              <Icon
                style={{
                  width: 28,
                  height: 28,
                  color: isHovered ? item.color : "#94a3b8",
                  transition: "color 0.3s ease",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
