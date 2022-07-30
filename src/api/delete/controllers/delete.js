module.exports = {
  async lihatSemua(ctx, next) {
    try {
      const data = await strapi.service("api::delete.delete").lihatSemua();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
  async hapusSatu(ctx, next) {
    try {
      const { key } = ctx.params;
      // console.log(id);

      const data = await strapi.service("api::delete.delete").hapusSatu(key);

      return data;

      // ctx.body = data;
      // console.log("id nya", ctx.params.id);
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
