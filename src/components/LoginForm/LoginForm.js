import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>Email</label>
      <input type="email" name="email" className={css.input} />

      <label className={css.label}>Password</label>
      <input type="password" name="password" className={css.input} />

      <button type="submit" className={css.button}>
        Log In
      </button>
    </form>
  );
};
