import Container from 'components/Container'
import { Table } from 'components/Table'

import * as S from './styles'

type Criptos = {
  name: string
  price: string
}

function ResponsiveTable() {
  const data: Criptos[] = [
    { name: 'Bitcoin BTC', price: 'US$ 25.499,52' },
    { name: 'Ethereum ETH', price: 'US$ 15.499,52' }
  ]

  return (
    <Container>
      <S.ResponsiveTableContainer id="criptos">
        <S.Title>ResponsiveTable</S.Title>
        <Table>
          <thead>
            <tr>
              <th>Crypto</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <>
              {data.map((crypto, id) => {
                return (
                  <tr key={id}>
                    <td>{crypto.name}</td>
                    <td>{crypto.price}</td>
                  </tr>
                )
              })}
            </>
          </tbody>
        </Table>
      </S.ResponsiveTableContainer>
    </Container>
  )
}

export default ResponsiveTable
