'use strict';

/**
 * freefire service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::freefire.freefire');
