import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserInfo, userStateType } from '../../types';

const initialState: userStateType = {
  userList: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUsers: (state, action: PayloadAction<UserInfo[]>) => {
      // console.log('updateUsers action.payload: ', action.payload);
      state.userList = action.payload;
    },
    updateRoles: (state, action: PayloadAction<UserInfo>) => {
      // action.payload is an object with _id and role(UserInfo Object)
      // console.log('updateRoles action.payload: ', action.payload);
      const { _id, role }: { _id: string; role: string } = action.payload;
      for (const user of state.userList) {
        if (user._id === _id) {
          user.role = role;
          break;
        }
      }
    },
  },
});

export const { updateUsers, updateRoles } = userSlice.actions;
export default userSlice.reducer;

