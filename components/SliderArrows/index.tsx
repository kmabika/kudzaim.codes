import { ArrowComponent } from './styled';
import * as Icon from 'react-icons/fi';
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
    {direction === 'right' ? <Icon.FiArrowRight /> : <Icon.FiArrowLeft />}
  </ArrowComponent>
);

export default Arrow;
