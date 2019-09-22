import styled from 'styled-components';
import { grey, red } from '@ant-design/colors';
import { Row as AntRow } from 'antd';


export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${red[1]}; //#FFCCC7
  border-radius: 4px;
  font-size: 50px;
  height: 128px;
  min-width: 128px;
  margin-right: 24px;
  color: black;
`;

export const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(192, 196, 207, 0.3);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  margin-top: 22px;
  display: flex;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.p`
  color: ${grey[2]}; //#8C8C8C
  margin-bottom: 0;
`;

export const Row = styled(AntRow)`
  margin-bottom: 16px;
`;