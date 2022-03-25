import { NavigationContainer } from '@react-navigation/native';
import './firebase';

// Stack imports
import MainStack from './Stacks/mainStack';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
