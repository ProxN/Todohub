import React from 'react';
import Icon from '../../components/Icon';
import MenuLink from './components/MenuLink/MenuLink';
import {
  HeaderContainer,
  Nav,
  LogoLink,
  MenuLinks,
  NavMobile,
} from './Sidebar.styles';

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
            <MenuLink href='/pomodoro'>
              <Icon size='md' name='clock' />
            </MenuLink>
          </MenuLinks>
        </div>
        <MenuLinks>
          <MenuLink href='/settings'>
            <Icon size='md' name='settings' />
          </MenuLink>
        </MenuLinks>
      </Nav>
      <NavMobile>
        <LogoLink>
          Todo
          <span>hub</span>
        </LogoLink>
        <div>
          <MenuLink href='/'>Home</MenuLink>
          <MenuLink href='/pomodoro'>Pomodoro</MenuLink>
          <MenuLink href='/settings'>Settings</MenuLink>
        </div>
      </NavMobile>
    </HeaderContainer>
  );
};

export default Sidebar;
