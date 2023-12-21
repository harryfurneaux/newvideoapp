
import {
    useLocation
} from "react-router-dom";
import { useEffect, useMemo } from "react";
import axios from "axios";
const LinkedInAuth = () => {
    function useQuery() {
        const { search } = useLocation();
        return new URLSearchParams(search);
    }
    const query = useQuery()

    useEffect(() => {
        axios.get('http://localhost:4000/auth/linkedin/callback', {
            params: {
                code: query.get('code'),
                state: query.get('state')
            }
        }).then(console.log)

    }, [])


    return <p>redirecting.......</p>
}

export default LinkedInAuth