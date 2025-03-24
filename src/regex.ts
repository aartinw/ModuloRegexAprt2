export const resultadoFinal = (contenido: string) => {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
  return imgRegex.exec(contenido);
};
