import React from 'react';
import styled from 'styled-components';

const Lists = styled.div`
  background: #f1f3f5;
  justify-content: left;
  margin-left: 0.5rem;
  margin-right: 0.6rem;
  margin-top: 0.5rem;
  overflow: hidden;
  .content {
    background: '#f1f3f5';
  }
`;

const BuiltDiv = styled.div`
  border-right: 4px solid #dddddd;
`;
const Inputdiv = styled.div`
  background: #f1f3f5;

  justify-content: left;
  margin-right: 0.6rem;
  margin-top: 0.5rem;
  overflow: hidden;
  position: left;
`;
const Input = styled.input`
  float: left;
  font-size: 25px;
  margin: 10px;
  margin-left: 25px;
  width: 300px;
`;

const BuildListTemplate = ({ keyword, onChange, children }) => {
  return (
    <BuiltDiv>
      <Inputdiv>
        <Input value={keyword} placeholder="search" onChange={onChange} />
      </Inputdiv>

      <Lists>
        <div className="content">{children}</div>
      </Lists>
    </BuiltDiv>
  );
};

export default BuildListTemplate;
