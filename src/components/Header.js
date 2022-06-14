import React, { Component } from "react";
import logo from '../assets/images/logo.svg';

class Header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <div className="center">
                        <div id="logo">
                            <img src={logo} alt="logo"/>
                            <span id="brand">
                                <strong>Curso</strong>React
                            </span>
                        </div>
                        <nav id="menu">
                            <ul>
                                <li>
                                    <a href="index.html">Inicio</a>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="form.html">Formulario</a>
                                </li>
                                <li>
                                    <a href="#">Página 1</a>
                                </li>
                                <li>
                                    <a href="#">Página 2</a>
                                </li>
                            </ul>

                        </nav>
                        <div classNameName="clearfix"></div>
                    </div>

                </header>
            </div>

        );
    }
}

export default Header;