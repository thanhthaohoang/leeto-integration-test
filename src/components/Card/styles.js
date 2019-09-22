import styled from 'styled-components';

export const Title = styled.p`
  font-size: 24px;
  color: #171725;
  margin-bottom: 4px;
`;

export const Container = styled.div`
  display: flex;
  background: #FFFFFF;
  border: 1px solid rgba(192, 196, 207, 0.3);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 20px;
  height: 100%;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  border-radius: 10px;
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;
  background: ${props => props.background + '1A'}; // 1A in HEXA equals alpha 10%
  margin-right: 15px;
`;