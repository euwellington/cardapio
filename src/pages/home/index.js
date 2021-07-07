import React, { useEffect } from 'react';
import '../../css/home.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { FaTelegram } from 'react-icons/fa';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'cardapioonline v1.0'
    }, []);

    return(
        <div className={'home'}>

            {/* MENU HEADER ************ */} 
            <div className={'menu-header'}>
                <Menu active={'white'} />
                <div className={'d-flex jsutify-content-center flex-res'}>
                    <div className={'header-left'}>
                        <div style={{margin: 'auto'}}>
                            <p className={'header-left-title'}>
                                Oferta Especial!
                            </p>
                            <p className={'header-left-subtitle'}>
                                Veja o nosso menu
                            </p>
                            <p className={'header-left-content'}>
                                Aqui você encontra diversos tipos de sabores de pizza de ótima qualidade
                                com um preço super acessível para que você possa saborear nossa delícias
                            </p>
                            <button className={'shadow-none'} id={'btn-go-menu'}>
                                Veja nosso menu <FaTelegram/>
                            </button>

                            <div className={'d-flex justify-content-start mt-3'}>
                                <div className={'d-flex justify-content-start mr-3'}>
                                    <img alt={'pizza'} src={'https://i.pinimg.com/originals/73/5c/34/735c34f43a123d0ee27ef67a24051c81.png'} className={'logo-end-button'} />
                                    <div style={{display: 'grid'}}>
                                        <div style={{margin: 'auto'}}>
                                            <p className={'value-item'}>50</p>
                                            <p className={'value-item-info'}>
                                                tipos de pizza
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={'d-flex justify-content-start'}>
                                    <img alt={'pizza'} src={'https://image.flaticon.com/icons/png/512/66/66507.png'} className={'logo-end-button'} />
                                    <div style={{display: 'grid'}}>
                                        <div style={{margin: 'auto'}}>
                                            <p className={'value-item'}>20</p>
                                            <p className={'value-item-info'}>
                                                tipos de queijo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'header-right'}>

                    </div>
                </div>
            </div>
            {/* MENU HEADER ************ */}



            {/* INFO DELIVERY ************ */}
            <div className={'info-home'}>
                <p className={'infodel-title'}>Sua entrega em até 30 minutos</p>
                <p className={'infodel-subtitle'}>Basta seguir as três etapas!</p>

                <div className={'d-flex justify-content-center flex-res'}>
                    <div className={'box-delivery'}>
                        <div className={'d-flex justify-content-center'}>
                            <img alt={'pedido'} src={'https://img.icons8.com/carbon-copy/2x/checkout.png'} className={'img-info-delivery'} />
                        </div>
                        <p className={'title-delivery'}>Faça seu pedido</p>
                        <p className={'subtitle-delivery'}>
                            Basta você da uma olhada no nosso menu e procurar aquele sabor que vai matar
                            a sua fome e seu desejo de comer alguma coisa deliciosa
                        </p>
                    </div>

                    <div className={'box-delivery'}>
                        <div className={'d-flex justify-content-center'}>
                            <img alt={'pedido'} src={'https://img.icons8.com/ios/452/motorcycle-delivery-single-box.png'} className={'img-info-delivery'} />
                        </div>
                        <p className={'title-delivery'}>Aguarde seu pedido</p>
                        <p className={'subtitle-delivery'}>
                            Agora é só ficar deitrado esperando que seu lanche chegue para que você possa da uma surra na sua fome rsrs
                        </p>
                    </div>

                    <div className={'box-delivery'}>
                        <div className={'d-flex justify-content-center'}>
                            <img alt={'pedido'} src={'https://image.flaticon.com/icons/png/512/472/472096.png'} className={'img-info-delivery'} />
                        </div>
                        <p className={'title-delivery'}>Já chegou?</p>
                        <p className={'subtitle-delivery'}>
                            Chegou seu pedido? Agora é só cair de boca no seu lanche e matar aquela vontade
                            de comer seu lanche preferido
                        </p>
                    </div>
                </div>
            </div>
            {/* INFO DELIVERY ************ */}



            {/* INFO OUR PARTNERS ************ */}
            <div className={'partners'}>
                <p className={'part-title'}>Nosso Parceiros</p>
                <p className={'part-subtitle'}>Produtos de ótima qualidade</p>

                <div className={'d-flex justify-content-center'}>
                    <div className={'d-flex justify-content-center flex-res'}>
                        <img alt={'logo1'} src={'https://seeklogo.com/images/P/Perdigao-logo-733FA663FE-seeklogo.com.png'} className={'logo-partners'} />
                        <img alt={'logo2'} src={'https://i.pinimg.com/originals/4c/1d/f8/4c1df88241aa7c3dc7366b62b1b33090.png'} className={'logo-partners'} />
                        <img alt={'logo3'} src={'https://www.pngkey.com/png/full/414-4141908_preocupamo-nos-em-deixar-nosso-po-de-queijo.png'} className={'logo-partners'} />
                        <img alt={'logo4'} src={'https://www.pozellialimentos.com.br/img/marcas/arriba.png'} className={'logo-partners'} />
                        <img alt={'logo5'} src={'https://www.adoroqueijo.com.br/dashboard/uploads/e9bbb81f-d4e8-4fc1-a72a-1779c806cbe5/Logos_Queijos.png'} className={'logo-partners'} />
                    </div>
                </div>
            </div>
            {/* INFO OUR PARTNERS ************ */}

            {/* FOOTER ************ */}
            <Footer active={'white'} />
        </div>
    )
}

export default Home;