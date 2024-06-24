import { signOutAction } from '@/utils/actions';
import Button from './Button';

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <Button variant="sm">Sign Out</Button>
    </form>
  );
}

export default SignOutButton;
