import ButtonBack from '@/components/ButtonBack';

const NotFound = () => {
  return (
    <div className='grid gap-4'>
      <h1 className='text-center text-2xl'>Error 404 : Página no encontrada</h1>
      <div className='text-center'>
        <ButtonBack>Volver</ButtonBack>
      </div>
    </div>
  );
};
export default NotFound;
