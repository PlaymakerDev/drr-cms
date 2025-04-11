import { useEffect, useRef } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { signIn } from '@/store/features/userSlice';

function StoreProvider({ user, children }) {
  const dispatch = useAppDispatch();
  const userRef = useRef();

  useEffect(() => {
    if (!userRef.current) {
      dispatch(signIn(user));
      userRef.current = user;
    }
  }, [user, dispatch]);

  return { children };
}

export default StoreProvider;
