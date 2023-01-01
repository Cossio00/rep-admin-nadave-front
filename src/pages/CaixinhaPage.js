import Navbar from "../assets/components/Navbar";
import '../styles/CaixinhaStyle.css';
import Select from 'react-select';
import api from '../services/api';
import { useEffect, useState } from "react";

function CaixinhaPage(){

    const [moradores, setMoradores] = useState();
    const [apelidos, setApelidos] = useState();
    const [operations, setOperations] = useState();
    const [idMoradorSelecionado, setMoradorSelecionado] = useState(1);


    function changeMorador(event){
        console.log(event)
        setMoradorSelecionado(event.id)
    }

    const loadMoradores = async() => await api.get('users')
        .then(response => {
            setMoradores(response.data)
            let apelidoMorador = response.data.map(function(apelido){
                let apelidoData = {id: apelido['userid'], value: apelido['username'], label: apelido['usernickname']}
                return apelidoData
            })
            setApelidos(apelidoMorador)
        })
        .catch(err => console.log(err))
    
    const loadOperations = async() =>
        await api.get(`operations/${idMoradorSelecionado}`)
        .then(response =>{
            setOperations(response.data)
        })
        .catch(err => console.log(err))
    
        
    useEffect(() =>{
        loadOperations();
    }, [idMoradorSelecionado]);

    useEffect(() =>{
        loadMoradores();
    },[]);

    const tabelaVazia = (
        <><tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </>
    )

    return(
        <>
        <title>Caixinha</title>
        
        <body className="caixinhaPage">
            <Navbar/>
            <div className="caixinhaPage-body">
                <h1>Caixinha</h1>
                <Select id="select-moradores" options={apelidos} onChange={changeMorador}/>
                <tbody>
                        <thead>
                            <td>Descrição</td>
                            <td>Data</td>
                            <td>Valor</td>
                            <td>Saldo</td>
                        </thead>
                    <div className="table-operations">{operations === undefined ? tabelaVazia : operations.map( p =>(
                        <tr>
                            <td>{p['operationdescription']}</td>
                            <td>{p['operationdate']}</td>
                            <td>{p['operationvalue']}</td>
                            <td>{p['operationfinalbalance']}</td>
                        </tr>
                    ))}
                    </div>
                </tbody>
            </div>
        </body>
        </>
    );
}

export default CaixinhaPage;    