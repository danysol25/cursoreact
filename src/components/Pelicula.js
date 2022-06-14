import React, { Component } from "react";

class Pelicula extends Component {
    render() {
        const { titulo, imagen } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={imagen} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                
                <div className="clearfix"></div>
            </article>

        );
    }

}

export default Pelicula;