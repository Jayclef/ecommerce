import styled from "styled-components";
import { catergories } from "../DummyData";
import { mobile } from "../responsive";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column", marginTop: "15px" })}
`;
const Catergories = () => {
  return (
    <Container>
      {catergories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Catergories;
