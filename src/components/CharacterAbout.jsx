import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Typography } from "@mui/material";

const CharacteAbout = () => {
    const {id} = useParams()
    const [item, setItem] = useState()
    
    const url = window.location.href

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=5c093022c13aeef25d15eacbbd70ecc4&hash=2ca87d599e807a835b50c23e6bb850c5`)
            setItem(res.data.data.results[0])
        }
        fetch()
    }, [])

    return (
        <div className="about-character">
            <div className="character-container">
                {
                    (!item)? <Bars
                    height="80"
                    width="80"
                    color="#f00"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />:(
                        <div className="character">
                            <div className="character-image">
                                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="character" />
                            </div>
                            <div className="character-description">
                                <Typography variant="h4">{item.name}</Typography>
                                <Typography variant="h5">{(!item.description)?"Not have":item.description}</Typography>
                                <div className="character-buttons">
                                    <Link to={'/'}>To Back</Link>
                                    <CopyToClipboard text={url}>
                                        <a>Copy link for share</a>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default CharacteAbout;