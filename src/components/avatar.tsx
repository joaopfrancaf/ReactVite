import { StyledAvatar, StyledAvatarBorder } from "../styles/components/avatar"

interface AvatarProps {
    hasBorder: boolean,
    src: string
}

export default function Avatar({ hasBorder = true, src }: AvatarProps) {
    return(
      <>
        {hasBorder ? <StyledAvatarBorder src={src}/>: <StyledAvatar src={src}/>}
      </>
    )
}