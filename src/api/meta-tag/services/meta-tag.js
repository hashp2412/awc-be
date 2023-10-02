'use strict';

/**
 * meta-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meta-tag.meta-tag');
