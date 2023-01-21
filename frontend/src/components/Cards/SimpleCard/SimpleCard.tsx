import styled from 'styled-components';

const SimpleCardStyled = styled.div<{ width?: string }>`
  background-color: #d8b669;
  width: ${(props) => props.width ?? '45%'};
  min-hieght: 200px;
  height: auto;
  min-height: 200px;
  margin: 10px;
  color: #fff;
  border-radius: 10px;
  padding: 10px;

  .header {
    font-size: 26px;
    font-weight: 700;
  }

  .actions {
    width: 180px;
    margin: 10px auto;
  }
`;

interface SimpleCardProps {
  width?: string;
  children?: any;
  style?: any;
}

const SimpleCard = (props: SimpleCardProps) => {
  return (
    <SimpleCardStyled style={props.style} width={props.width}>
      {props.children}
    </SimpleCardStyled>
  );
};

export default SimpleCard;
