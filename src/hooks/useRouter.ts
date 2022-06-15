import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();
  return {
    goBack() {
      navigate(-1);
    },
    push(url: string) {
      navigate(url);
    },
  };
};
