import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import { useTypeSelector } from '../hooks/useHooks';
import { TodoComponent } from './TodoComponent';

interface TabContainerProps {
  children?: React.ReactNode;
}



  function TabContainer({children}: TabContainerProps) {
     return (
      <Box
      sx={{
        display: "flex",
        flexGrow: 1
      }}
    >
        {children}
      </Box>
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
                    index === value && <TabContainer><TodoComponent title={item.title} /></TabContainer>
                  )
                }
            </>
        }
        </Box>
    )
}