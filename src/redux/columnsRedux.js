import shortid from 'shortid';

// selectors
export const getColumnsByList = ({ columns }, listId) => {
  return columns.filter((column) => column.listId === listId);
};

// actions
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

//actions creators
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
