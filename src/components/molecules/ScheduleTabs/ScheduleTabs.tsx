import { Box, Tab, Tabs, styled } from "@mui/material";

const TabsContainer = styled(Box)`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
`

const ScheduleTabs = () => <TabsContainer>
    <Tabs value={2} onChange={() => { }}>
        <Tab label="Analytics" disabled />
        <Tab label="Overview" />
        <Tab label="Schedule" />
    </Tabs>
</TabsContainer>

export default ScheduleTabs;