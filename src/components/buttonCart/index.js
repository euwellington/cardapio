import React, { useState } from 'react';
import '../../css/btncart.css';
import { FaShoppingCart } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';
import Badge from '@material-ui/core/Badge';
import { useCart } from '../../context/contextCart';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import empty from '../../assets/empty.png'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ButtonCart = () => {

    const { cart, removeItem, totalValue } = useCart();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <button onClick={handleClickOpen} id={'btn-baf'}>
            <Badge badgeContent={cart.length} color="primary">
                <FaShoppingCart />
            </Badge>
            </button>


            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <div className={'div-dr'}>
                <button onClick={handleClose} id={'btn-baf-close'} style={{display: 'grid'}}>
                    <BsX style={{margin: 'auto'}}/>
                </button>
                <p className={'car'}>Carrinho</p>

              <div className={'mb-5'}>  
                {
                    cart.length <= 0 ?
                    <div style={{display: 'grid'}}>
                        <img alt={'empty'} src={empty} className={'img-empty'} />
                        <p className={'text-empty'}>Ops!!! Não tem da aqui...</p>
                    </div>
                    :
                    <div className={'row d-flex justify-content-center box-result-pizza'}>
                    {
                        cart.map((item, i) => (
                            <div className={'box-cart'}>
                                <div className={'d-flex jusitfy-content-start'}>
                                    <img alt={'cart-img'} className={'cart-img'} src={item.img} />
                                    <div style={{display: 'grid'}}>
                                        <p className={'cart-nome'}> Nome: <span className={'active-item'}>{item.nome}</span></p>
                                        
                                    </div>
                                </div>
                                <p className={'cart-item'}> Quantidade: <span className={'active-item'}>{item.QTD}</span></p>
                                <p className={'cart-item'}> Preço normal: <span className={'active-item'}>R${item.precoUnitario}</span></p>
                                <p className={'cart-item'}> Preço por quantidade: <span className={'active-item'}>R${item.precoPorQtd}</span></p>
                                <div>
                                    <p style={{display: item.categoria === 'drinks' || item.categoria === 'acai' ? 'none' : 'block'}} className={'cart-item'}> Borda: <span className={'active-item'}>{item.bordaInclusa}</span></p>
                                    <p style={{display: item.categoria === 'drinks' || item.categoria === 'acai'  ? 'none' : 'block'}} className={'cart-item'}> Borda - Catupity: <span className={'active-item'}>{item.bordaCatupiry}</span></p>
                                    <p style={{display: item.categoria === 'drinks' || item.categoria === 'acai'  ? 'none' : 'block'}} className={'cart-item'}> Borda - Chedder: <span className={'active-item'}>{item.bordarChedder}</span></p>
                                    <p style={{display: item.categoria === 'drinks' || item.categoria === 'acai'  ? 'none' : 'block'}} className={'cart-item'}> Observação: <span className={'active-item'}>{item.observacao }</span></p>
                                </div>
                                <p className={'cart-item'}> Preço Total: <span className={'active-item'}>R${item.precoTotal }</span></p>
                                <div className={'d-flex justify-content-center'}>
                                    <button onClick={() => removeItem(i)} id={'btn-baf-remove'} style={{display: 'grid'}}>
                                        Remover item
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    <div className={'totalPrice'}>
                        <p>TOTAL: R${totalValue}</p>
                    </div>
                </div>
                }
            </div>
            
            </div>
            </Dialog>

        </div>
    )
}

export default ButtonCart;