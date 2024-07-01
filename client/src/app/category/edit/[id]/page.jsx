'use client';
import SaveButton from '../../../components/SaveButton';
import CancelButton from '../../../components/CancelButton';
import { useForm } from 'react-hook-form';
import { useCategory } from '../../../hooks/useCategory';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
const UpdateCategory = () => {
  const { id } = useParams();

  //Traer funciones del producto
  const { updateCategoryMutation, useGetCategoryById } = useCategory();

  const { data: category, isLoading: isLoadingCategory } =
    useGetCategoryById(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
    },
  });

  useEffect(() => {
    if (!isLoadingCategory && category) {
      reset({
        name: category.name,
      });
    }
  }, [category, isLoadingCategory]);

  const onSubmit = async (data) => {
    updateCategoryMutation.mutate({ id, data });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        className=" text-[#1a4545]"
      >
        <div className="flex justify-between">
          <h2 className="text-2xl ">Crear Producto</h2>
          <div className="flex gap-4">
            <CancelButton href={'/category'} />
            <SaveButton />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-12 gap-6 max-md:grid-cols-1">
          <div className="flex flex-col gap-4 col-span-7">
            <label className="flex flex-col gap-2">
              Nombre del producto
              <input
                className="border-2 h-10 rounded-md p-2"
                placeholder="Nombre"
                autoFocus="true"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Nombre es requerido',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Nombre debe tener menos de 20 caracteres',
                  },
                  minLength: {
                    value: 2,
                    message: 'Nombre debe tener al menos 2 caracteres',
                  },
                })}
              />
              {errors.name && (
                <span className="text-sm text-red-500 ">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
