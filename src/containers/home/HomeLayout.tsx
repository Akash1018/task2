import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";
import { useData } from "./DataProvider";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {

  //Working but showing error when deployin
  // const {state, setState} = useData();

  // const [requisitionInfo, setRequisitionInfo] = useState({state.requisitionDetails});
  // const [jobDetailsInfo, setJobDetailsInfo] = useState({state.jobDetails});
  // const [interviewSettingsInfo, setInterviewSettingsInfo] = useState({state.interviewSettings});

  //alternate approach
  const [requisitionInfo, setRequisitionInfo] = useState({
          requisitionTitle: '',
          noOfOpenings: 0,
          urgency: '',
          gender: ''
  });

  const [jobDetailsInfo, setJobDetailsInfo] = useState({
          jobTitle: '',
          jobDetails: '', 
          jobLocation: ''
   });
  const [interviewSettingsInfo, setInterviewSettingsInfo] = useState({
          interviewMode: '', 
          interviewDuration: '', 
          interviewLanguage: ''
  });

  const [page, setPage] = useState<PageNumbers>(0);

  const handlePage = (pageNumber: PageNumbers) => {
   
    setPage(pageNumber);
    
  };

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel >
                <RequisitionForm setRequisitionInfo = {setRequisitionInfo} handleTab={handlePage} />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm setJobDetailsInfo = {setJobDetailsInfo} handleTab={handlePage} />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm setInterviewSettingsInfo = {setInterviewSettingsInfo} handleTab={handlePage} />
              </TabPanel>
            </TabPanels>
            <DisplayCard  requisitionDetails={requisitionInfo} jobDetails={jobDetailsInfo} interviewSettings={interviewSettingsInfo} /> 
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
