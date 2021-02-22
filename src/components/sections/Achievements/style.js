import styled from 'styled-components';
import { Container} from '@components/global';

export const LogoGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 30;
justify-items: center;
margin-top: 30px;
a {
  svg {
    width: 100%;
  }
}

@media (max-width: ${props => props.theme.screen.sm}) {
  grid-template-columns: 1fr;
}
`;

export const StyledContainer = styled(Container)`
display: flex;
justify-content: flex-end;
position: relative;

@media (max-width: ${props => props.theme.screen.md}) {
  justify-content: center;
}
`;

export const Art = styled.figure`
width: 600px;
position: absolute;
top: 20%;
right: 50%;

@media (max-width: ${props => props.theme.screen.lg}) {
  top: 0;
  right: 65%;
  width: 500px;
}

@media (max-width: ${props => props.theme.screen.md}) {
  display: none;
}
`;