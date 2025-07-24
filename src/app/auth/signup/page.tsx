import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
//import { signUpSchema } from '../model/schema';
//import { useSignUp } from '../model/useSignUp';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SignUpForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate: signUp, isLoading } = useSignUp();

  return (
    <form onSubmit={handleSubmit((data) => signUp(data))}>
      <Input {...register("name")} placeholder="Full Name" />
      <Input {...register("email")} placeholder="Email" />
      <Input {...register("password")} type="password" placeholder="Password" />
      <Button type="submit" disabled={isLoading}>Sign Up</Button>
    </form>
  );
}
