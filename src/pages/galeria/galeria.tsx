import { useEffect, useState } from "react";
import { BarraNav } from "../../components/barraNav/barraNav";
import "./galeria.css";

interface character {
    name: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    image: string;
}

export function Galeria() {
    const [consulta, setConsulta] = useState<character[]>([]);

    useEffect(() => {
        consumo()
    }, [consulta]);

    const consumo = async () => {
        let api = "https://rickandmortyapi.com/api/character";

        const request = await fetch(api);
        const resultRequest = await request.json();
        const resultInformations = await resultRequest.results;
        const retorno = await setConsulta(resultInformations);
    };

    return (
        <div>
            <BarraNav />
            <div className="containerGaleria">
                <h1 className="title">GALERIA</h1>
                <div className="content">
                    <div className="row">
                        {consulta.map((data, index) => (
                            <div key={index} className="cards">
                                <img src={data.image} alt={data.name} />
                                <div>
                                    <h2 key={data.name}>Nome: {data.name}</h2>
                                    <h2 key={data.status}>Status: {data.status}</h2>
                                    <h2 key={data.species}>Espécie: {data.species}</h2>
                                    <h2 key={data.gender}>Gênero: {data.gender}</h2>
                                    <h2 className="tipo" key={data.type}>Tipo: {data.type}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
