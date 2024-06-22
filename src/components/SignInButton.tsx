import { signInAction } from '@/utils/actions';
import Image from 'next/image';

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium border md:px-5">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height={16}
          width={16}
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
