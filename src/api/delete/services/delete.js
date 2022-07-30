module.exports = {
  lihatSemua: async () => {
    // console.log("Haloooooooooo");
    try {
      // fetching data
      const entries = await strapi.db.query("api::key.key").findMany({
        select: ["id", "bypass_key", "createdAt"],
      });

      return entries;
    } catch (err) {
      return err;
    }
  },
  hapusSatu: async (key) => {
    try {
      const entries = await strapi.db.query("api::key.key").delete({
        where: { bypass_key: key },
      });

      const semuaData = await strapi.db.query("api::key.key").findMany({
        select: ["id", "bypass_key", "createdAt"],
      });

      // hapus key semua key jika sudah kadaluarsa
      if (semuaData.length !== 0) {
        let idDataExpiry = semuaData
          .filter((i) => {
            let waktuPembuatanKey = new Date(i.createdAt);
            let waktuSekarang = Date.now();
            let selisihWaktu = Math.abs(waktuSekarang - waktuPembuatanKey);
            // 30 min = 1800000 ms
            // 10 min = 600000 ms
            // 3 min = 180000 ms
            // 2 min = 120000 ms
            // 1 min = 60000 ms
            if (selisihWaktu > 30000) {
              return i.id;
            }
          })
          .map((i) => i.id);

        await strapi.db.query("api::key.key").deleteMany({
          where: {
            id: idDataExpiry,
          },
        });
      }

      return entries;
    } catch (err) {
      return err;
    }
  },
};
