import { styled } from "../stitches.config";

export const StyledAvatar = styled('img', {
    width: '3rem',
    height: '3rem',
    borderRadius: 8,
})

export const StyledAvatarBorder = styled('img', {
    width: 'calc(3rem + 12px)',
    height: 'calc(3rem + 12px)',
    borderRadius: 8,
    border: '4px solid $gray800',
    outline: '2px solid $green500',
})