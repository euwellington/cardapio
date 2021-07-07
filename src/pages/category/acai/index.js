import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../css/catacai.css';
import { Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import Item from '../../../components/item';
import ButtonCart from '../../../components/buttonCart';
const Acai = () => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

    const [select, setSelect] = useState([]);
    const getInfoItem = (item) => {
        toggleOpen();
        setSelect(item);
    }

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
        document.title = 'Categoria: Açaí'
    }, []);

    return(
        <div>
            <div className={'catacai-header d-flex justify-content-between'}>
                <div className={'container'}>
                    <Link to={'/categoria'}>
                        <FaArrowLeft className={'arrow-back'} />
                    </Link>
                    <p className={'catacai-title'}>Veja o cardapio completo dos nossos açaí! </p>
                    <p className={'catacai-subtitle'}>
                        Temos diversos sabores que você pode da uma olhada e ver aquele que mais chamou sua atenção
                        e finalmente adicionar no carrinho e ver outras coisas pra acompanha com o seu açaí s2
                    </p>
                </div>
                <div>
                    <img alt={'acai-a'} src={'https://www.imagensempng.com.br/wp-content/uploads/2021/02/38-1.png'} className={'cat-acai'} />
                </div>
            </div>

            <div className={'row d-flex justify-content-center box-result-pizza'}>
                {
                    arr_açai.map((item, i) => (
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

export default Acai;