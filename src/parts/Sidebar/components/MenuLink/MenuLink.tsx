import React from 'react';
import Link from './MenuLink.styles';

interface Props {
  href: string;
}

const MenuLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link activeClassName='active' to={href} exact>
      {children}
    </Link>
  );
};

export default MenuLink;
