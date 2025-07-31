import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AnimatedMap() {
  const [activeRoute, setActiveRoute] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoute((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const routes = [
    {
      path: "M50,200 Q200,50 350,150 T650,200",
      color: "#ff6b35",
      cities: [
        { x: 50, y: 200, name: "Москва" },
        { x: 350, y: 150, name: "Казань" },
        { x: 650, y: 200, name: "Екатеринбург" }
      ]
    },
    {
      path: "M100,300 Q300,100 500,250 T800,180",
      color: "#22c55e",
      cities: [
        { x: 100, y: 300, name: "СПб" },
        { x: 500, y: 250, name: "Нижний Новгород" },
        { x: 800, y: 180, name: "Пермь" }
      ]
    },
    {
      path: "M150,350 Q400,200 600,100 T850,250",
      color: "#3b82f6",
      cities: [
        { x: 150, y: 350, name: "Воронеж" },
        { x: 600, y: 100, name: "Самара" },
        { x: 850, y: 250, name: "Уфа" }
      ]
    }
  ];

  return (
    <div className="relative w-full h-[400px] tech-grid rounded-2xl overflow-hidden">
      <svg
        viewBox="0 0 900 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Сетка координат */}
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,107,53,0.1)" strokeWidth="1"/>
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Маршруты */}
        {routes.map((route, index) => (
          <g key={index}>
            <motion.path
              d={route.path}
              stroke={route.color}
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              className="route-line"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ 
                pathLength: activeRoute === index ? 1 : 0.3,
                opacity: activeRoute === index ? 1 : 0.3
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Города */}
            {route.cities.map((city, cityIndex) => (
              <g key={cityIndex}>
                <motion.circle
                  cx={city.x}
                  cy={city.y}
                  r="6"
                  fill={route.color}
                  className="pulse-dot"
                  animate={{ 
                    scale: activeRoute === index ? [1, 1.3, 1] : 1,
                    opacity: activeRoute === index ? [1, 0.7, 1] : 0.6
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.text
                  x={city.x}
                  y={city.y - 15}
                  textAnchor="middle"
                  className="text-xs font-medium"
                  fill="white"
                  animate={{ opacity: activeRoute === index ? 1 : 0.6 }}
                >
                  {city.name}
                </motion.text>
              </g>
            ))}
            
            {/* Движущиеся грузовики */}
            {activeRoute === index && (
              <motion.g
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: `path('${route.path}')` }}
              >
                <rect
                  x="-8"
                  y="-4"
                  width="16"
                  height="8"
                  fill={route.color}
                  rx="2"
                  filter="url(#glow)"
                />
              </motion.g>
            )}
          </g>
        ))}
        
        {/* Индикаторы ГЛОНАСС */}
        <motion.circle
          cx="80"
          cy="80"
          r="40"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <text x="80" y="85" textAnchor="middle" className="text-xs font-bold" fill="#22c55e">
          ГЛОНАСС
        </text>
      </svg>
      
      {/* Индикаторы маршрутов */}
      <div className="absolute bottom-4 left-4 flex space-x-2">
        {routes.map((route, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full cursor-pointer"
            style={{ backgroundColor: route.color }}
            animate={{ 
              scale: activeRoute === index ? 1.5 : 1,
              opacity: activeRoute === index ? 1 : 0.5
            }}
            onClick={() => setActiveRoute(index)}
          />
        ))}
      </div>
    </div>
  );
}