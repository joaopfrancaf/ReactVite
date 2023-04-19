import { styled } from '../stitches.config'

export const StyledDivWrapper = styled('div', {
    maxWidth: '70rem',
    margin: '2rem auto', //2rem (em cima e em baixo) e AUTO (que vai ocupar toda as laterais)
    padding: '0 1rem',

    display: 'grid',
    gridTemplateColumns: '256px 1fr',
    gap: '2rem',
    alignItems: 'flex-start', //flex-start faz ficarem em cima

    '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
    }
})