import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/react'
import { render, screen } from 'utils/testUtils'
import BuscaCep from '.'
import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const data = {
  cep: '01001-000',
  logradouro: 'Praça da Sé',
  complemento: 'lado ímpar',
  bairro: 'Sé',
  localidade: 'São Paulo',
  uf: 'SP',
  ibge: '3550308',
  gia: '1004',
  ddd: '11',
  siafi: '7107'
}

describe('<BuscaCEP />', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(data)
  })

  it.skip('should be call via cep API', async () => {
    render(<BuscaCep />)

    const inputCEP = screen.getByTestId('cep')
    fireEvent.change(inputCEP, { target: { value: '01001-000' } })
    fireEvent.focusOut(inputCEP)

    expect(mockedAxios).toBeCalledWith('http://viacep.com.br/ws/01001-000/json')

    expect(screen.getByRole('input', { name: 'logradouro' })).toHaveValue(
      'Praça da Sé'
    )
    expect(screen.getByRole('input', { name: 'bairro' })).toHaveValue('Sé')
    expect(screen.getByRole('input', { name: 'cidade' })).toHaveValue(
      'São Paulo'
    )
    expect(screen.getByRole('input', { name: 'estado' })).toHaveValue('SP')
  })
})
