'use strict';

/**
 * admission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::admission.admission');
