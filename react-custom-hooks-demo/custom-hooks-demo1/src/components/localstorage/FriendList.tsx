import React, { useEffect, useState } from 'react';
import ComponentContainer from '../ComponentContainer';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import useLocalStorage from '../../hooks/useLocalStorage';

type ops = (s: string) => void;

const createFriendItem = (
  name: string,
  removeFriend: ops
): React.ReactElement => (
  <Box display="flex" flexDirection="row" key={name}>
    <Typography sx={{ flex: 3 }} variant="body1" fontWeight="bold">
      {name}
    </Typography>
    <IconButton onClick={() => removeFriend(name)}>
      <ClearIcon />
    </IconButton>
  </Box>
);
const FriendList: React.FC = () => {
  const [friendName, setFriendName] = useState<string>('');
  const [addDisabled, setAddDisabled] = useState<boolean>(true);

  const initialFriends: string[] = [];
  const [friends, setFriends] = useLocalStorage<string[]>(
    'friendList',
    initialFriends
  );

  useEffect(() => {
    if (friendName.length > 0) setAddDisabled(false);
    else setAddDisabled(true);
  }, [friendName]);

  const removeFriend = (friend: string) => {
    setFriends([...friends.filter((f) => f !== friend)]);
  };

  const addFriend = () => {
    setFriends([...friends, friendName]);
    setFriendName('');
  };

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
            value={friendName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFriendName(event.target.value);
            }}
          />
          <Button
            sx={{ flex: 1 }}
            variant="contained"
            disabled={addDisabled}
            onClick={addFriend}
          >
            Add
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" my={0.5} mx={0.5}>
          {friends.map((friend) => createFriendItem(friend, removeFriend))}
        </Box>
      </Box>
    </ComponentContainer>
  );
};

export default FriendList;
