import React from "react";
import styled from "styled-components";

const Styledsection = styled.section`
  color: #060a24;
  padding: 0 10px;
  /* width: 100vw; */
  /* @media (max-width: 768px) {
    margin: 0px;
    width: 100vw;
     padding: 15px 30px;
   }
  */
`;

const StyledText = styled.h1`
  font-size: 45px;
  .subraya {
    text-decoration-line: line-through;
  }
  ::after {
    content: ".";
    color: blue;
  }
`;

const Text = () => {
  return (
    <Styledsection>
      <div>
        <StyledText>
          Hello <span className="subraya">world</span> pale blue dot
        </StyledText>
      </div>
      <p>
        El portal de podcasts que explora el mundo de la programación y la
        tecnología. Nuevos episodios, todos los jueves cada 15 días.
      </p>
    </Styledsection>
  );
};

export default Text;
