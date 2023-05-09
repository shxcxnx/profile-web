import { Navigate, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../screens/HomeScreen';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
        </Routes>
    );
}

export default AppRouter;
