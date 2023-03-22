import axios from 'axios'
import { useForm } from 'react-hook-form'
import Container from 'components/Container'

import * as S from './styles'

function BuscaCep() {
  const { register, setValue } = useForm()

  const getCEP = (e: { target: { value: string } }) => {
    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)
    axios.get(`http://viacep.com.br/ws/${cep}/json`).then((response) => {
      console.log(response.data)
      setValue('logradouro', response.data.logradouro)
      setValue('bairro', response.data.bairro)
      setValue('cidade', response.data.localidade)
      setValue('estado', response.data.uf)
    })
  }

  return (
    <Container>
      <S.BuscaCepContainer>
        <S.Title>ViaCep</S.Title>
        <S.FormContainer>
          <div>
            <S.Text>CEP: </S.Text>
            <S.Input
              name="cep"
              data-testid="cep"
              {...register('cep')}
              onBlur={getCEP}
              placeholder="00000-000"
            />
          </div>
          <div>
            <S.Text>Logradouro: </S.Text>
            <S.Input name="logradouro" {...register('logradouro')} />
          </div>
          <div>
            <S.Text>Bairro:</S.Text>
            <S.Input name="bairro" {...register('bairro')} />
          </div>
          <div>
            <S.Text>Cidade:</S.Text>
            <S.Input name="cidade" {...register('cidade')} />
          </div>
          <div>
            <S.Text>Estado:</S.Text>
            <S.Input name="estado" {...register('estado')} />
          </div>
        </S.FormContainer>
      </S.BuscaCepContainer>
    </Container>
  )
}

export default BuscaCep
