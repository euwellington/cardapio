import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../css/catpizza.css';
import { Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import Item from '../../../components/item';
import ButtonCart from '../../../components/buttonCart';

const Pizza = () => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

    const [select, setSelect] = useState([]);
    const getInfoItem = (item) => {
        toggleOpen();
        setSelect(item);
    }

    const arr_pizza = [
        {
            id: 1,
            nome: 'pizza calabresa',
            preco: 18.99,
            img: 'https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_L.jpg',
            categoria: 'pizza',
            descricao: 'molho de tomate, calabresa, queijo, tomate, cebola e orégano'
        },
        {
            id: 2,
            nome: 'pizza mussarela',
            preco: 16.99,
            img: 'https://caldobom.com.br/uploads/2017/07/pizza-mussarela.jpg',
            categoria: 'pizza',
            descricao: 'molho de tomate, queijo, tomate, cebola e orégano'
        },
        {
            id: 3,
            nome: 'pizza portuguesa',
            preco: 18.99,
            img: 'https://www.pizzatec.com.br/assets/uploads/images/2018/08/curiosidades-pizza-portuguesa.jpeg',
            categoria: 'pizza',
            descricao: 'molho de tomate, calabresa, queijo, ovo cuzido, tomate, cebola e orégano'
        },
        {
            id: 4,
            nome: 'pizza de frago',
            preco: 24.99,
            img: 'https://s2.glbimg.com/JXpit4TnOmCLL8jXiXlJJEtbRJk=/0x0:600x399/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/14/31/15/151/2607201005261284043239.jpg',
            categoria: 'pizza',
            descricao: 'molho de tomate, frango, queijo, ovo cuzido, tomate, cebola e orégano'
        },
        {
            id: 5,
            nome: 'pizza de camarão',
            preco: 26.99,
            img: 'https://www.portalsabores.com.br/wp-content/uploads/2019/01/www.portalsabores.com.br-rodizios-de-massas-em-fortaleza-pizza-de-camarao-do-pasto-pizzas.jpg',
            categoria: 'pizza',
            descricao: 'molho de tomate, calabresa, queijo, camaraõ, tomate, cebola e orégano'
        },
        {
            id: 6,
            nome: 'pizza de bacon',
            preco: 0.99,
            img: 'https://pizzariameurancho.com.br/wp-content/uploads/2019/11/chicken_bacon-1560x1170.jpg',
            categoria: 'pizza',
            descricao: 'molho de tomate, calabresa, queijo, camaraõ, tomate, bacon, cebola e orégano'
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Categoria: Pizza'
    }, []);

    return(
        <div>
            <div className={'catacai-header d-flex justify-content-between'}>
                <div className={'container'}>
                    <Link to={'/categoria'}>
                        <FaArrowLeft className={'arrow-back'} />
                    </Link>
                    <p className={'catacai-title'}>Veja o cardapio completo das nossa pizzas!</p>
                    <p className={'catacai-subtitle'}>
                        Temos diversos sabores que você pode da uma olhada e ver aquele que mais chamou sua atenção
                        e finalmente adicionar no carrinho e ver outras coisas pra acompanha com a sua pizza s2
                    </p>
                </div>
                <div>
                    <img alt={'acai-a'} src={'http://www.chocolatecombanana.com.br/wp-content/uploads/2017/04/pizza-redonda.png'} className={'cat-acai'} />
                </div>
            </div>

            <div className={'row d-flex justify-content-center box-result-pizza'}>
                {
                    arr_pizza.map((item, i) => (
                        <div className={'box-pizza'}>
                            <div className={'d-flex justify-content-center'}>
                                <img alt={'acai-img'} src={item.img} className={'map-acai-img'} />
                            </div>
                            <div className={'d-flex justify-content-center'}>
                                <div>
                                    <p className={'cat-acai-nome'}>{item.nome}</p>
                                    <p className={'cat-acai-desc'}>{item.descricao}</p>
                                    <div className={'d-flex justify-content-center'}>
                                        <button onClick={() => getInfoItem(item)} className={'shadow-none'} id={'btn-info'}>
                                            Ver detalhes
                                        </button>
                                    </div>
                                </div>
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

export default Pizza;