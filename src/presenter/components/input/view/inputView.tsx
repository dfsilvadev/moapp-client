import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react"

import * as S from "./styles"

type InputType = InputHTMLAttributes<HTMLInputElement>

type Dependencies = {
  readonly label?: string
  readonly errorMessage?: string
  readonly id: string
} & InputType

const Input: ForwardRefRenderFunction<HTMLInputElement, Dependencies> = (
  { label = "", errorMessage, id, ...props },
  ref
) => {
  return (
    <>
      {!!label && <S.Label id={`${id}-label-msg`}>{label}</S.Label>}
      <S.InputContent
        hasError={!!errorMessage}
        aria-labelledby={`${id}-label-msg`}
      >
        <S.Input ref={ref} {...props} />
      </S.InputContent>
      <S.Error>{!!errorMessage && errorMessage}</S.Error>
    </>
  )
}

export default forwardRef(Input)
