import React, { useState, useEffect } from 'react';
import '../../css/cad.css';
import Menu from '../../components/menu';
import { FaTelegram } from 'react-icons/fa';
import { Drawer } from '@material-ui/core';
import Item from '../../components/item';
import ButtonCart from '../../components/buttonCart';
import { Link } from 'react-router-dom';


const MenuPage = () => {

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

    const arr_açai = [
        {
            id: 1,
            nome: 'açaí 500ml',
            preco: 5.99,
            descricao: 'Açaí de 500ml com banana, leite em pó e leito condensado',
            img: 'https://comidasenegocios.com.br/wp-content/uploads/2019/03/COMO-FAZER-A%C3%87A%C3%8D-PARA-VENDER-1-1024x1024.jpg',
            categoria: 'acai'
        },
        {
            id: 2,
            nome: 'açaí 600ml',
            preco: 8.99,
            descricao: 'Açaí de 500ml com banana, leite em pó e leito condensado',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn4iBBm4yBZCHHD5UbaIPyJzE4xctejEy8fHE9yJ9McKp66b4bsTlxRrXBOr-muUwlag&usqp=CAU',
            categoria: 'acai'
        },
        {
            id: 1,
            nome: 'açaí de frutas 500ml',
            preco: 8.99,
            descricao: 'Açaí de 500ml com banana, leite em pó, leito condensado e frutas: morango, uva, mangae goiaba',
            img: 'https://www.ovale.com.br/_midias/jpg/2020/01/20/acai-883535.jpg',
            categoria: 'acai'
        },
        // {
        //     id: 1,
        //     nome: 'açaí de grabola 500ml',
        //     preco: 5.99,
        //     img: 'https://conteudo.imguol.com.br/c/entretenimento/c1/2018/01/12/acai-1515784149344_v2_450x253.jpg'
        // },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Menu'
    }, []);

    return(
        <div className={'card'}> 
            <div className={'header-cad'}>
                <Menu color={'white'} />
                <p className={'cad-title'}>Menu</p>
            </div>

            {/* PIZZAS *************** */}
            <div className={'container'}>
                <p className={'pizzas'}>Pizzas cargo chefe da casa</p>
                <div className={'row d-flex justify-content-center'}>
                    {
                        arr_pizza.map((item, i) => (
                            <div className={'box-item'}>
                                <img alt={'item1'} src={item.img} className={'item-img'} />
                                <p className={'item-nome'}>{item.nome}</p>
                                <p className={'item-desc'}>{item.descricao}</p>
                                <p className={'item-preco'}>R${item.preco}</p>
                                <div className={'d-flex justify-content-start'}>
                                    <button onClick={() => getInfoItem(item)} className={'shadow-none'} id={'detal'}>
                                        Ver mais detalhe
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Link to={'/categoria/pizza'} style={{textDecoration: 'none'}} className={'d-flex justify-content-center mt-3'}>
                    <button className={'btn btn-dark'} style={{borderRadius: 60, width: 200}}>
                        Ver mais <FaTelegram/>
                    </button>
                </Link>
            </div>

            {/* DRINKS *************** */}
            <div className={'drink-div'}>
                <p className={'drinks'}>Bebidas</p>
                <div className={'container'}>
                    <div className={'row d-flex justify-content-center'}>
                        {
                            arr_bebidas.map((item, i) => (
                                <div className={'box-item'}>
                                    <img alt={'item1'} src={item.img} className={'item-img'} />
                                    <p className={'item-nome'}>{item.nome}</p>
                                    <p className={'item-desc'}>{item.descricao}</p>
                                    <p className={'item-preco'}>R${item.preco}</p>
                                    <div className={'d-flex justify-content-start'}>
                                        <button onClick={() => getInfoItem(item)}  className={'shadow-none'} id={'detal'}>
                                            Ver mais detalhe
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Link to={'/categoria/bebidas'} style={{textDecoration: 'none'}} className={'d-flex justify-content-center mt-3'}>
                    <button className={'btn btn-outline-light'} id={'btn-drink'} style={{borderRadius: 60, width: 200}}>
                        Ver mais <FaTelegram/>
                    </button>
                </Link>
            </div>

            {/* AÇAÍ *************** */}
            <div className={'acai-div'}>
                <p className={'acai'}>Para os amantes de açaí</p>
                <div className={'d-flex justify-content-center'}>
                    <div className={'row container d-flex justify-content-center'}>
                        { 
                            arr_açai.map((item, i) => (
                                <div className={'box-item'}>
                                    <img alt={'item1'} src={item.img} className={'item-img'} />
                                    <p className={'item-nome'}>{item.nome}</p>
                                    <p className={'item-desc'}>{item.descricao}</p>
                                    <p className={'item-preco'}>R${item.preco}</p>
                                    <div className={'d-flex justify-content-start'}>
                                        <button onClick={() => getInfoItem(item)}  className={'shadow-none'} id={'detal'}>
                                            Ver mais detalhe
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Link to={'/categoria/acai'} style={{textDecoration: 'none'}} className={'d-flex justify-content-center mt-5'}>
                    <button className={'btn btn-dark'} style={{borderRadius: 60, width: 200}}>
                        Ver mais <FaTelegram/>
                    </button>
                </Link>
            </div>

            <p className={'end-cad'}>Clique em ver mais para que você possa encontrar mais coisas</p>


            {/* DRAWER INFO */}
            <Drawer open={open} onClose={toggleOpen} anchor={'right'}>
                <Item item={select} close={toggleOpen} />
            </Drawer>


            {/* BAF */}
            <div className={'baf'}>
                <ButtonCart item={select} />
            </div>

        </div>
    )
}

export default MenuPage;