import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'

export function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
        </Routes>
    )
}