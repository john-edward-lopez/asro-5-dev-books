import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Obtener las cabeceras de la solicitud
  const headers = context.request.headers;

  // Obtener información de geolocalización desde Netlify
  const geo = {
    country: headers.get("x-nf-geolocation-country") || "Desconocido",
    region: headers.get("x-nf-geolocation-region") || "Desconocido",
    city: headers.get("x-nf-geolocation-city") || "Desconocido",
    latitude: headers.get("x-nf-geolocation-latitude") || "N/A",
    longitude: headers.get("x-nf-geolocation-longitude") || "N/A",
  };

  // Guardar los datos en locals para acceder desde Astro
  context.locals.geo = geo;

  return next();
});