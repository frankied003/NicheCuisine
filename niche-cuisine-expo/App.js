import { NavigationContainer } from '@react-navigation/native';

// Stack imports
import MainStack from './Stacks/mainStack';

// Need to have functions and listeners checking for auth status and redirecting to stacks

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
