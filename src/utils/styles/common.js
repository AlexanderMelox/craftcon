import styled from '@emotion/styled';

export const TextStroke = styled.span`
  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 1px black;
    color: transparent;
  }
`;
