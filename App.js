import React, { useState } from 'react';


function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color }}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick={() => setColor("red")} 
            className="outline-none px-4
             bg-red-700 rounded-full
             text-white shadow-lg">Red</button>
               <button
               onClick={() => setColor("green")} 
               className="outline-none px-4
             bg-green-700 rounded-full
             text-white shadow-lg">green</button>
               <button
               onClick={() => setColor("blue")}
                className="outline-none px-4
             bg-blue-700 rounded-full
             text-white shadow-lg">blue</button>
               <button
               onClick={() => setColor("yellow")}
                className="outline-none px-4
             bg-yellow-700 rounded-full
             text-white shadow-lg">yellow</button>
               <button 
               onClick={() => setColor("black")}
               className="outline-none px-4
             bg-black rounded-full
             text-white shadow-lg">black</button>
               <button 
               onClick={() => setColor("skyblue")}
               className="outline-none px-4
             bg-sky-500 rounded-full
             text-white shadow-lg">sky</button>
               <button 
               onClick={() => setColor("purple")}
               className="outline-none px-4
             bg-purple-700 rounded-full
             text-white shadow-lg">purple</button>
               <button
               onClick={() => setColor("gray")} 
               className="outline-none px-4
             bg-gray-700 rounded-full
             text-white shadow-lg">gray</button>
               <button
               onClick={() => setColor("pink")} 
               className="outline-none px-4
             bg-pink-700 rounded-full
             text-white shadow-lg">pink</button>
          </div>
        </div>
    </div>
  );
}

export default App;
