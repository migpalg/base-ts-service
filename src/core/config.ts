export const config = {
  server: {
    port: process.env.PORT || 3000,
    serviceId: "properties-service",
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/properties",
  },
};
