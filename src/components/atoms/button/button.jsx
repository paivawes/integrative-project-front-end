import { ButtonStyles } from "./button-styles"

export const Button = ({ onClick, label, disabled }) => {
    return (
        <ButtonStyles
            sx={{ margin: '20px'}}
            size='medium'
            variant={'contained'}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </ButtonStyles>
    )
}