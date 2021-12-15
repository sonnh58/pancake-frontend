import React from 'react'
import { StyledConnectWalletButton, useWalletModal } from 'pancake-uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  return (
    <StyledConnectWalletButton onClick={onPresentConnectModal} {...props}>
      {t('Connect Wallet')}
    </StyledConnectWalletButton>
  )
}

export default ConnectWalletButton
