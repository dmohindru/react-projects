import React, { useEffect, useState } from 'react';
import ComponentContainer from '../ComponentContainer';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const createFriendItem = (name: string): React.ReactElement => (
  <Box display="flex" flexDirection="row">
    <Typography sx={{ flex: 3 }} variant="body1" fontWeight="bold">
      {name}
    </Typography>
    <IconButton>
      <ClearIcon />
    </IconButton>
  </Box>
);
const FriendList: React.FC = () => {
  const [friendName, setFriendName] = useState<string>('');
  const [addDisabled, setAddDisabled] = useState<boolean>(true);

  const friends = [
    'friendA',
    'friendB',
    'friendC',
    'FriendD',
    'FriendD',
    'FriendD',
  ];

  useEffect(() => {
    if (friendName.length > 0) setAddDisabled(false);
    else setAddDisabled(true);
  }, [friendName]);

  return (
    <ComponentContainer>
      <Box display="flex" flexDirection="column">
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            my: 0.5,
          }}
          variant="h5"
          fontWeight="bold"
        >
          Friend List
        </Typography>
        <Box display="flex" flexDirection="row" mx={0.5}>
          <TextField
            sx={{ flex: 4 }}
            label="Friend Name"
            size="small"
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFriendName(event.target.value);
            }}
          />
          <Button sx={{ flex: 1 }} variant="contained" disabled={addDisabled}>
            Add
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" my={0.5} mx={0.5}>
          {friends.map((friend) => createFriendItem(friend))}
        </Box>
      </Box>
    </ComponentContainer>
  );
};

export default FriendList;
