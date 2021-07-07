import React, { useEffect } from 'react';
import '../../css/contact.css';
import Menu from '../../components/menu';
import contact from '../../assets/contact.png';
import { FaWhatsapp, FaPhone, FaEnvelope} from 'react-icons/fa'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Contato'
    }, []);

    return(
        <div className={'contact'}>
            <Menu/>

            <div className={'d-flex justify-content-between container flex-res'} style={{height: '82vh'}}>
                <div style={{display: 'grid'}}>
                    <div style={{margin: 'auto'}}> 
                        <p className={'contact-title'}>Nosso<br/>contato</p>
                        <p className={'contact-subtitle'}>
                            Caso você tenha algum problema no nosso sitema ou queira tirar alguma duvida você pode entrar
                            em contato com gente ligando pelo número de telefone, email ou até mesmo pelo número do nosso whatsapp.
                            Estaremos atendendo pelo nosso horário de funcionamento que são das 16HRS até ás 23HRS.    
                        </p>

                        <p className={'item-contact'}> <FaWhatsapp/> (ddd) 9 xxxx-xxxx </p>
                        <p className={'item-contact'}> <FaPhone/> (ddd) 9 xxxx-xxxx </p>
                        <p className={'item-contact'}> <FaEnvelope/> contact@pizzaria.com </p>
                    </div>
                </div>
                <div style={{display: 'grid'}}>
                    <img alt={'contact'} src={contact} className={'img-contact'} />
                </div>
            </div>
        </div>
    )
}

export default Contact;