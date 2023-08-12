'use strict';

/**
 * college service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::college.college');
