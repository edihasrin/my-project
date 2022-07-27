'use strict';

/**
 * freefire router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::freefire.freefire');
