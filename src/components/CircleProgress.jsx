import React from "react";

const CircleProgress = ({ value }) => {
  const radius = 22;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  // Chọn màu dựa vào giá trị
  const progressColor =
    value <= 30 ? "#dc2626" : value <= 70 ? "#facc15" : "#16a34a";
  const progressColorBorder =
    value <= 30 ? "#E89090" : value <= 70 ? "#E8D27A" : "#98F3B9";

  return (
    <div className="relative h-16 w-16 ml-[-10px] ">
      <svg width="64" height="64" viewBox="0 0 64 64">
        {/* Nền vòng tròn */}
        <circle cx="32" cy="32" r={radius + strokeWidth} fill="black" />
        {/* Vòng tròn nền mờ */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke={progressColorBorder}
          strokeWidth={strokeWidth}
          opacity="0.3"
        />
        {/* Vòng tròn tiến trình với màu động */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 32 32)"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>

      {/* Nền đen bo tròn chứa số */}
      <div className="absolute inset-0 mx-auto my-auto flex h-10 w-10 items-center justify-center rounded-full bg-black shadow-lg">
        <p className="text-lg font-bold text-white">
          {value}
          <span className="text-sm text-gray-300">
            <sup>%</sup>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CircleProgress;
