# Weex Cross Platform App for Eleme

## Install Weex App

- Install Weex

see https://github.com/alibaba/weex

- Git Clone

```
git clone git@github.com:niyaoyao/weex-eleme-app.git
```

- Install node_modules

```sh
➜  ~ cd /Users/username/weex\-eleme\-app
➜  weex-eleme-app git:(develop) cd weex-we 
➜  weex-we git:(develop) weex index.we
ERR! ModuleNotFoundError: Module not found: Error: Cannot resolve module 'weex-components' in /Users/wangrongchao/weex-eleme-app/weex-we 
info Please try to enter directory where your we file saved, and run command 'npm install weex-components' 
➜  weex-we git:(develop) ✗ npm install weex-components
/Users/wangrongchao/weex-eleme-app/weex-we
└── weex-components@0.2.0 

npm WARN enoent ENOENT: no such file or directory, open '/Users/wangrongchao/weex-eleme-app/weex-we/package.json'
npm WARN weex-we No description
npm WARN weex-we No repository field.
npm WARN weex-we No README data
npm WARN weex-we No license field.
➜  weex-we git:(develop) ✗ weex index.we
ERR! ModuleNotFoundError: Module not found: Error: Cannot resolve module 'babel-runtime/core-js/object/assign' in /Users/wangrongchao/weex-eleme-app/weex-we/node_modules/weex-components/src 
info Please try to enter directory where your we file saved, and run command 'npm install babel-runtime' 
➜  weex-we git:(develop) ✗ npm install babel-runtime
/Users/wangrongchao/weex-eleme-app/weex-we
└─┬ babel-runtime@6.20.0 
  ├── core-js@2.4.1 
  └── regenerator-runtime@0.10.1 

npm WARN enoent ENOENT: no such file or directory, open '/Users/wangrongchao/weex-eleme-app/weex-we/package.json'
npm WARN weex-we No description
npm WARN weex-we No repository field.
npm WARN weex-we No README data
npm WARN weex-we No license field.
```

- Run with Playground

You must download Playground and install it on your mobile

```
➜  weex-we git:(develop) ✗ weex index.we --qr
```
