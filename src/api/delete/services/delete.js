module.exports = {
  lihatSemua: async () => {
    // console.log("Haloooooooooo");
    try {
      // fetching data
      const entries = await strapi.db.query("api::key.key").findMany({
        select: ["id", "bypass_key"],
      });
      //   const entries = await strapi.entityService.findMany("api::key.key", {
      //     fields: ["id", "bypass_key"],
      //   });

      // reduce the data to the format we want to return
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
          acc.push({
            id: item.id,
            bypass_key: item.bypass_key || "",
          });
          return acc;
        }, []);
      }

      // return the reduced data
      return entriesReduced;
    } catch (err) {
      return err;
    }
  },
  hapusSatu: async (key) => {
    try {
      //   // fetching data
      //   const entries = await strapi.db.query("api::key.key").findOne({
      //     where: { bypass_key: key },
      //   });
      const entries = await strapi.db.query("api::key.key").delete({
        where: { bypass_key: key },
      });

      //   // reduce the data to the format we want to return
      //   let entriesReduced;
      //   if (entries && Array.isArray(entries)) {
      //     entriesReduced = entries.reduce((acc, item) => {
      //       acc = acc || [];
      //       acc.push({
      //         id: item.id,
      //         bypass_key: item.bypass_key || "",
      //       });
      //       return acc;
      //     }, []);
      //   }

      //   // return the reduced data
      return entries;
    } catch (err) {
      return err;
    }
  },
};
