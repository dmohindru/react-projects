import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import { useTypeSelector } from '../hooks/useHooks';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  export const TodoTitleList: React.FC = () => {

    const [value, setValue] = useState(1);
    const todoTitleList = useTypeSelector((state) => state.todoTitles);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }
    return (
        <Box sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex'
        }}>
            {todoTitleList.length === 0 ?
            <Typography>Add a todo list</Typography> :
            <>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="vertical tabs example"
                    sx={{borderRight: 1, borderColor: 'divider'}}
                >
                    {
                        todoTitleList.map(item => <Tab label={item.title} />)
                    }
                    {/* <Tab label="TODO List 1" />
                    <Tab label="TODO List 2" /> */}
                </Tabs>
                {/* <TabPanel value={value} index={0}>
                    <div>TODO List 1</div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div>TODO List 2</div>
                </TabPanel> */}
            </>
        }
            
            {/* <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="vertical tabs example"
                sx={{borderRight: 1, borderColor: 'divider'}}
            >
                <Tab label="TODO List 1" />
                <Tab label="TODO List 2" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div>TODO List 1</div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>TODO List 2</div>
            </TabPanel> */}
        </Box>
    )
}