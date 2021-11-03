import styled from 'styled-components';
import {motion} from 'framer-motion'

export const PageLayoutContainer = styled.div`
  background: ${(props) => props.theme.background};
  width: 100%;
`;

export const PageMainContent = styled(motion.main)`
  width: 100%;
`;
