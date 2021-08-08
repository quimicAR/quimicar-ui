import styled from 'styled-components'

export const PeriodicTableContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(auto, auto);
  grid-auto-columns: minmax(auto, auto);
  grid-gap: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  overflow: auto;
  width: auto;
  height: auto;
  padding: 1em;
`
