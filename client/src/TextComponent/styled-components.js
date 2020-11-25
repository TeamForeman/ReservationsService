import styled from 'styled-components';

export const MainDivEM = styled.div `
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: left;
`;

export const SvgStylingEM = styled.div `
  display: block;
  height: 24px;
  width: 24px;
  color: red;
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  justify-self: center;
  align-self: center;
  justify-items: center;
`;

export const DescriptionTextBoldEM = styled.div `
  font-family: 'Roboto';
  font-weight: normal;
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  justify-self: start;
  align-self: start;
  justify-items: start;
  letter-spacing: 0.7px;
`;

export const DescriptionTextLightEM = styled.div `
  font-family: 'Roboto';
  font-weight: lighter;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  justify-self: start;
  align-self: start;
  justify-items: start;
  font-size: 14px;
  letter-spacing: 0.7px;
`;
export const ExtraInfoTextLightEM = styled.div `
  font-family: 'Roboto';
  font-weight: lighter;
  font-size: 16px;
  letter-spacing: 0.7px;
  margin: 20px;
`;
export const AmenitiesTextEM = styled.div `
  font-family: 'Roboto';
  font-weight: lighter;
  font-size: 16px;
  letter-spacing: 0.7px;
  margin: 20px;
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  justify-self: start;
  align-self: start;
  justify-items: start;
`;

export const DescriptionGridEM = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  grid-template-rows:auto;
  padding: 10px;
`;
export const AmenitiesGridEM = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  grid-template-rows: 50% auto;
  padding-left: 10px;
`;
export const LineEM = styled.hr`
  color: rgba(0, 0, 0, 0.35);
  width:490px;
  margin: 20px;

`;

export const AmentitiesTytleEM = styled.div `
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.7px;
  margin: 10px;
`;