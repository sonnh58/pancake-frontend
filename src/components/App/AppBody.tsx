import React from 'react'
import styled from 'styled-components'
import { Card } from 'pancake-uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 16px;
  max-width: 560px;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.06);
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
