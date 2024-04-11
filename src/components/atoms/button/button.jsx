import { ButtonStyles } from "./button-styles"

export const Button = ({ onClick, label }) => {
    return (
        <ButtonStyles
            sx={{ margin: '20px'}}
            size='medium'
            variant={'contained'}
            onClick={onClick}
        >
            {label}
        </ButtonStyles>
    )
}