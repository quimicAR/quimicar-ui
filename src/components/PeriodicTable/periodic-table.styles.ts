import styled from 'styled-components'

export const PeriodicTableContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(60px, auto);
  grid-auto-columns: minmax(60px, auto);
  grid-gap: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  overflow: auto;
`
