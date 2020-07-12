var addon = ac(app, { config: {
    descriptorTransformer: function(descriptor, config) {
      if (config.environment() === "production") {
        descriptor.key = "production-key";
      }
      return descriptor;
    }
  }});