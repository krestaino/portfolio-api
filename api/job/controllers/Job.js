'use strict';

/**
 * Job.js controller
 *
 * @description: A set of functions called "actions" for managing `Job`.
 */

module.exports = {

  /**
   * Retrieve job records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.job.fetchAll(ctx.query);
  },

  /**
   * Retrieve a job record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.job.fetch(ctx.params);
  },

  /**
   * Create a/an job record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.job.add(ctx.request.body);
  },

  /**
   * Update a/an job record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.job.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an job record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.job.remove(ctx.params);
  }
};
