'use strict';

/**
 * meta-tag router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::meta-tag.meta-tag');
