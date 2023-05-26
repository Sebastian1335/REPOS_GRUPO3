import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PrivateRoute = ({ children, rolesPermitidos }) => {
  const router = useRouter();

  const isAuthorized = () => {
    const rolUsuario = localStorage.getItem('rolUsuario');

    // Verificar si el rol del usuario está permitido para acceder a la página
    return rolesPermitidos.includes(rolUsuario);
  };

  useEffect(() => {
    if (!isAuthorized()) {
      router.push('/accesoDenegado');
    }
  }, []);

  if (!isAuthorized()) {
    return null; // Opcionalmente, puedes mostrar un mensaje de error o una página de acceso denegado
  }

  return children;
};

export default PrivateRoute;
