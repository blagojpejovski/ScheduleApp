import { Add } from "@mui/icons-material";
import { Box, Divider, Typography, styled } from "@mui/material";


const AddSubjectButtonContainer = styled(Box)`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(5)};
`
const ElementsContainer = styled(Box)`
    display: flex;
    width: 100%;
    min-height: 40px;
    position: relative;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    border: 1px dotted #ccc;
    padding: ${({ theme }) => theme.spacing(0.5)};
    border-radius: ${({ theme }) => theme.spacing(1)};
`

const HoursContainer = styled(Box)`
    position: absolute;
    left: ${({ theme }) => theme.spacing(2)};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
`

const AddIcon = styled(Add)`
`;

const AddButtonContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(1)};
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: ${({ theme }) => theme.spacing(1)};
    transition: all 0.1s ease-out;

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

type AddSubjectButtonProps = {
    startTime?: string;
    endTime?: string;
    onAdd?: () => void;
}

const AddSubjectButton = ({ startTime, endTime, onAdd }: AddSubjectButtonProps) =>
    <AddSubjectButtonContainer>
        <ElementsContainer>
            <HoursContainer>
                <Typography variant="body1" fontWeight="bold">7:00 - 8:30</Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="caption" >2h 45m ago</Typography>
            </HoursContainer>
            <AddButtonContainer>
                <AddIcon />
                <Typography variant="caption" fontWeight="bold" color="primary">
                    Add a subject here
                </Typography>
            </AddButtonContainer>

        </ElementsContainer>
    </AddSubjectButtonContainer>

export default AddSubjectButton;