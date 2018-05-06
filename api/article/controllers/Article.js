'use strict';

/**
 * Article.js controller
 *
 * @description: A set of functions called "actions" for managing `Article`.
 */

module.exports = {

  /**
   * Retrieve article records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.article.fetchAll(ctx.query);
  },

  /**
   * Retrieve a article record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.article.fetch(ctx.params);
  },

  /**
   * Create a/an article record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.article.add(ctx.request.body);
  },

  /**
   * Update a/an article record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.article.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an article record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.article.remove(ctx.params);
  }
};
