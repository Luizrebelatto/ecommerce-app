import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size: 16px;
`;