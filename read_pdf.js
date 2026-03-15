const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('/tmp/agent_workspace/75576a3d-63e4-4db3-bd59-acabfedd63aa/.agent_uploads/testpdf.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error("Error parsing PDF:", error);
});
