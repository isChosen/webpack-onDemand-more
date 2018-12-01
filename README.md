#### <span style="color: #006699">webpack-onDemand-more</span>

- webpack-onDemand-more 是在 webpack-onDemand 项目的基础上改动，代码布局什么的没改变；
- <span style="color: #3333FF">整合 webpack 配置文件</span>，利用 `webpack-merge` 插件，将 webpack 开发环境配置`webpack.config.dev.js`和生产环境配置`webpack.config.pro.js`合并出一份公共的配置：`webpack.config.base.js`，让配置文件显得更简洁；
- <span style="color: #3333FF">加入了 Eslint</span>，`webpack.config.dev.js`开发环境配置文件中增加 eslint 对模块的编译，首先要安装依赖 `eslint-loader`，配置如下：
  ```javascript
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        use: "eslint-loader"
      }
    ];
  }
  ```
- <span style="color: #3333FF">编辑器支持</span>，编辑器（如 vs code）需要下载 ESLint 插件，而且项目目录下需要增加两个 eslint 的配置文件，这样就可以对项目中的 js(默认) 文件实时提示了。
  * `.eslintignore` 经配置使 eslint 规则只对 src 目录下的文件起作用，根目录下的其他文件不提示。文件内书写格式类似于 .gitignore：
    ```xml
    # Ignore all files ending with js in root directory
    # except src directory
    *.js
    !src/*
    ```
  * `.eslintrc.js` 是包含 eslint 一切规则的配置文件，本项目使用 <span style="color: #FF3366">airbnb</span> 的 eslint 规则：
  首先去 npm 官网搜索插件`eslint-config-airbnb`；
  按照页面介绍，先敲命令 `npm info "eslint-config-airbnb@latest" peerDependencies`；
  然后会提示需要安装什么依赖，提示应该是 4 个，安装好即可！
    ```json
    "eslint": "5.3.0",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "2.14.0",
    "eslint-plugin-jsx-a11y": "6.1.1",
    "eslint-plugin-react": "7.11.0"
    ```
- <span style="color: #3333FF">eslint 配置</span>，关于 eslint 的插件依赖建议都装在本地，尽量不在全局安装。以上依赖都装好了后，使用命令行初始化创建 `.eslintrc` 文件：`.\node_modules\.bin\eslint --init`，命令行会提示你选择一些初始化的配置，建议第一条选 `Answer questions about your style`和生成的 `.eslintrc`文件格式选 `JavaScript`（可以写注释），其他看你需要了（截图: static/images/global/eslint_init.png）。生成`.eslintrc.js`文件后，将 eslint 规则改成 Airbnb 的：`extends: "airbnb"`，其他额外规则写在`rules`中，可以覆盖其他规则。
- 完成！
