import { createContext} from 'react';
const UserContext = createContext({
    loggedInUser: "Test User"
});
export default UserContext;