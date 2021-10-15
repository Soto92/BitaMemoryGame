import React, {createContext, Dispatch} from 'react';

type GameContextActions = {
  userName: undefined | string;
  setUserName: Dispatch<SetStateAction<Session>>;
};

const GameContext = createContext<GameContextActions>({
  userName: undefined,
  setUserName: () => {},
});

export default GameContext;
