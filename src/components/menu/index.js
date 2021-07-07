import React, { useState } from 'react';
import '../../css/menu.css';
import logo from '../../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import { FaAlignLeft } from 'react-icons/fa';
  
const Menu = (props) => {

    const _color = props.color;
    const activeColor = 'white';

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open); 
    }

    return(
        <div className={'menu'}>
            <div className={'content-menu d-flex justify-content-between'}>
                <Link to={'/'}>
                    <img alt={'logo'} src={logo} className={'logo-menu'} />
                </Link>
                <div className={'d-flex justify-content-center menu-right'}>
                    <NavLink to={'/'} exact={true} activeClassName={'active'} activeStyle={{color: activeColor}} className={'item'} style={{color: _color}}>
                        home
                    </NavLink>
                    <NavLink to={'/menu'} activeClassName={'active'} className={'item'} style={{color: _color}}>
                        menu
                    </NavLink>
                    <NavLink to={'/categoria'} activeClassName={'active'} className={'item'} style={{color: _color}}>
                        categoria
                    </NavLink>
                    <NavLink to={'/contato'} activeClassName={'active'} className={'item'} style={{color: _color}}>
                        contato
                    </NavLink>
                </div>
                <div style={{display: 'grid'}} onClick={() => toggleOpen()}>
                    <FaAlignLeft className={'btn-drawer'} style={{color: _color}} />
                </div>
            </div>

            <div className={'drawer-res'}>
                <Drawer open={open} onClose={toggleOpen}>
                    <div className={'menures'}>
                        <div className={'div-item-res'}>
                            <NavLink to={'/'} exact={true} activeClassName={'activeres'} className={'item-res'}>
                                home
                            </NavLink>
                        </div>
                        <div className={'div-item-res'}>
                            <NavLink to={'/menu'} activeClassName={'activeres'} className={'item-res'}>
                                menu
                            </NavLink>
                        </div>
                        <div className={'div-item-res'}>
                            <NavLink to={'/categoria'} activeClassName={'activeres'} className={'item-res'}>
                                categoria
                            </NavLink>
                        </div>
                        <div className={'div-item-res'}>
                            <NavLink to={'/contato'} activeClassName={'activeres'} className={'item-res'}>
                                contato
                            </NavLink>
                        </div>
                    </div>
                </Drawer>
            </div>

        </div>
    )
}

export default Menu;