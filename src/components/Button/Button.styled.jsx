import styled from '@emotion/styled'


export const BtnWrapper = styled.div`
    margin: 0 auto;
`;

export const Btn = styled.button`
    width: 300px;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
    &:active {
        transform: scale(0.9)
    }
`;