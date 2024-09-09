import styled, { css } from "styled-components"
import { DefaultTheme } from "styled-components/dist/types"

type InputContentProps = {
  readonly hasError: boolean
}

const variant = {
  withError: (theme: DefaultTheme) => css`
    &,
    &:focus-within {
      border-color: ${theme.colors.red[500]};
    }
  `,
}

export const InputContent = styled.div<InputContentProps>`
  ${({ theme, hasError }) => css`
    width: 100%;
    height: 3.125rem;
    padding: 0.5rem 1rem;
    background: ${theme.colors.gray[800]};
    border: 2px solid transparent;
    border-radius: 0.25rem;

    flex-shrink: 0;

    ${hasError && variant.withError(theme)}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 100%;
    color: ${theme.colors.gray[50]};

    &::placeholder {
      color: ${theme.colors.gray[400]};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: inline-block;
    font-size: ${theme.font.size.xs};
    font-weight: ${theme.font.weight.medium};
    margin-bottom: 0.625rem;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    display: inline-block;
    padding: 0.5rem 0 0.5rem;
    font-size: 0.75rem;
    color: ${theme.colors.red[500]};
  `}
`
