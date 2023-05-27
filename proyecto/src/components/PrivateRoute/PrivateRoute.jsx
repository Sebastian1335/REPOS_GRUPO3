import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PrivateRoute = ({ children, rolesPermitidos }) => {
  const router = useRouter();

  const isAuthorized = () => {
    const rolUsuario = localStorage.getItem('rol');

    // Verificar si el rol del usuario está permitido para acceder a la página
    return rolesPermitidos.includes(rolUsuario);
  };

  useEffect(() => {
    if (!isAuthorized()) {
      router.push('/accesoDenegado');
    }
  }, []);

  if (!isAuthorized()) {
    return null;
  }

  return children;
};

export default PrivateRoute;
