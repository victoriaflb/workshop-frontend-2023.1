import { BarraNav } from "../../components/barraNav/barraNav";
import './inicio.css';

export function Inicio() {
    return (
        <div>
            <BarraNav />
            <div className="containerInicio">
                <div className="containerCuriosidades">
                    <h2>Curiosidades:</h2>
                    <ol>
                        <li>Justin Roiland fica bêbado para interpretar Rick</li>
                        <li>A música tema seria para outra série</li>
                        <li>Os arrotos de Rick surgiram por acidente</li>
                        <li>O episódio piloto foi escrito em 6 horas</li>
                        <li>Começou como uma Paródia</li>
                    </ol>
                </div>
            </div>
        </div>

    )
}