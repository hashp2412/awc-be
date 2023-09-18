'use strict';

/**
 * read-more service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::read-more.read-more');
