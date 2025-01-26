import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface AuthState {

    isAuthenticated: boolean;
    loading: boolean;
    user: any | null;
    role: "admin" | "User";
    error: string | null;

}


const initialState: AuthState = {
    isAuthenticated: false,
    loading: false,
    user: null,
    role: "User",
    error: null,
};



const authSlice = createSlice(
{

    name:"auth",
    initialState,
    reducers:{

        loginUser(
            state,
            action: PayloadAction<{user: any; role: "admin" | "User"}>
        )
            {
            state.loading = true;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.role = action.payload.role;
        },
        logoutUser(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.role = "User";
        },

    
    }
        


}
)

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer
