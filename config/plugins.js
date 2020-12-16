module.exports = {
	upload: {
		provider       : 'google-cloud-storage',
		providerOptions: {
			bucketName : 'eu.artifacts.apartmany-astrid-admin.appspot.com',
			publicFiles: false,
			uniform    : false,
			basePath   : '',
		},
	},
}
