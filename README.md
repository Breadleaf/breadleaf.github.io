# breadleaf.github.io blog page

## Setup

use `.venv` as that is what the `.gitignore` is using

```
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

## Use

- `./posts/scripts` is where all relevant automation is found

- `./posts/markdown` is where all files that will be compiled are found

- `./posts/html` are the final files, any changes made will be overwritten on
subsequent compiles

## Development

```
python3 -m http.server <port>
```
