
import styled from '@emotion/styled'

export const Backdrop = styled.div`

    position: fixed;
    background-color: rgba(47, 48, 58, 0.5);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    
    padding-top: 80px;
    z-index: 999;
    pointer-events: none;
  
`;
export const Content = styled.div`
    background-color: #fff;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);

    
`;