import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const items = [
  { name: "ITHEUM" },
  { name: "TALUS" },
  { name: "ONE" },
  { name: "decrypt" },
  { name: "Tradeport" },
  { name: "Linera" },
];


// Triple the array to ensure smooth looping
const loopedItems = [...items, ...items, ...items, ...items, ...items];

const Info = () => {
        const [scrollDirection, setScrollDirection] = useState(1); // 1 for down (left), -1 for up (right)
        const [lastScrollY, setLastScrollY] = useState(0);

        useEffect(() => {
          const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY) {
              // Scrolling down - move right to left (negative x)
              setScrollDirection(-1);
            } else if (currentScrollY < lastScrollY) {
              // Scrolling up - move left to right (positive x)
              setScrollDirection(1);
            }
            
            setLastScrollY(currentScrollY);
          };

          window.addEventListener('scroll', handleScroll);
          
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [lastScrollY]);

     return (
          <div>
            <div style={{ 
              overflow: "hidden", 
              width: "100%", 
              height: "100px", 
              display: "flex", 
              border: "solid 0.5px black",
              
            }}>
              <motion.div
                style={{
                  display: "flex",
                  width: "max-content",
                }}
                animate={{ 
                  x: scrollDirection === -1 
                    ? [0, -((items.length * 190))]  // Scroll down: right to left
                    : [-((items.length * 190)), 0]  // Scroll up: left to right
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear"
                  }
                }}
              >
                {loopedItems.map((item, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      minWidth: "100px",
                      display: "flex", 
                      justifyContent: "center", 
                      alignItems: "center"
                    }}
                  >
                    <div className="h-[120px] w-[150px] sm:w-[220px]  flex justify-center 
                    items-center border-[#ac9797] border mx-1 hover:bg-black hover:text-white font  " 
                    
                    >
                      <div>
                        <p className="text-[1.2rem] sm:text-[2rem] text-center font-serif">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
     )
}

export default Info