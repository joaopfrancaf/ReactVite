import { styled } from "../stitches.config";

export const StyledAside = styled('aside', {
    backgroundColor: '$gray800',
    borderRadius: 8,
    overflow: 'hidden',
})

export const StyledCoverImg = styled('img', {
    width: '100%',
    height: 72,
    objectFit: 'cover'
})

export const StyledDivProfile = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginTop: 'calc(0px - 1.5rem - 6px)',

    img: {
        width: 'calc(3rem + 12px)',
        height: 'calc(3rem + 12px)',
        borderRadius: 8,
        border: '4px solid &gray800',
        outline: '2px solid $green500',
    },

    strong: {
        marginTop: '1rem',
        color: '$gray100',
        lineHeight: 1.6,
    },

    span: {
        fontSize: '0.875rem',
        color: '$gray400',
        lineHeight: 1.6,
    }
})

export const StyledDivFooter = styled('footer', {
    borderTop: '1px solid $gray600',
    marginTop: '1.5rem',
    padding: '1.5rem 2rem 2rem',

    a: {
        background: 'transparent',
        color: '$green500',
        border: '1px solid $green500',
        borderRadius: 8,
        height: 50,
        padding: '0 1.5rem',
        fontWeight: 'bold',
        textDecoration: 'none',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        gap: '0.5rem',

        transition: 'color 0.1s, background-color 0.1s',

        '&:hover' : {
            background: '$green500',
            color: 'white',
        }
    },


})