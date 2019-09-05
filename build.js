const fs = require('fs');
const exec = require("child_process").exec;

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var path = process.argv[2];

fs.readdir(path, function(err, items) {
    let md_files = [];

    // Look for markdown files
    for (var i=0; i<items.length; i++) {
	let fname = items[i];
	console.log(fname);
	if (fname.length > 3) {
	    let ext = fname.slice(fname.length - 3); // just ".md" if right
	    if (ext === ".md") {
		md_files.push(fname);
	    }
	}
    }

    console.log("md_files", md_files);

    // Compile markdown files into html
    for (let fname of md_files) {
	if (fname.length > 7) {
	    if (fname.slice(fname.length - 7) === "-src.md") {
		let output_name = fname.slice(0, fname.length - 7) + ".html";
		let cmd = "pandoc " + fname + " > " + output_name;
		console.log("compiling", fname, "to", output_name, "by `", cmd, "`");
		exec(cmd, (error, stdout, stderr) => {
		    console.log("results", error, stdout, stderr);
		})
		exec('open ' + output_name);
	    }
	}
    }
});
