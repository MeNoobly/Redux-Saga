import { useDispatch, useSelector } from "react-redux";
import { asyncDecrementCreator, asyncIncrementCreator} from "./store/countReducer";
import { fetchUsers } from "./store/userReducer";

const App = () => {
    const count = useSelector(state => state.countReducer.count);
    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();

    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={() => dispatch(asyncIncrementCreator())}>Инкремент</button>
                <button onClick={() => dispatch(asyncDecrementCreator())}>Декркемент</button>
                <button onClick={() => dispatch(fetchUsers())}>Получить пользователей</button>
            </div>
            <div>
                {users.map((user) => 
                    <div>
                        {user.name}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
