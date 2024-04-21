import "./Login.css"
import InputLogin from "../../components/InputLogin/InputLogin"
import Link from "../../components/link/Link"

export default function Login(){

    return (
        <div className="bgLogin">
            <div className="login">
                <div className="th3">
                    <h3>BEM-VINDO AO POLO DE SANTO ANDRÉ</h3>
                </div>
                <div>
                    <InputLogin label="Usuário" type="text" placeholder="" id="user"/>
                    <InputLogin label="Senha" type="text" placeholder="" id="senha" />
                    
                    <div className="btlogin">
                        <button>LOGIN</button>
                    </div>
                    <div className="plogin">
                        <p>Não tem uma conta?&nbsp; <Link label="Cadastre-se"/></p>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}