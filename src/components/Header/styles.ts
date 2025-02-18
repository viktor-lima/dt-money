import styled from "styled-components";


export const HeaderContainer = styled.header`

  background: ${(props) => props.theme["gray-900"]};

  padding: 1.4rem 0 7.5rem;

`

export const HeaderContent = styled.div`

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  text-align: center;

`


export const NewTransactionButton = styled.button`

  height: 3.125rem;
  border: 0;
  background: ${(props) => props.theme["green-500"]};

  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 0.375rem;
  cursor: pointer;

  
  &:hover{
    background: ${(props) => props.theme["green-700"]};
    transition: background-color 0.5s;
  }


`