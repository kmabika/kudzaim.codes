import styled from 'styled-components'
import COLOUR from 'styles'

export const Section = styled.section`
 
  display: flex;
  flex-direction: column;
  padding: 100px 48px 0 ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    padding: 50px 48px 0;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    padding: 50px 16px 0 ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size:  56px;
  line-height: 56px;
  width: max-content;
  max-width: 100%;
  background: ${COLOUR.blue_universe};
  -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: 0;

  @media screen and (max-width: 768px){ 
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 12px;
    padding: 0;
  }

  @media screen and (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    padding: 0;
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 1em;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${(props) => (props.color ? props.color : props.theme.text)};

  @media screen and (max-width: 768px) {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: 
    linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
    margin: 4rem;

  @media screen and (max-width: 768px) {
    width: 48px;
    height: 4px;
  }

  @media screen and (max-width: 640px) {
    width: 32px;
    height: 2px;
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media screen and (max-width: 768px) {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media screen and (max-width: 640px) {
    font-size: 14px;
    line-height: 22px;
  }
`
