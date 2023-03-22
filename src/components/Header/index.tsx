import Container from 'components/Container'

import * as S from './styles'

function Header() {
  return (
    <Container>
      <S.Wrapper>
        <S.Links>
          <S.LinkComponent href="/">Home</S.LinkComponent>
          <S.LinkComponent href="/table">Table</S.LinkComponent>
          <S.LinkComponent href="/viacep">ViaCep</S.LinkComponent>
          <S.LinkComponent href="/crud">CRUD</S.LinkComponent>
        </S.Links>
      </S.Wrapper>
    </Container>
  )
}

export default Header
