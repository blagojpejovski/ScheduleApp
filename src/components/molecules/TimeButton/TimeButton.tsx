import { Box, Typography, styled } from "@mui/material"
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs"

const Container = styled(Box)`
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
    width:100%;
    padding:${({ theme }) => theme.spacing(2)};
`

const SubjectStartTimeContainer = styled(Box)`
    display:flex; 
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`
const SubjectEndTimeContainer = styled(Box)`
    display:flex; 
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`


const TimeButton = () =>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
            <SubjectStartTimeContainer>
                <Typography variant="caption">Subject start time</Typography>

                <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
            </SubjectStartTimeContainer>

            <SubjectEndTimeContainer>
                <Typography variant="caption">Subject start time</Typography>
                <TimePicker defaultValue={dayjs('2022-04-27T25:40')} />
            </SubjectEndTimeContainer>
        </Container>
    </LocalizationProvider>






export default TimeButton