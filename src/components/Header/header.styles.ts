import { Theme } from 'hooks/use-theme'
import styled, { keyframes } from 'styled-components'

interface HeaderStylesProps {
  theme: Theme
}

export const RotateAnimation = keyframes`
   from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(360deg);
		}
`

export const Header = styled.header<HeaderStylesProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  padding: 0px 1em;
  margin-bottom: 2rem;
  background-color: ${(props) =>
    props.theme === 'light' ? '#f1ebdd' : '#040415'};
`

export const Logo = styled.img`
  width: 25px;
  height: 25px;
  animation: rotation 2s infinite linear;
  animation-name: ${RotateAnimation};
  animation-iteration-count: infinite;
  animation-duration: 8s;
  margin-right: 12px;
  transition: 2.5s; /* Transition duration */
`

export const Title = styled.h1<HeaderStylesProps>`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => (props.theme === 'light' ? '#040415' : '#f1ebdd')};
  margin-right: 5em;
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
export const Box = styled.div`
  display: flex;
  align-items: center;
`
