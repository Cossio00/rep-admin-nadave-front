import { useEffect, useState } from "react";
import Navbar from "../assets/components/Navbar";
import '../styles/UserStyle.css';
import api from "../services/api";

function UsersPage(){

    const [moradores, setMoradores] = useState();

    const loadMoradores = async() => await api.get('users')
        .then(response => {
            setMoradores(response.data)
        })
        .catch(err => console.log(err))

    useEffect(()=>{
        loadMoradores()
    }, [])

    return(
        <>
        <title>Usuários</title>

        <body className="userPage">
            <Navbar/>
            <div className="userPage-body">
                <h1>Usuários</h1>    
            </div>
        </body>
        </>
    )

}

export default UsersPage;
