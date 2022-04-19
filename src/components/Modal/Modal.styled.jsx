
import styled from '@emotion/styled'

export const Backdrop = styled.div`

    position: fixed;
    background-color: rgba(47, 48, 58, 0.9);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    
    padding-top: 80px;
    z-index: 1110;
    pointer-events: none;
  
`;
export const Content = styled.div`
    background-color: #fff;
    position: absolute;
    // width: 700px;
    // height: 500px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);

    
`;
export const ModalCloseBtn = styled.button`
    position: absolute;
    z-index: 1111;
    top: 10px;
    right: 40px;
    cursor: pointer;
    pointer-events: all;
`;