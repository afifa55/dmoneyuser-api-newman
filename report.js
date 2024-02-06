const newman = require('newman');
newman.run({
collection: require('./Collection/Dmoney-Users.postman_collection.json'), //pointing to local JSON file.
//environment: require('./collection/customer_api_env.json'), // pointing to local env file
reporters: 'htmlextra',
iterationCount: 1,
reporter: {
    htmlextra: {
export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
}
}
}, function (err) {
if (err) { throw err; }
console.log('collection run complete!');
});