const { useContext } = require("react")
const { default: UserContext } = require("./UserContext")


const useUser = () => {
    const { user } = useContext(UserContext);
    return user;
}

export default useUser;