import React from 'react';
import '../../css/footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
                

const Footer = () => {
    return(
        <div className={'footer'}>
            <div className={'container footer-box d-flex justify-content-between'}>
                <div>
                    <img alt={'logo-footer'} src={logo} className={'logo-footer'} />
                </div>
                <div>
                    <p  className={'item-title-footer'}>
                        Navegação
                    </p>
                    <div>
                        <Link to={'/'} className={'item-footer'}>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link to={'/menu'} className={'item-footer'}>
                            Menu
                        </Link>
                    </div>
                    <div>
                        <Link to={'/categoria'} className={'item-footer'}>
                            Categoria
                        </Link>
                    </div>
                    <Link to={'/contato'} className={'item-footer'}>
                        Contato
                    </Link>
                </div>
            </div>
            <p className={'dev'}>
                site desenvolvido por Wellington Felipe
            </p>
        </div>
    );
}

export default Footer;