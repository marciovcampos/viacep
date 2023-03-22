import Container from 'components/Container'
import { Button } from 'components/Button'
import LogoCoinSynch from 'assets/coin-synch.svg'

import * as S from './styles'

function Header() {
  return (
    <Container>
      <S.Wrapper>
        <S.Logo src={LogoCoinSynch.src} alt="CoinSynch Logo"></S.Logo>
        <S.Links>
          <S.LinkComponent href="#about">About Us</S.LinkComponent>
          <S.LinkComponent href="#criptos">Top Cryptos</S.LinkComponent>
        </S.Links>

        <S.Buttons>
          <Button variant="text">Sign in</Button>
          <Button variant="contained">Sign up</Button>
        </S.Buttons>
      </S.Wrapper>
    </Container>
  )
}

export default Header
