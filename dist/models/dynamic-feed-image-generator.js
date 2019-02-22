"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feed_image_schema_1 = require("./feed-image.schema");
const dbs_1 = __importDefault(require("../services/dbs"));
function generate(feedSyncId) {
    const dynamicName = `feedsync-images-${feedSyncId}`;
    const dynamicModel = dbs_1.default.defaultDb.model(dynamicName, feed_image_schema_1.FeedImageSchema, dynamicName);
    return dynamicModel;
}
exports.default = generate;
//# sourceMappingURL=dynamic-feed-image-generator.js.map