import {
    load
} from '@/utils/load'

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-05-13 11:35:24 
 * @Desc: 编译html 
 */
const html = (preprocessor, code) => {
    return new Promise((resolve, reject) => {
        try {
            switch (preprocessor) {
                case 'html':
                    resolve(code)
                    break;
                case 'pug':
                    resolve(window.pug.render(code))
                default:
                    resolve('')
                    break;
            }
        } catch (error) {
            reject(error)
        }
    })
}

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-05-13 11:35:30 
 * @Desc: 编译js 
 */
const js = (preprocessor, code) => {
    return new Promise((resolve, reject) => {
        try {
            let _code = ''
            switch (preprocessor) {
                case 'javascript':
                    resolve(code)
                    break;
                case 'babel':
                    _code = window.Babel.transform(code, {
                        presets: [
                            'es2015',
                            'es2016',
                            'es2017',
                            'react'
                        ]
                    }).code
                    resolve(_code)
                case 'typescript':
                    _code = window.typescript.transpileModule(code, {
                        reportDiagnostics: true,
                        compilerOptions: {
                            module: 'es2015'
                        }
                    }).outputText
                    resolve(_code)
                    break;
                case 'coffeescript':
                    _code = window.CoffeeScript.compile(code)
                    resolve(_code)
                    break;
                default:
                    resolve('')
                    break;
            }
        } catch (error) {
            reject(error)
        }
    })
}

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-05-13 11:35:34 
 * @Desc: 编译css 
 */
let sass = null
const css = (preprocessor, code) => {
    return new Promise((resolve, reject) => {
        try {
            switch (preprocessor) {
                case 'css':
                    resolve(code)
                    break;
                case 'less':
                    window.less.render(code)
                        .then((output) => {
                                resolve(output.css)
                            },
                            (error) => {
                                reject(error)
                            });
                    break;
                case 'sass':
                    if (!sass) {
                        sass = new window.Sass();
                    }
                    sass.compile(code, (result) => {
                        resolve(result.text)
                    });
                    break;
                case 'stylus':
                    window.stylus.render(code, (err, css) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(css)
                        }
                    });
                    break;
                case 'postcss':
                    window.postcss([window.cssnext]).process(code).then(result => {
                        resolve(result.css)
                    })
                    break;
                default:
                    resolve('')
                    break;
            }
        } catch (error) {
            reject(error)
        }
    })
}

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-09-10 16:03:32 
 * @Desc: 解析vue2 script语法 
 */
const parseVue2ScriptPlugin = (data) => {
    return function () {
        return {
            visitor: {
                // export default -> new Vue
                ExportDefaultDeclaration(path) {
                    path.replaceWith(
                        window.babelTypes.expressionStatement(
                            window.babelTypes.newExpression(
                                window.babelTypes.identifier('Vue'),
                                [
                                    path.get('declaration').node
                                ]
                            )
                        )
                    );
                },
                // 添加el属性、template属性
                ObjectExpression(path) {
                    if (path.parent && path.parent.type === 'NewExpression') {
                        path.node.properties.push(
                            // el
                            window.babelTypes.objectProperty(
                                window.babelTypes.identifier('el'),
                                window.babelTypes.stringLiteral('#app')
                            ),
                            // template
                            window.babelTypes.objectProperty(
                                window.babelTypes.identifier('template'),
                                window.babelTypes.stringLiteral(data.template.content)
                            ),
                        )
                    }
                }
            }
        }
    }
}

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-09-10 16:05:31 
 * @Desc: 解析vue3 script语法 
 */
const parseVue3ScriptPlugin = (data) => {
    return function () {
        return {
            visitor: {
                // export default -> Vue.create
                ExportDefaultDeclaration(path) {
                    path.replaceWith(
                        window.babelTypes.expressionStatement(
                            window.babelTypes.newExpression(
                                window.babelTypes.identifier('Vue'),
                                [
                                    path.get('declaration').node
                                ]
                            )
                        )
                    );
                },
                // 添加el属性、template属性
                ObjectExpression(path) {
                    if (path.parent && path.parent.type === 'CallExpression') {
                        path.node.properties.push(
                            // el
                            window.babelTypes.objectProperty(
                                window.babelTypes.identifier('el'),
                                window.babelTypes.stringLiteral('#app')
                            ),
                            // template
                            window.babelTypes.objectProperty(
                                window.babelTypes.identifier('template'),
                                window.babelTypes.stringLiteral(data.template.content)
                            ),
                        )
                    }
                }
            }
        }
    }
}

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-09-09 13:54:12 
 * @Desc: 解析出html、js、css 
 */
const parseVueComponentData = async (data, parseVueScriptPlugin) => {
    console.log(data)
    // html就直接渲染一个挂载vue实例的节点
    let htmlStr = `<div id="app"></div>`
    // 加载babel解析器
    await load(['babel'])
    // babel编译，通过编写插件来完成对ast的修改
    let jsStr = data.script ? window.Babel.transform(data.script.content, {
        presets: [
            'es2015',
            'es2016',
            'es2017',
        ],
        plugins: [
            parseVueScriptPlugin(data)
        ]
    }).code : ''
    console.log(jsStr)
    // 编译css
    let cssStr = []
    for(let i = 0; i < data.styles.length; i++) {
        let style = data.styles[i]
        let preprocessor = style.lang || 'css'
        if (preprocessor !== 'css') {
            await load([preprocessor])
        }
        let cssData = await css(preprocessor, style.content)
        cssStr.push(cssData)
    }
    return {
        html: htmlStr,
        js: jsStr,
        css: cssStr.join('\r\n')
    }
}

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-09-08 20:07:46 
 * @Desc: 编译vue单文件 
 */
const vue = (preprocessor, code) => {
    return new Promise(async (resolve, reject) => {
        try {
            let componentData
            let parseData
            switch (preprocessor) {
                case 'vue2':
                    componentData = window.VueTemplateCompiler.parseComponent(code)
                    parseData = await parseVueComponentData(componentData, parseVue2ScriptPlugin)
                    resolve(parseData)
                    break;
                case 'vue3':
                    componentData = window.VueTemplateCompiler.parseComponent(code)
                    parseData = await parseVueComponentData(componentData, parseVue3ScriptPlugin)
                    resolve(parseData)
                    break;
                default:
                    resolve('')
                    break;
            }
        } catch (error) {
            reject(error)
        }
    })
}

export default {
    html,
    js,
    css,
    vue
}