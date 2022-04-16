import Navbar from "../assets/components/Navbar";
import '../styles/CaixinhaStyle.css';
import Select from 'react-select';


function CaixinhaPage(){

    const moradoresEBixos = [
        { value: 'caixinha', label: 'Caixinha' },
        { value: 'lakraya', label: 'Lakraya' },
        { value: '7x1', label: '7x1' },
        { value: 'serumanin', label: 'Serumanin' },
        { value: 'tropeço', label: 'Tropeço' },
        { value: 'tijolinho', label: 'Tijolinho' },
        { value: 'diva-h', label: 'Diva-h' },
        { value: 'bixo blutufi', label: 'Bixo Blutufi' },
        { value: 'bixo robert', label: 'Bixo Robert' },
        { value: 'bixo daniel', label: 'Bixo Daniel' },
        { value: 'bixo andre', label: 'Bixo Andre' },
        { value: 'bixo draco', label: 'Bixo Draco'}
      ]

    


    return(
        <>
        <title>Caixinha</title>
        
        <body className="caixinhaPage">
            <Navbar/>
            <div className="caixinhaPage-body">
                <h1>Caixinha</h1>
                <Select options={moradoresEBixos} />
            </div>
        </body>
        </>
    );
}

export default CaixinhaPage;    