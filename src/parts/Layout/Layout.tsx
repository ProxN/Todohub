import React from 'react';
import { GlobalStyles } from '../../styles';
import { LayoutContainer, ChildrenWrapper } from './Layout.styles';
import Sidebar from '../Sidebar';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <ChildrenWrapper>
        <Sidebar />
        {children}
      </ChildrenWrapper>
    </LayoutContainer>
  );
};

export default Layout;
