export default function (schema, options) {
  schema.statics.getEnumValues = function (fieldName) {
    const fieldDef = this.schema.paths[fieldName];

    if (!fieldDef) {
      throw new Error(`Mongoose plugin mongoose-enum-values failed to find path ${fieldName} in schema`);
    }

    return {
      values: fieldDef.enumValues,
      default: fieldDef.defaultValue
    };
  };
}
//# sourceMappingURL=index.js.map