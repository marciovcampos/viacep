import Container from 'components/Container'
import { Table } from 'components/Table'

import * as S from './styles'

type Criptos = {
  name: string
  price: string
  change: string
}

function TopCryptos() {
  const data: Criptos[] = [
    { name: 'Bitcoin BTC', price: 'US$ 25.499,52', change: '+5,65%' },
    { name: 'Ethereum ETH', price: 'US$ 15.499,52', change: '-5,65%' },
    { name: 'Cardano ADA', price: 'US$ 5.499,52', change: '-5,65%' },
    { name: 'Solana SOL', price: 'US$ 2.499,52', change: '+5,65%' }
  ]

  return (
    <Container>
      <S.TopCryptosContainer id="criptos">
        <S.Title>Top Cryptos</S.Title>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Crypto</th>
              <th>Price</th>
              <th>Change</th>
              <th>Trade</th>
            </tr>
          </thead>

          <tbody>
            <>
              {data.map((crypto, id) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{crypto.name}</td>
                    <td>{crypto.price}</td>
                    <td>{crypto.change}</td>
                    <td>
                      <S.Button>Buy</S.Button>
                    </td>
                  </tr>
                )
              })}
            </>
          </tbody>
        </Table>
      </S.TopCryptosContainer>
    </Container>
  )
}

export default TopCryptos
