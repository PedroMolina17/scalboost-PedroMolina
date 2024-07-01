'use client';
import { useParams } from 'next/navigation';
import SaveButton from '../../../components/SaveButton';
import CancelButton from '../../../components/CancelButton';
import { useForm } from 'react-hook-form';
import { useCategory } from '../../../hooks/useCategory';
import { useProduct } from '../../../hooks/useProduct';
import { useEffect } from 'react';
import { format } from 'date-fns';

const ProductUpdate = () => {
  const { id } = useParams();
  const { updateProductMutation, useGetProductById } = useProduct();
  const { useGetAllCategories } = useCategory();

  const { data: products, isLoading: isLoadingProducts } =
    useGetProductById(id);

  const { data: categories, isLoading: isLoadingCategories } =
    useGetAllCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      image_url: null,
      cantidad: '',
      precio: '',
      id_category: '',
    },
  });

  //Establecemos los datos traidos en el input
  useEffect(() => {
    if (!isLoadingProducts && products) {
      reset({
        name: products.name,
        description: products.description,
        cantidad: products.cantidad,
        precio: products.precio,
        id_category: products.id_category,
        image_url: null,
      });
    }
  }, [products, isLoadingProducts]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('cantidad', data.cantidad);
    formData.append('precio', data.precio);
    formData.append('id_category', data.id_category);
    if (data.image_url && data.image_url[0]) {
      formData.append('image_url', data.image_url[0]);
    }

    formData.append('fecha', formattedDate);
    console.log(formattedDate);

    updateProductMutation.mutate({ id, data: formData });
    console.log({ id, data: formData });
  };

  return isLoadingProducts ? (
    <div>Loading...</div>
  ) : (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        className=" text-[#1a4545]"
      >
        <div className="flex justify-between ">
          <h2 className="text-2xl ">Actualizar Producto</h2>
          <div className="flex gap-4">
            <CancelButton href={'/products'} />
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
            <label className="flex flex-col gap-2">
              Descripcion del producto
              <textarea
                className="border-2  rounded-md p-2"
                placeholder="Descripcion  "
                {...register('description', {
                  required: {
                    value: true,
                    message: 'Descripcion es requerido',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Descripcion debe tener menos de 20 caracteres',
                  },
                  minLength: {
                    value: 2,
                    message: 'Descripcion debe tener al menos 2 caracteres',
                  },
                })}
              />
              {errors.description && (
                <span className="text-sm text-red-500 ">
                  {errors.description.message}
                </span>
              )}
            </label>
            <label className="flex flex-col gap-2">
              Cantidad del Producto
              <input
                className="border-2  rounded-md p-2"
                type="number"
                placeholder="0"
                {...register('cantidad', {
                  required: {
                    value: true,
                    message: 'Cantidad es requerido',
                  },
                })}
              />
              {errors.cantidad && (
                <span className="text-sm text-red-500 ">
                  {errors.cantidad.message}
                </span>
              )}
            </label>

            <label className="flex flex-col gap-2">
              Precio del Producto
              <input
                className="border-2  rounded-md p-2"
                type="number"
                placeholder="$ 0.00 "
                {...register('precio', {
                  required: {
                    value: true,
                    message: 'Precio es requerido',
                  },
                })}
              />
              {errors.precio && (
                <span className="text-sm text-red-500 ">
                  {errors.precio.message}
                </span>
              )}
            </label>
          </div>

          <div className="flex flex-col gap-4 col-span-5">
            {isLoadingCategories ? (
              <div>Loading...</div>
            ) : (
              <label className="flex flex-col gap-2">
                Categoria del producto
                <select
                  className=" h-10 border-2 rounded-md p-2"
                  {...register('id_category', {
                    required: 'Selecciona una categoría',
                  })}
                >
                  {categories &&
                    categories.map((category) => (
                      <option
                        key={category.id_category}
                        value={category.id_category}
                      >
                        {category.name}
                      </option>
                    ))}
                </select>
                {errors.id_category && (
                  <span className="text-sm text-red-500">
                    {errors.id_category.message}
                  </span>
                )}
              </label>
            )}
            <label className="flex flex-col gap-2">
              Subir imagen del producto
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                {...register('image_url')}
              />
              {errors.image_url && (
                <span className="text-sm text-red-500">
                  {errors.image_url.message}
                </span>
              )}
            </label>
            <img
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${products.image_url}`}
              alt="Imagen del producto"
              className="w-60"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdate;
