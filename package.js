Package.describe({
  summary: "Meteor package for turnkey solution to sorting, paging, and filtering Meteor collections"
});

Package.on_use(function(api) {
  api.use(
	  'underscore',
	  ['client', 'server']
  );

  api.add_files(
	  ['filter-collections-client.js'],
	  ['client']
  );
  api.add_files(
	  ['filter-collections-server.js'],
	  ['server']
  );
});
