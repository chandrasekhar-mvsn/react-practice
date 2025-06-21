import { useState, useMemo, useRef } from "react";
import { findNthPrime } from "../../utils/helper";
const Demo = () => {
  const [txt, setText] = useState(0);
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // Expensive calculation to find the nth prime number
  // const primeNumber = findNthPrime(txt);
  // Using useMemo to memoize the result of the expensive calculation
  // This will only recompute the nth prime number when txt changes
  // Using useMemo to optimize performance by memoizing the result
  const primeNumber = useMemo(() => findNthPrime(txt), [txt]);
return (
    <div
        className={`flex flex-col md:flex-row justify-center items-start gap-8 min-h-screen ${
            isDarkTheme ? "bg-gray-800" : "bg-gray-100"
        }`}
    >
        <div
            className={`flex-1 max-w-md p-6 rounded-lg shadow-md ${
                isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
        >
            <button
                className="mb-4 px-4 py-2 rounded bg-blue-950 text-white hover:bg-blue-600 transition"
                onClick={() => setIsDarkTheme((prev) => !prev)}
            >
                Toggle {isDarkTheme ? "Light" : "Dark"} Theme
            </button>
            <h1 className="text-2xl font-bold mb-2">Demo1 Component</h1>
            <p className="mb-4">This is a simple demo for useMemo/useCallback.</p>
            <input
                name="input"
                type="number"
                value={txt}
                onChange={(e) => setText(e.target.value)}
                className={`border border-gray-400 rounded px-2 py-1 mb-4 ${
                    isDarkTheme ? "text-white" : "text-black"
                }`}
            />
            <div>
                <p>
                    The {txt}th prime number is: {primeNumber}
                </p>
            </div>
        </div>
        <div
            className={`flex-1 max-w-md p-6 rounded-lg shadow-md ${
                isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
        >
            <button
                className="mb-4 px-4 py-2 rounded bg-blue-950 text-white hover:bg-blue-600 transition"
                onClick={() => setIsDarkTheme((prev) => !prev)}
            >
                Toggle {isDarkTheme ? "Light" : "Dark"} Theme
            </button>
            <h1 className="text-2xl font-bold mb-2">Demo2 Component</h1>
            <p className="mb-4">This is a simple demo for useRef.</p>
            <p className="mb-4 flex items-center gap-2">
                <span>let x = {x}</span>
                <button className="text-blue-700 cursor-pointer" onClick={() => {
                    x+= 1;
                    console.log("x", x);
                    }}>Add</button>
            </p>
            <p className="mb-4 flex items-center gap-2">
                <span>useState x = {y}</span>
                <button className="text-blue-700 cursor-pointer" onClick={() =>{ 
                    const newY = y + 1;
                    setY(newY)
                    console.log("y", y);
                    }}>Add</button>
            </p>
            <p className="mb-4 flex items-center gap-2">
                <span>useRef z = {z.current}</span>
                <button className="text-blue-700 cursor-pointer" onClick={() => {z.current += 1
                    console.log("z.current", z.current);
                }}>Add</button>
            </p>
        </div>
    </div>
);
};
export default Demo;
