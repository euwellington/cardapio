import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../css/catdrink.css';
import { Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import Item from '../../../components/item';
import ButtonCart from '../../../components/buttonCart';

const Drink = () => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

    const [select, setSelect] = useState([]);
    const getInfoItem = (item) => {
        toggleOpen();
        setSelect(item);
    }

    const arr_bebidas = [
        {
            id: 1,
            nome: 'coca-cola 2L',
            preco: 7.99,
            descricao: 'Coca cola de 2 litros que pode ser servidor para 8 pessoas',
            img: 'https://i.pinimg.com/originals/34/4c/40/344c40a89ada3cef7de9eef6ba968c15.png',
            categoria: 'drinks',
        },
        {
            id: 2,
            nome: 'coca-cola 1L',
            preco: 4.99,
            descricao: 'Coca cola de 1 litros que pode ser servidor para 5 pessoas',
            img: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/136/636/products/7894900011609-7254d932b537220e6815921738882437-640-0.png',
            categoria: 'drinks',
        },
        {
            id: 3,
            nome: 'Pepsi 2L',
            preco: 7.99,
            descricao: 'Pepsi de 2 litros que pode ser servidor para 8 pessoas',
            img: 'https://trimais.vteximg.com.br/arquivos/ids/1003063-1000-1000/foto_original.jpg?v=637395796211470000',
            categoria: 'drinks',
        },
        {
            id: 4,
            nome: 'pepsi 1L',
            preco: 7.99,
            descricao: 'Pepsi de 1 litros que pode ser servidor para 5 pessoas',
            img: 'https://superprix.vteximg.com.br/arquivos/ids/178994-600-600/Refrig-Pepsi-Tradicional-1l-803332.png?v=636936091614070000',
            categoria: 'drinks',
        },
        {
            id: 5,
            nome: 'guarana 2L',
            preco: 5.99,
            descricao: 'Guaraná de 2 litros que pode ser servidor para 8 pessoas',
            img: 'https://trimais.vteximg.com.br/arquivos/ids/1003030-310-310/foto_original.jpg?v=637395796156430000',
            categoria: 'drinks',
        },
        {
            id: 6,
            nome: 'guarana 1L',
            preco: 7.99,
            descricao: 'Guaraná de 1 litros que pode ser servidor para 5 pessoas',
            img: 'https://catalogoambev.com.br/images/uploads/artes-finais/388e09f5f9e2f8b2b4149067cc0f2bce.png',
            categoria: 'drinks',
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Categoria: Bebidas'
    }, []);

    return(
        <div>
            <div className={'catacai-header d-flex justify-content-between'}>
                <div className={'container'}>
                    <Link to={'/categoria'}>
                        <FaArrowLeft className={'arrow-back'} />
                    </Link>
                    <p className={'catacai-title'}>Veja o cardapio completo de nossas bebidas!</p>
                    <p className={'catacai-subtitle'}>
                        Temos diversos sabores de refiregrantes pra voçê escolher a sua preferida!!!!
                    </p>
                </div>
                <div>
                    <img alt={'acai-a'} src={'https://www.cocacolauberlandia.com.br/wp-content/uploads/2020/06/refrigerante.png'} className={'cat-refri'} />
                </div>
            </div>

            <div className={'row d-flex justify-content-center box-result-pizza'}>
                {
                    arr_bebidas.map((item, i) => (
                        <div className={'box-pizza'}>
                            <div className={'d-flex justify-content-center'}>
                                <img alt={'acai-img'} src={item.img} className={'map-acai-img'} />
                            </div>
                            <p className={'cat-acai-nome'}>{item.nome}</p>
                            <p className={'cat-acai-desc'}>{item.descricao}</p>
                            <div className={'d-flex justify-content-center'}>
                                <button onClick={() => getInfoItem(item)} className={'shadow-none'} id={'btn-info'}>
                                    Ver detalhes
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* DRAWER INFO */}
            <Drawer open={open} onClose={toggleOpen} anchor={'right'}>
                <Item item={select} close={toggleOpen} />
            </Drawer>
            <div className={'baf'}>
                <ButtonCart/>
            </div>
        </div>
    );
}

export default Drink;