import axios from 'axios'
import { useForm } from 'react-hook-form'
import Container from 'components/Container'

import * as S from './styles'

function BuscaCep() {
  const { register, setValue } = useForm()

  const getCEP = (e) => {
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
        <div>
          <label>CEP: </label>
          <input
            name="cep"
            {...register('cep')}
            onBlur={getCEP}
            placeholder="00000-000"
          />
        </div>
        <div>
          <label>Logradouro: </label>
          <input name="logradouro" {...register('logradouro')} />
        </div>
        <div>
          <label>Bairro: </label>
          <input name="bairro" {...register('bairro')} />
        </div>
        <div>
          <label>Cidade: </label>
          <input name="cidade" {...register('cidade')} />
        </div>
        <div>
          <label>Estado: </label>
          <input name="estado" {...register('estado')} />
        </div>
      </S.BuscaCepContainer>
    </Container>
  )
}

export default BuscaCep
