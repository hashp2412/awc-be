'use strict';

/**
 * cms-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cms-blog.cms-blog');
