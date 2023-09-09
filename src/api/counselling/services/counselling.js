'use strict';

/**
 * counselling service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::counselling.counselling');
