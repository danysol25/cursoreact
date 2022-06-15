import React, { Component } from "react";
import Pelicula from "./Pelicula";


class Peliculas extends Component {
    state = {
        peliculas: [
            { titulo: 'Batman', image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/03/batman-2639953.jpg?itok=3PWK0xoH' },
            { titulo: 'Sailormoon', image: 'https://img.netzwelt.de/dw1200_dh900_sw1440_sh1080_sx240_sy0_sr4x3_nu2/picture/original/2020/09/sailor-moon-maedchen-zauberkraeften-erhaelt-schulmaedchen-bunny-tsukino-magische-kraefte-kaempft-fortan-gegen-boese-liebe-gerechtigkeit-285002.jpeg' },
            { titulo: 'Dragon Ball Z', image: 'https://static.bandainamcoent.eu/high/dragon-ball/dragonball-project-z/00-page-setup/dbzk_game-thumbnail.jpg' }
        ],
        nombre: 'DanySol',
        favorita: {}
    };

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        var random = Math.floor(Math.random() * 3);
        peliculas[random].titulo = "Nombre cambiado";
        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula) => {
        console.log("marcar fav");
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        });

    }

    render() {
        return (
            <div id="content" className="peliculas">

                <h2 className="subheader">Peliculas</h2>
                <p>Selección de peliculas de {this.state.nombre}</p>
                <div>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar título
                    </button>
                </div>
                {
                this.state.favorita.titulo &&
                <p className="favorita">
                    <strong>Pelicula favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
                }

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Peliculas;