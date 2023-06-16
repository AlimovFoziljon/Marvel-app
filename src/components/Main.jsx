import Card from "./CardItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import Logo from '../assets/Marvel_Logo.svg.png'

const Main = () => {

    const [url, setUrl] = useState('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5c093022c13aeef25d15eacbbd70ecc4&hash=2ca87d599e807a835b50c23e6bb850c5')
    const [item, setItem] = useState()
    const [search,setSearch]=useState("");

    useEffect(() => {
        const fetch = async () =>{
            const res = await axios.get(url)
            setItem(res.data.data.results)
        }
        fetch()
    }, [url])

    const searchMarvel=()=>{
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=5c093022c13aeef25d15eacbbd70ecc4&hash=2ca87d599e807a835b50c23e6bb850c5`)
    }
    

    return (
        <div className="main">
            <header>
                <img src={Logo} alt="logo" />
                <div className="search">
                    <input onChange={e=>setSearch(e.target.value)} type="text" className='search-bar' placeholder='Type your avenger'/>
                    <button onClick={searchMarvel}>Search</button>
                </div>
            </header>
            <div className="cards">
            {(!item)?<Bars
                        height="80"
                        width="80"
                        color="#f00"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />:<Card data={item}/>}
            </div>
        </div>
    );
}

export default Main;