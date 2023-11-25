import styled from "styled-components";

export const Container = styled.div`
height: 80px;
  background-color: #8e9de1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  .logo_section{
    flex: 1;
  }
  
  .info_section {
    flex: 1;
    display: flex;
    justify-content:right;
    align-items: center;
    gap: 10px;
    
    .company_name{
        background-color: white;
    border-radius: 2px;
    padding: 5px;
    font-size: small;
    }

    .down_arrow{
        background-color: white;
        border-radius: 2px;
        padding: 5px;
    }
  }
`;
