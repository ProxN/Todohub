import React from 'react';
import Icon from '../../components/Icon';
import MenuLink from './components/MenuLink/MenuLink';
import { HeaderContainer, Nav, LogoLink, MenuLinks } from './Sidebar.styles';

const Sidebar: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <div>
          <LogoLink>
            Todo
            <span>hub</span>
          </LogoLink>
          <MenuLinks>
            <MenuLink href='/'>
              <Icon size='md' name='home' />
            </MenuLink>
            <MenuLink href='/poro'>
              <Icon size='md' name='document' />
            </MenuLink>
          </MenuLinks>
        </div>
        <MenuLinks>
          <Icon size='md' name='settings' />
        </MenuLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Sidebar;
