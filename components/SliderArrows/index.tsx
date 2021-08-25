import { ArrowComponent } from './styled';
import { Icon } from '@iconify/react';
import COLOUR from 'styles';

export interface ArrowProps {
  mainColor?: string | undefined;
  direction?: string;
  handleClick?: any;
  opacity?: number;
  onMouseLeave: any;
  onMouseEnter: any;
}
const Arrow = ({
  mainColor = COLOUR.blue_universe,
  direction,
  handleClick,
  opacity,
  onMouseEnter,
  onMouseLeave,
}: ArrowProps) =>(
  <ArrowComponent
    onClick={handleClick}
    direction={direction}
    opacity={opacity}
    mainColor={mainColor}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {direction === 'right' ? <Icon icon="bytesize:arrow-right" width="35" height="35"/>: <Icon icon="bytesize:arrow-left" width="35" height="35" />}
  </ArrowComponent>
);

export default Arrow;
