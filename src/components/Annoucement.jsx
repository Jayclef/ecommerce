import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  ${mobile({ marginTop: "10px" })}
`;

const Annoucement = () => {
  return <Container>Super Deal! Free Shipping on Order Over $50</Container>;
};

export default Annoucement;
