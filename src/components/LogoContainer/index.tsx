import Container from 'components/Container'
import HappyWoman from 'assets/sebrae.svg'

import * as S from './styles'

function LogoContainer() {
  return (
    <>
      <Container>
        <S.Wrapper>
          <S.Image src={HappyWoman.src} alt="Happy Woman"></S.Image>
        </S.Wrapper>
      </Container>
    </>
  )
}

export default LogoContainer
