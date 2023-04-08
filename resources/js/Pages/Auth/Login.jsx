import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === 'checkbox' ? event.target.checked : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <Guest>
      <Head title="Log in" />

      {status && (
        <div className="mb-3 font-medium text-sm text-green-600">{status}</div>
      )}

      <ValidationErrors errors={errors} />

      <form onSubmit={submit}>
        <div className="mt-6">
          <Label forInput="email" value="Email" />
          <Input
            type="text"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            handleChange={onHandleChange}
          />
        </div>

        <div className="mt-4">
          <Label forInput="password" value="Password" />
          <Input
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            handleChange={onHandleChange}
          />
        </div>

        <div className="block mt-6">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              value={data.remember}
              handleChange={onHandleChange}
            />
          </label>
        </div>

        <div className="flex items-center justify-between mt-6">
  <div>
    <Link
      href={route('password.request')}
      className="text-sm text-blue-600 hover:text-blue-900"
    >
      Forgot your password?
    </Link>
  </div>

  <Button className="ml-3" processing={processing}>
    Log in
  </Button>
</div>


        <div className="text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link
            href={route('register')}
            className="text-green-600 hover:text-green-900 font-bold"
          >
            Register here
          </Link>
        </div>
      </form>
    </Guest>
  );
}
