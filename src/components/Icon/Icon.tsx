import React from 'react';
import Icons from './Icons';

import { SvgWrapper, Svg } from './styles';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  storke?: string;
  name: string;
  onClick?: () => void;
}

const Icon: React.FC<Props> = ({ size, color, storke, name, onClick }) => {
  const Ic = Icons[name];
  if (!Ic) return null;

  return (
    <React.Suspense fallback='loading ...'>
      <SvgWrapper onClick={onClick} size={size}>
        <Svg as={Ic} color={color} storke={storke} />
      </SvgWrapper>
    </React.Suspense>
  );
};

Icon.defaultProps = {
  size: 'sm',
};

export default Icon;
