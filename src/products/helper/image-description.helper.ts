//Funcion para renombrar si en caso se repiten el nombre crea uno aleatorio
export const renameImage = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const ext = file.originalname.split('.').pop();
  const randomString = Math.random().toString(36).substring(2, 10);

  const newFileName = `${name}-${randomString}.${ext}`;

  callback(null, newFileName);
};
