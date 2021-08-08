import { ArrowComponent } from './styled';
import * as Icon from 'react-icons/fi';
import COLOUR from 'styles';

export interface ArrowProps {
  mainColor?: string | undefined;
  direction?: string;
  handleClick?: any;
  opacity?: number;
}
const Arrow = ({
  mainColor = COLOUR.blue_universe,
  direction,
  handleClick,
  opacity,
}: ArrowProps) => (
  <ArrowComponent
    onClick={handleClick}
    direction={direction}
    opacity={opacity}
    mainColor={mainColor}
  >
    {direction === 'right' ? <Icon.FiArrowRight /> : <Icon.FiArrowLeft />}
  </ArrowComponent>
);

export default Arrow;
