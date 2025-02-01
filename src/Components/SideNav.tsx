
import { IconArrowsDownUp, IconHome, IconLogout, IconMail, IconSettings, IconShoppingBag } from '@tabler/icons-react';
import logo from '../Assets/fintech.svg' ;
import { NavLink } from 'react-router';

const SideNav = () => {
  return (
    <nav className='sidenav box bg-3'>
        <img src={logo} alt="Logo" className='mb' />
        <ul>
          <li>
            <IconHome className='icon'/>
            <NavLink to="/">Resumo</NavLink>
          </li>
          <li>
            <IconShoppingBag  className='icon'/>
            <NavLink to="/vendas">Vendas</NavLink>
          </li>
          <li>
            <IconArrowsDownUp  className='icon'/>
            <a > Webhooks</a>
          </li>
          <li>
            <IconSettings  className='icon'/>
            <a > Configurações</a>
          </li>
          <li>
            <IconMail  className='icon'/>
            <a > Contato</a>
          </li>
          <li>
            <IconLogout  className='icon'/>
            <a > Sair</a>
          </li>
        </ul>
    </nav>
  )
}

export default SideNav
