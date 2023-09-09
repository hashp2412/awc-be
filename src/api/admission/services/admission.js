'use strict';

/**
 * admission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admission.admission');
