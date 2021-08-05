import styled from 'styled-components'

export const PeriodicTableContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(55px, auto);
  grid-auto-columns: minmax(55px, auto);
  grid-gap: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  overflow: auto;
`
