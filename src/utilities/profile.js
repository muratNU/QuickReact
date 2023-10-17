import { useAuthState, useDbData } from "./firebase";

export const useProfile = () => {
  const [user] = useAuthState();
  const [isAdmin, isLoading, error] =  useDbData(`/admins/${user?.uid}`);
  return [{ user, isAdmin }, isLoading, error];
};
