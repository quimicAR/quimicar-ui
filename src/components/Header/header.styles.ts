import styled, { keyframes } from 'styled-components'

export const RotateAnimation = keyframes`
   from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(360deg);
		}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  padding: 0px 3em;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.pallete.bg};
`

export const Logo = styled.img`
  width: 25px;
  height: 25px;
  animation: rotation 2s infinite linear;
  animation-name: ${RotateAnimation};
  animation-iteration-count: infinite;
  animation-duration: 8s;
  margin-right: 12px;
  transition: 2.5s;
`

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fonts.sizes.lg};
  font-weight: ${(props) => props.theme.fonts.weight.light};
  color: ${(props) => props.theme.fonts.color};
`
export const IconButton = styled.button`
  height: auto;
  width: auto;
  border: none;
  background-color: transparent;
  transition: ease-in-out 0.3s;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

interface BoxProps {
  padding?: string
  margin?: string
}

export const Box = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`
