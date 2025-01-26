import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { AppDispatch } from "../store";
import { loginUser, logoutUser } from "./authSlice";
import { auth, db } from "@/src/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const sendOtp = (phoneNumber: string) => async (dispatch: AppDispatch) => {
  try {
    // Initialize RecaptchaVerifier
    
    const verify = new RecaptchaVerifier(
        "recaptcha-container",  // DOM element to attach the reCAPTCHA
      {
        size: "invisible",  // Invisible reCAPTCHA
      },
      auth // Auth instance pass here
    );

    // send otp user phone number
    const res = await signInWithPhoneNumber(auth, phoneNumber, verify);

    return res; // return the response  to use send otp in component

  } catch (error: any) {
    console.log(error.message, "Error sending OTP");
    throw error;
  }
};


export const verifyOtp = (otp: string, confirmationResult: any) => async (dispatch : AppDispatch) => {
    try {

        // confirm OPT

        const result = await confirmationResult.confirm(otp);

        // fetch user role  from firebase 

        const userDoc = await getDoc(doc(db, "users", result.user.uid));
        const  role = userDoc.exists() ? userDoc.data().role : "User";

        // dispatch login user action

        dispatch(
            loginUser({
                user: result.user,
                role: role as "admin" | "User",
            })
        );  
          
    }catch (error:any) {
        console.log(error.message, "Error verifying OTP");
        throw error;
        
    }
};



// logout user
export const logout =
  () => async (dispatch: AppDispatch) => {
    try {
      // Sign out user from Firebase
      await auth.signOut();

      // Dispatch logout action
      dispatch(logoutUser());
    } catch (error: any) {
      console.error("Error logging out:", error.message);
      throw error;
    }
  };
