# trainApp
## 简介 react-hooks 开发携程火车票

### 目录简介
1. docs 项目资料整理
2. client 客户端
    1. 使用 npx create-react-app client --template typescript 创建项目
    2. hooks eslint检测
        > yarn add eslint-plugin-react-hooks
    3. 配置eslint 
        ```json
        "eslintConfig": {
            "extends": "react-app",
            "plugins": [
              "react-hooks"
            ],
            "rules": {
              "react-hooks/rules-of-hooks": "error"
            }
          },
```
3. server 服务端数据mock
