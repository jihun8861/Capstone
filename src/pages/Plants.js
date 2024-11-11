import React from "react";
import styled from "styled-components";
import Main from "../components/Main";

const Container = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PlantsContent = () => {
    return(
        <Container>
            식물 설명 페이지입니다.
        </Container>
    )
}

const Plants = () => {
    return <Main props={<PlantsContent />} />;
  };
  
  export default Plants;