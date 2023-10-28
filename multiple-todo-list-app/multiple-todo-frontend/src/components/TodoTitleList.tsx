import { Box, Tabs, Tab, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { useTypeSelector } from '../hooks/useHooks';
import { TodoComponent } from './TodoComponent';


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
          <Container sx={{ p: 3, width: '80%', backgroundColor: 'red' }}>
            {children}
          </Container>
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
                </Tabs>
                {
                    todoTitleList.map((item, index) => 
                    (
                        <TabPanel value={value} index={index}>
                            <TodoComponent title={item.title} />
                        </TabPanel>
                    ))
                }
            </>
        }
        </Box>
    )
}