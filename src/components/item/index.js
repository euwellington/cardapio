import React, { useState, useEffect } from 'react';
import '../../css/item.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Checkbox from '@material-ui/core/Checkbox';
import { BsX } from 'react-icons/bs';
import { useCart } from '../../context/contextCart.js';

const Item = ({ item, close }) => {

    const { saveItem } = useCart();

    const [count, setCount] = useState(1);
    const [hidden, setHidden] = useState(false);
    const [obs, setObs] = useState('');

    const up = () => {
        setCount(count + 1);
        if(count === 10) {
            setCount(10);
        }
    }
    const down = () => {
        setCount(count - 1);
        if(count === 1) {
            setCount(1);
        }
    }

    const [check, setCheck] = useState({
        a: false,
        b: false,
        c: false,
    });
    const handleCheck = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setCheck(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const getValue = {
        catupiry: check.b ? '2' : '0',
        chedder: check.c ? '2' : '0',
    }
    const getName = {
        bordaStatus: check.a ? 'SEM BORDA' : 'COM BORDA',
        catupiry: check.b ? 'CATUPIRY' : 'NADA INCLUSO ',
        chedder: check.c ? 'CHEDDER' : 'NADA INCLUSO',
    }

    useEffect(() => {
        if(item.categoria === 'drinks' || item.categoria === 'acai') {
            setHidden(true);
        }
    }, [item.categoria]);

    
    const allValueAdd = parseInt(getValue.catupiry) + parseInt(getValue.chedder);
 
    const getAllRequest = {
        nome: item.nome,
        img: item.img,
        precoUnitario: item.preco,
        precoPorQtd: item.preco * count,
        QTD: count,
        precoPorAddQtd: ((allValueAdd) + count * item.preco).toFixed(2),
        bordaInclusa: getName.bordaStatus,
        bordaCatupiry: getName.catupiry,
        bordarChedder: getName.chedder,
        observacao: obs.length > 1 ? obs : 'Sem Observação',
        precoTotal: ((allValueAdd) + count * item.preco).toFixed(2),
        categoria: item.categoria
    }


    const saveCart = () => {
        saveItem(getAllRequest);
        close();
    }

    return(
        <div className={'item-drawer'}>
            <div style={{margin: 'auto', width: '100%'}}>
                <div className={'d-flex justify-content-between'}>
                    <div style={{display: 'grid'}}>
                        <div style={{margin: 'auto'}}>
                            <p className={'item-nome-drawer'}>{item.nome}</p>
                            <div className={'d-flex justify-content-start'}>
                                <p className={'item-preco-drawer'}>R${parseFloat(((allValueAdd) + count * item.preco).toFixed(2))}</p>
                                <div style={{display: 'grid'}}>
                                    <p className={'item-qtd-drawer'}>quantidade: {count}</p>
                                </div>
                            </div>
                            <div className={'d-flex justify-content-start'}>
                                <FaArrowLeft onClick={() => down()} className={'icon-add'} />
                                <FaArrowRight onClick={() => up()} className={'icon-add'} />
                            </div>
                        </div>
                    </div>
                    <div className={'d-flex justify-content-center'}>
                        <img alt={'info-img'} src={item.img} className={'img-drawer'} />
                    </div>
                </div>

                <p className={'item-desc-drawer'}>{item.descricao}</p>

                <div style={{display: hidden ? 'none': 'block'}}>
                    <p className={'item-adi-drawer'}>Adicionais:</p>

                    <div className={'check-div'}>
                        <Checkbox disabled={check.b || check.c} name={'a'} style={{color: check.b || check.c ? 'rgba(255, 255, 245, 0.35)' : 'white'}} onChange={handleCheck} type={'checkbox'} id={'cheddar'} className={'checkbox'} />
                        <label style={{color: check.b || check.c ? 'rgba(255, 255, 245, 0.35)' : 'white'}} for={'cheader'} className={'checkbox-title'}>Bordar: Sem Borda</label>
                    </div>

                    <div className={'check-div'}>
                        <Checkbox disabled={check.c || check.a} name={'b'} style={{color: check.a || check.c ? 'rgba(255, 255, 245, 0.35)' : 'white'}} onChange={handleCheck} type={'checkbox'} id={'cheddar'} className={'checkbox'} />
                        <label style={{color: check.a ? 'rgba(255, 255, 245, 0.35)' : 'white'}} for={'cheader'} className={'checkbox-title'}>Bordar: Catupiry R$2,00</label>
                    </div>

                    <div className={'check-div'}>
                        <Checkbox disabled={check.b || check.a} name={'c'} style={{color: check.a || check.b ? 'rgba(255, 255, 245, 0.35)' : 'white'}} onChange={handleCheck} type={'checkbox'} id={'cheddar'} className={'checkbox'} />
                        <label style={{color: check.a || check.b ? 'rgba(255, 255, 245, 0.35)' : 'white'}} for={'cheader'} className={'checkbox-title'}>Bordar: Cheddar R$2,00</label>
                    </div>
                </div>

                <p className={'obs-title'}>Observação</p>
                <textarea id={'obs'} onChange={e => setObs(e.target.value)} className={'shadow-none form-control'} placeholder={'Escreva alguma observação'} />

                <div className={'d-flex justify-content-center'}>
                    <button onClick={ () => saveCart() } className={'btn btn-light shadow-none'} id={'add-cart'}>
                        Salvar no carrinho
                    </button>
                </div>

                <div className={'close-drawer'}>
                    <BsX onClick={() => close()} />
                </div>                
            </div>
        </div>
    )
}

export default Item;