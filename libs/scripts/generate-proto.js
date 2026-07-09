const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();

const protoDir = path.join(ROOT, 'libs', 'proto');
const outputDir = path.join(protoDir, 'generated');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const protoFiles = fs
    .readdirSync(protoDir)
    .filter(file => file.endsWith('.proto'));

if (protoFiles.length === 0) {
    console.log('No proto files found.');
    process.exit(0);
}

for (const file of protoFiles) {

    console.log(`Generating ${file}`);

    execSync(
        `protoc \
--plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_out=${outputDir} \
--ts_proto_opt=nestJs=true,outputServices=generic-definitions,esModuleInterop=true,useOptionals=messages \
-I=${protoDir} \
${path.join(protoDir, file)}`,
        {
            stdio: 'inherit',
        },
    );
}

console.log('\n✅ Proto generation completed.');