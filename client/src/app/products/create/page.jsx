import SaveButton from '../../components/SaveButton';
const Create = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <h2 className="text-2xl text-[#1a4545]">Crear Producto</h2>
        <SaveButton href={'products/create'} />
      </div>
    </div>
  );
};

export default Create;
