module.exports = {
  routes: [
    {
      method: "GET",
      path: "/delete/semua",
      handler: "delete.hapusSatu",
    },
    {
      method: "GET",
      path: "/delete/:key",
      handler: "delete.hapusSatu",
    },
    {
      method: "GET",
      path: "/delete",
      handler: "delete.lihatSemua",
    },
  ],
};
