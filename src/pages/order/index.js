import React, { useEffect } from 'react';
import '../../css/order.css';
import Menu from '../../components/menu';
import { Link } from 'react-router-dom';
import ButtonCart from '../../components/buttonCart';

const Order = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Categoria'
    }, []);

    return(
        <div className={'order'}>
            <div className={'order1'}>
                <Menu color={'white'}/>
                <div className={'d-flex justify-content-between flex-res'}>
                    <div className={'order1-left'}>
                        <img alt={'piz'} src={'http://www.chocolatecombanana.com.br/wp-content/uploads/2017/04/pizza-redonda.png'} className={'img-piz'} />
                    </div>
                    <div className={'order1-right'} style={{display: 'grid'}}>
                        <div style={{margin: 'auto'}}>
                            <p className={'order-title'}>Pizza</p>
                            <p className={'order-subtitle'}>
                                Pra você que é amante de pizza essa categoria é feito pra você! Venha da um conferida
                                e procure aquele sabor que você tem certeza que vai matar a sua fome e encher o seu bucho rsrs.
                                Mais de 30 pizzas diferentes pra você da uma olhada e comer com sua familia, amigos ou namorado(a)
                            </p>
                            <Link to={'/categoria/pizza'} style={{textDecoration: 'none'}} className={'d-flex justify-content-end'}>
                                <button id={'btn-order1'} className={'btn btn-outline-light'}>
                                    Conferir
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className={'order2 d-flex justify-content-between flex-res'}>
                <div className={'order2-left'} style={{display: 'grid'}}>
                    <div style={{margin: 'auto'}}>
                        <p className={'order2-title'}>Bebidas</p>
                        <p className={'order2-subtitle'}>
                            Para acompanha seu lanche, nada melhor do que uma bebida geladinha pra ajudar na digestão do seu lanche não é?
                            então veja as nossa bebidas disponível no momento
                        </p> 
                        <div className={'d-flex justify-content-end'}>
                            <Link to={'/categoria/bebidas'} id={'btn-order1'} className={'btn btn-light'}>
                                Conferir
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'grid' }}>
                    <img alt={'refri'} src={'https://www.cocacolauberlandia.com.br/wp-content/uploads/2020/06/refrigerante.png'} className={'img-refri'} />
                </div>
            </div>


            <div className={'order3 d-flex justify-content-between flex-res'}>
                <div className={'order3-left d-flex justify-content-end'}>
                    <img alt={'acaii'} src={'https://www.imagensempng.com.br/wp-content/uploads/2021/02/38-1.png'} className={'img-acai'} />
                </div>
                <div className={'order1-right'} style={{display: 'grid'}}>
                    <div style={{margin: 'auto'}}>
                        <p className={'order3-title'}>Açaí</p>
                        <p className={'order3-subtitle'}>
                            Pra você que é amante de açãí essa categoria é feito pra você! Venha da um conferida
                            e procure aquele sabor que você tem certeza que vai matar a sua fome e encher o seu bucho rsrs.
                            Temos diversos açaí diferentes pra você da uma olhada e comer com sua familia, amigos ou namorado(a)
                        </p>
                        <Link to={'/categoria/acai'} style={{textDecoration: 'none'}} className={'d-flex justify-content-end'}>
                            <button id={'btn-order1'} className={'btn btn-outline-light'}>
                                Conferir
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        
            {/* BAF */}
            <div className={'baf'}>
                <ButtonCart/>
            </div>
        </div>
    )
}

export default Order;