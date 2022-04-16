import '../styles/HomeStyle.css';
import userIcon from '../assets/images/people-outline.svg';
import cashIcon from '../assets/images/cash-outline.svg';
import ataIcon from '../assets/images/reader-outline.svg';
import Navbar from "../assets/components/Navbar";

function HomePage(){
return(
    <>
    <title>Home</title>
    
    <body className="homePage">
        <Navbar/>
        <div className="homePage-body">
            <h1 className="title-welcome">Seja bem-vindo, Tijolinho!</h1>
            <div className="container-atalho">
                <div id="box-usuarios">
                    <img src={userIcon}></img>
                    <span>Administrar usuários</span>
                </div>
                <div id="box-caixinha">
                    <img src={cashIcon}></img>
                    <span>Caixinha</span>
                </div>
                <div id="box-ata">
                    <img src={ataIcon}></img>
                    <span>Adicionar Ata</span>
                </div>
            </div>
        </div>
    </body>
    </>
)
}

export default HomePage;