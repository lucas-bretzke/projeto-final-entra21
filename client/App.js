import React from 'react';
import { MateriaScreen } from './screens/ProfessorScreens/MateriaScreen';
import { ProfessorHomeScreen } from './screens/ProfessorScreens/ProfessorHomeScreen';
import { PressencaScreen } from './screens/ProfessorScreens/PressencaScreen'
import { CriarProvasScreen } from './screens/ProfessorScreens/CriarProvasScreen';

export default function App() {
    return (
        <CriarProvasScreen />
    )
}




/*import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Router } from './routes';

export default function App() {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    )
}*/
