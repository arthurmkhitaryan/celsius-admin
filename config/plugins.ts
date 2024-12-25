export default ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        local: {
          sizeLimit: 500 * 1024 * 1024,
        },
      },
    },
  },
});
