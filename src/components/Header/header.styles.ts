import styled, { keyframes } from 'styled-components'
export const RotateAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  padding: 0.7rem;
  margin-bottom: 2rem;
`

export const Logo = styled.img`
  width: 55px;
  height: 55px;
  animation-name: ${RotateAnimation};
`

export const Title = styled.h1`
  font-size: 2.5rem;
`
