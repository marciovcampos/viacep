import styled from 'styled-components'
import theme from 'styles/theme'
import { Button as ButtonComponet } from 'components/Button'

export const BuscaCepContainer = styled.div`
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
`

export const Title = styled.h3`
  color: ${theme.colors.textBase};
  font-size: ${theme.font.sizes.bold.h3};
  text-align: center;
  margin-bottom: 3rem;
`

export const Button = styled(ButtonComponet)`
  background-color: #149e55;
  width: 5rem;
`

export const FormContainer = styled.form`
  display: block;
  align-items: center;
  justify-content: center;
`
export const Text = styled.label`
  align-content: center;
  font-size: ${theme.font.sizes.regular.h5};
  color: ${theme.colors.primary};
`

export const Input = styled.input`
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0.25rem;
  height: 1.5rem;
`
