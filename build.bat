:creates minified version and source map
:requires uglifyjs -- npm install uglify-js -g

set PROJECT_NAME=angular-pretty-checkable

uglifyjs ./src/%PROJECT_NAME%.js --comments --source-map ./dist/%PROJECT_NAME%.min.js.map --source-map-url %PROJECT_NAME%.min.js.map --output ./dist/%PROJECT_NAME%.min.js