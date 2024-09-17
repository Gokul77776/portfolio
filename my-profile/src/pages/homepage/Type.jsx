import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ fontSize: '2rem' }}>  
      <Typewriter
        options={{
          strings: [
            "Gokul.c",
        
            "MERN Stack Developer",
            
            
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
