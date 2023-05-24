import { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";
import styles from "@/styles/Account.module.css";

interface SignoutProps {
        setSwitch: React.Dispatch<React.SetStateAction<boolean>>
    }

export default function Signout({ setSwitch } : SignoutProps) {
    const { user, setUser, setIsBookmarkArr } = useContext(UserContext)

    const SignOut = () => {
        localStorage.removeItem('SccfmPhDeV')
        setUser({ email: null, id: null, bookmarks: {movies: [], tvSeries: []} })
        setIsBookmarkArr([])
    }

    return (
    <div className={styles.formBox}>
        <p>Currently Login as {user.email}</p>
        <button type='button' onClick={SignOut}>Sign Out</button>
    </div>
    );
}
