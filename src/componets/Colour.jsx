import { useState } from "react";
import colors from "../data";


export default function Colour() {
    const [Colours, setColours] = useState(
        colors[Math.floor(Math.random() * colors.length)]
    );
        
    
    return(
            <div style={{backgroundColor: Colours}} className="block" onClick={() => {
                setColours(colors[Math.floor(Math.random() * colors.length)]);
            }} >
            </div>
    )
}