import { useState } from "react"

const InputShort = ({setInputValue}) =>{
    const [value, setValue] = useState("");
    const handleClick = () =>{
        setInputValue(value);
    }

    return (
        <div>
            <div>
                <h2>Link Shortener</h2>
                <span >Enter a Link: </span>
                <input 
                    type="text" 
                    placeholder="Example.com" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button onClick={handleClick} >Short</button>
            </div>
            <div className="domain">
                <span>Short domain: </span>
                <span>shrtco.de   </span>
                <span>9qr.de   </span>
                <span>shiny.link   </span>
                
            </div>
            <div>
                <p>With this free Link Shortener you can make Links shortener and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link.</p>
            </div>
        </div>
    )
}

export default InputShort