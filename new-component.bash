#!/bin/bash

if [ $# -ne 1 ]; then
	echo "Usage: $0 <component-name>"
	exit 1
fi

component_name=$1

component_name_lower=$(echo $component_name | awk '{print tolower($0)}')

echo "Creating component: ./components/${component_name_lower}.js"

template="class ${component_name} extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\t}\n\n\tconnectedCallback() {\n\t\tthis.innerHTML = \`<h1>${component_name}</h1>\`;\n\t}\n}\n\ncustomElements.define(\"${component_name_lower}-component\", ${component_name});"

if [ -f ./components/${component_name_lower}.js ]; then
	echo "File already exists"
	exit 1
fi

echo -e $template > ./components/${component_name_lower}.js
