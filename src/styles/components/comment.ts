import { styled } from "../stitches.config";

export const StyledDivComment = styled('div', {
    marginTop: '1.5rem',
    display: 'flex',
    gap: '1rem',

    img: {
        width: '3rem',
        height: '3rem',
        borderRadius: 8,
    },
})

export const StyledDivCommentBox = styled('div', {
    flex: '1',

    p: {
        marginTop: '1rem',
        color: '$gray300',
    },

    footer: {
        marginTop: '1rem',

        button: {
            background: 'transparent',
            border: 0,
            color: '$gray400',
            cursor: 'pointer',
          
            display: 'flex',
            alignItems: 'center',
          
            borderRadius: 2,

            '&:hover': {
                color: '$green300'
            },

            svg: {
                marginRight: '0.5rem',
            },

            'span::before': {
                content: "😍",
                padding: '0 0.25rem',
            }
        }
    }
})

export const StyledDivCommentContent = styled('div', {
    background: '$gray700',
    borderRadius: 8,
    padding: '1rem',

    header: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',

        button: {
            background: 'transparent',
            border: 0,
            color: '$gray400',
            cursor: 'pointer',
            lineHeight: 0,
            borderRadius: 2,

            '&:hover': {
                color: '$red500'
            }
        },
    },

    p: {
        marginTop: '1rem',
        color: '$gray100',
    }
})

export const StyledDivAuthorAndTime = styled('div', {

    strong: {
        display: 'block',
        fontSize: '0.875rem',
        lineHeight: 1.6,
    },

    time: {
        display: 'block',
        fontSize: '0.75rem',
        lineHeight: 1.6,
        color: '$gray400',
    }
})