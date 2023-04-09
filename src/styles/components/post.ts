import { styled } from "../stitches.config";

export const StyledArticle = styled('article', {
    backgroundColor: '$gray800',
    borderRadius: 8,
    padding: '2.5rem',

})

export const StyledDivHeader = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    time: {
        fontSize: '0.875rem',
        color: '$gray400',
    }
})

export const StyledDivAuthor = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
})

export const StyledDivAuthorInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.6,

    span: {
        fontSize: '0.85rem',
        color: '$gray400',
        lineHeight: 1.6
    }
})

export const StyledDivContent = styled('div', {
    lineHeight: 1.6,
    color: '$gray300',
    marginTop: '1.5rem',

    p: {
        marginTop: '1rem',
    },

    a: {
        fontWeight: 'bold',
        color: '$green500',
        textDecoration: 'none',

        '&:hover': {
            color: '$green300'
        }
    },
})

export const StyledForm = styled('form', {
    width: '100%',
    marginTop: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid $gray600',

    strong: {
        lineHeight: 1.6,
        color: '$gray100',
    },

    textarea: {
        width: '100%',
        background: '$gray900',
        border: 0,
        resize: 'none',
        height: '6rem',
        padding: '1rem',
        borderRadius: '0.25rem',
        color: '$gray100',
        lineHeight: 1.4,
        marginTop: '1rem',
    },

    footer: {
        visibility: 'hidden',
        maxHeight: 0,
    },

    '&:focus-within footer': {
        visibility: 'visible',
        maxHeight: 'none',
    },

    button: {
        padding: '1rem 1.5rem',
        marginTop: '1rem',
        borderRadius: 8,
        border: 0,
        background: '$green500',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',

        transition: 'background-color 0.1s',

        '&:hover': {
            background: '$green300',
        },
    },
})

export const StyledDivListComments = styled('div', {
    marginTop: '2rem'
})