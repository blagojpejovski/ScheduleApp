import { Box, Typography, styled } from "@mui/material";
import { Add } from "@mui/icons-material";

const SpeakersComponentContainer = styled(Box)`
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;
    width:100%;
    flex-direction: column;

`

const AddButtonContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: ${({ theme }) => theme.spacing(0.5)};
    border:0.1px solid #ccc; 
    transition: all 0.1s ease-out;
    width:50%;

    &:hover {
        cursor: pointer;
    }

    &:hover svg {
        color: ${({ theme }) => theme.palette.grey[600]};
    }

    &:hover span {
        color: ${({ theme }) => theme.palette.primary.light};
    }
`

const ButtonsContainer = styled(Box)`
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap:${({ theme }) => theme.spacing(4)};

`

const SpeakersComponent = () => <SpeakersComponentContainer>

    <Typography variant="caption" fontWeight="bold" sx={{ paddingBottom: "10px" }}>Speaker(s)</Typography>
    <ButtonsContainer>
        <AddButtonContainer>
            <Add />
            <Typography variant="caption" fontWeight="bold" color="primary">
                Add speaker
            </Typography>
        </AddButtonContainer>

        <AddButtonContainer>
            <Add />
            <Typography variant="caption" fontWeight="bold" color="primary">
                Add speaker
            </Typography>
        </AddButtonContainer>
    </ButtonsContainer>



</SpeakersComponentContainer>

export default SpeakersComponent;