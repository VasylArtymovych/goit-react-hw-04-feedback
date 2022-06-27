import styled from "@emotion/styled";

export const Container = styled.div`
    background: linear-gradient(to top right, rgb(16, 15, 60), rgb(85, 204, 225));
    padding: 20px;
    border-radius: 15px;
    box-shadow: ${({theme}) => `0px 0px 10px ${theme.colors.primary}`};
`;