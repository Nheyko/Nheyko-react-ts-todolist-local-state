import styled from 'styled-components'

export const CardCss = styled.div`
  margin-left: 2.5rem;
  margin-top: 2.5rem;
  min-width: 20rem;
  max-width: 20rem;
  flex-direction: column;
  border-radius: 0.25rem;
  background-color: rgb(243 244 246);
  outline-style: solid;
`

export const TopCardCss = styled.div`
  display: flex;
  max-height: 2.5rem;
  min-height: 2.5rem;
  align-items: center;
  justify-content: center;
`

export const BottomCardCss = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  align-items: center;
  overflow-y: auto;
  min-height: 334px;
  max-height: 334px;
`

export const HrCss = styled.hr`
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0);
  margin: 0px;
`

export const H2Css = styled.h2`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
`
