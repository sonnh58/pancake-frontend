import React from "react";
import styled from "styled-components";
import Button from "../Button/RoundedButton";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

const InactiveButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  border-radius: 1000px;
  background-color: transparent;
  color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle)};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
  height: 44px;
  padding-left: 36px;
  padding-right: 36px;
`;

const RoundedButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  border-radius: 1000px;
  height: 44px;
  background: white;
  color: #192231;
  padding-left: 36px;
  padding-right: 36px;
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton as={as} variant={variant} {...props} scale="md" />;
  }

  return <RoundedButton as={as} variant={variant} {...props} scale="md"/>;
};

export default ButtonMenuItem;
