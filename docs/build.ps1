autorest --verbose --input-file=./docs/swagger.json --typescript --output-folder=./output --namespace=Kameleo.LocalApiClient --override-client-name=LocalApiClient --legacy
Copy-Item -Force -Recurse  -Path .\\output\* -Destination .
Remove-Item -Force -Recurse -Path .\\output
