import { useState , useEffect} from "react"
import axios from "axios"
import CopyToClipboard from "react-copy-to-clipboard"

const ShortLink = ({inputValue}) =>{
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () =>{
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() =>{
        if(inputValue.length) {
            fetchData();
        }
    }, [inputValue]);
    useEffect(() => {
        const timer =setTimeout(() => {
            setCopied(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, [copied])

    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error</p>
    }

    return(
        <>
            
            {shortenLink && (
                <div>
                    <p>{shortenLink}</p>
                    <CopyToClipboard
                        text={shortenLink}
                        onCopy={() => setCopied(true)}
                    >
                        <button>Copy</button>
                    </CopyToClipboard>
                </div>
            )}
           
        </>
    )
   
}

export default ShortLink