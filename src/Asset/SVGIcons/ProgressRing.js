import React from "react";

export default function ProgressRing({ progress, ...props }) {
    const radius = 34;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress / 100);

    return (
        <svg {...props} viewBox="0 0 80 80" className="spinner-ring">
            <circle className="ring-bg" cx="40" cy="40" r={radius} />
            <circle
                className="ring-progress"
                cx="40"
                cy="40"
                r={radius}
                style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: strokeDashoffset,
                }}
            />
        </svg>
    );
}