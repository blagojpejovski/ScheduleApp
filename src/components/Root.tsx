import { Box, styled } from "@mui/material";
import Header from "./atoms/Header/Header";
import ScheduleTabs from "./molecules/ScheduleTabs/ScheduleTabs";
import AddSubjectButton from "./molecules/AddSubjectButton/AddSubjectButton";
import SubjectItem from "./organisms/SubjectItem/SubjectItem";

const RootContainer = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    min-height: 600px;
    box-shadow: 3px 10px 9px 0px rgba(0,0,0,0.61);
    -webkit-box-shadow: 3px 10px 9px 0px rgba(0,0,0,0.61);
    -moz-box-shadow: 3px 10px 9px 0px rgba(0,0,0,0.61);
`

const Root = () => <RootContainer>
    <Header />
    <ScheduleTabs />
    <AddSubjectButton />
    <SubjectItem />
</RootContainer>

export default Root;