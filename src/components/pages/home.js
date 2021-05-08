import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../navbar';



export default function Home(){
    const searchInput = useRef();
    const [search, setSearch] = useState();
    const [searching, setSearching] = useState(false);
    const [movie, setMovie] = useState({});
    const [result, setResult] = useState([]);



    return(
        <>
            <Navbar />
        </>
    )
}

