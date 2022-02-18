# Rest client generation

Generate Typescript client for Kameleo Rest API.

## Build instructions

### Step 1

```powershell
npm install -g autorest
```

### Step 2

Update the swagger.json

### Step 3

```powershell
.\build.ps1
```

## Notes

* Generate code based on `V2` version, you can add `--legacy` flag to the command line to get the previous behavior.
* You may have to use the beta version of autorest with specific node versions: `autorest --version=beta`

## Publish instructions

### Step 1: Setup node modules

```powershell
npm install
```

### Step 2: Build and package

```powershell
npm prepack
```

### Step 3: Publish to repository manager

```powershell
npm publish
```
