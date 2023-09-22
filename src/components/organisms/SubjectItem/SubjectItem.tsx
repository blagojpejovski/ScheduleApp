import { Box, styled } from "@mui/material";
import ExpandComponent from "../../molecules/ExpandComponent/ExpandComponent";
import SubjectDetails from "../Schedule/SubjectDetails/SubjectDetails";



const SubjectItemContainer = styled(Box)`
    display:flex;
    align-items :center ;
    justify-content: center;
    width: 100%;
    gap:${({ theme }) => theme.spacing(4)};
`


const SubjectItem = () => <SubjectItemContainer>

    <ExpandComponent />
    <SubjectDetails />

</SubjectItemContainer>


export default SubjectItem;




