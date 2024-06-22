'use client'
import styled from 'styled-components';

const DividerContainer = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  background: black;
`;

const Line = styled.div`
  width: 100%;
  height: 4px;
  background-color: darkred;
  position: absolute;
  opacity: 0.5;
  top: ${({ top }) => top};
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid darkred;
  position: absolute;
  top: 24px;
  opacity: 0.6;
  left: calc(50% - 100px);
`;

const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: darkred;
  position: absolute;
  opacity: 0.6;
  top: 12px;
  left: calc(50% + 100px);
`;

export default function Divider() {
  return (
    <DividerContainer>
      <Line top="0" />
      <Line top="22px" />
      <Line top="44px" />
      <Triangle />
      <Square />
    </DividerContainer>
  );
}
