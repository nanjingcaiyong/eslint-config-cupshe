module.exports = {
  'env': {
    'es6': true,          // 自动启用es6语法, 支持新的 ES6 全局变量或类型（比如 Set 等新类型)
    'browser': true,      // 启用浏览器环境中的全局变量
    'node': true          // 启用Node.js 全局变量和 Node.js 作用域
  },
  'parserOptions': {
    'ecmaVersion': 'latest',  // 指定你想要使用的 ECMAScript 版本
    'ecmaFeatures': {     // 表示你想使用的额外的语言特性
      'jsx': true         // 启用 JSX
    }
  },
  'globals': {
    'defineEmits': 'writable',
    'defineProps': 'writable',
    'defineExpose': 'writable'
  },
  'rules': {
    /* section 1 */
    // error: 生产环境禁止代码中使用console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // error: 生产环境禁止代码中使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // error: 生产环境禁止代码中使用alert
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // off; 不允许使用空函数，除非在空函数里面给出注释说明
    'no-empty-function': 'error',
    // error; 禁止使用没必要的 {} 作为代码块
    'no-lone-blocks': 'error',
    // warn; 对函数的参数重新赋值给出警告
    'no-param-reassign': 'warn',
    // error; 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',
    // error; return语句中禁止进行赋值语句操作
    'no-return-assign': 'error',
    // off; 允许location.href = "javascript:void(0)"的形式
    'no-script-url': 'off',
    // error; 禁止throw一个字面量，比如 throw 2, throw "error";
    'no-throw-literal': 'error',
    // off; TODO 和 FIXME 类型的注释用的比较多，不限制
    'no-warning-comments': 'off',
    // error; 禁止冗余的括号
    'no-extra-parens': 'error',
    // error; 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': 'error',
    // error; 禁止不要的分号
    'no-extra-semi': 'error',
    // error; switch case语句里面一定需要default分支
    'default-case': 'warn',
    // error; async函数里面必须有await
    'require-await': 'error',
    // error; 把var关键字看成块级作用域，防止变量提升导致的bug
    'block-scoped-var': 'error',
    // warn; get和set没有成对出现时给出警告
    'accessor-pairs': 'warn',
    // warn; 浏览器端不允许定义全局变量和全局函数，可以通过挂载到window对象上和使用IIFE表达式
    'no-implicit-globals': 'warn',
    // off; 允许这些写法，性能上更好
    'no-implicit-coercion': 'off',
    // error; 禁止修改原生对象
    'no-extend-native': 'error',
    // error; 对于数据相关操作函数比如reduce, map, filter等，callback必须有return
    'array-callback-return': 'off',

    /* section 2: 变量 */
    'no-unused-vars': 'error',
    // off; 变量定义时强制赋值或者强制先定义后赋值有点严格
    'init-declarations': 'off',
    // off; foo == null 用于判断 foo 不是 undefined 并且不是 null，比较常用，故允许此写法
    'no-eq-null': 'off',
    // error; 禁止使用未定义的变量, typeof 后面的变量除外
    'no-undef': [
      'error',
      {
        'typeof': false
      }
    ],
    // error; 变量使用之前必须进行定义
    'no-use-before-define': 'error',
    // error; 禁止将undefined当成标志符
    'no-undefined': 'warn',
    /* section 3: 代码风格 */
    // error; 要求函数圆括号之前有一个空格
    'space-before-function-paren': 'error',
    // off; 数组前后括号必须换行的要求有点严格，不采纳
    'array-bracket-newline': 'off',
    // error; 数组的括号前后禁止有空格
    'array-bracket-spacing': ['error', 'never'],
    // off; 数组里面的元素强制换行有点严格，不采纳
    'array-element-newline': 'off',
    // error; 代码块如果在一行，则大括号内的首尾必须有空格，比如 function (a, b) { retur a + b; }
    'block-spacing': [
      'error',
      'always'
    ],
    // off; 变量命名需要以驼峰命名法，对属性字段不做限制
    'camelcase': ['off'],
    // error; 大括号的用法要求
    'brace-style': 'error',
    // off; 注释的首字母必须大写，对此不做限制
    'capitalized-comments': 'off',
    // error; 逗号后面强制要求加空格
    'comma-spacing': 'error',
    // error; 逗号必须写在最后面
    'comma-style': [
      'error',
      'last'
    ],
    // off; 函数名和执行它的括号之间禁止有空格
    'func-call-spacing': ['off', 'never'],
    // off; 函数赋值给变量时，函数名必须和赋值的变量名一致的限制不采纳
    'func-name-matching': 'off',
    // off; 不限制匿名函数的命名问题
    'func-names': 'off',
    // off; 可以使用function声明或function表达式
    'func-style': 'off',
    // error; 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'strict'
      }
    ],
    // error; 关键字前后必须要加上空格
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    // error; 函数的参数禁止超过 10 个
    'max-params': ['error', 10],
    // off; 注释的位置不进行限制
    'line-comment-position': 'off',
    // warn; 单行最多允许200个字符, 非常长的代码影响阅读
    'max-len': ['warn', {
      'code': 200,
      'tabWidth': 2,
      'ignoreComments': true,         // 忽略注释
      'ignoreUrls': true,             // 忽略url
      'ignoreTemplateLiterals': true, // 忽略字符串模板
      'ignoreStrings': true,          // 忽略含有双引号或单引号字符串的行
      'ignoreTrailingComments': true, // 忽略拖尾注释
      'ignoreRegExpLiterals': true,   // 忽略包含正则表达式的行
    }],
    // warn; 单文件最大500行, 不包含空白行和注释行
    'max-lines': ['warn', {
      'max': 1000,
      'skipBlankLines': true,
      'skipComments': true
    }],
    // error; 构造函数的必须以大写字母开头
    'new-cap': ['error', { 'capIsNew': false }],
    // error; new 后面类必须带上括号
    'new-parens': 'error',
    // error; 要求花空号{}内前后必要带空格
    'object-curly-spacing': ['error', 'always'],

    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': false }],
    // error; 禁用行尾空格
    'no-trailing-spaces': ['error', {
      'ignoreComments': true, // 忽略注释
      'skipBlankLines': true  // 忽略空行
    }],
    // error; 禁止混用空格和缩进
    'no-mixed-spaces-and-tabs': 'error',
    // off; 连续赋值比如 a = b = c = 4; 不限制
    'no-multi-assign': 'off',
    // error; 不允许出现连续空行
    'no-multiple-empty-lines': ['error', {
      'max': 1
    }],
    // off; 允许变量名中出现下划线
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    // error; 禁止属性前有空格，比如 foo. bar()
    'no-whitespace-before-property': 'error',
    // error; 强制单个语句的位置
    'nonblock-statement-body-position': ['error', 'beside'],
    // error; 大括号内的首尾必须有换行
    'object-curly-newline': [
      'error',
      {
        'multiline': true,
        'minProperties': 5,
        'consistent': true
      }
    ],
    // off; 声明变量时，禁止一条语句声明多个变量
    'one-var': ['off', {
      'var': 'never',
      'let': 'never',
      'const': 'never'
    }],
    // error; 必须使用单引号
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    // error; 结尾必须有分号
    'semi': 'error',
    // error; 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    // error; if, function 等的大括号之前必须要有空格
    'space-before-blocks': ['error', 'always'],
    // error; 分号必须写在行尾，禁止在行首出现
    'semi-style': ['error', 'last'],
    // error; 小括号内的首尾禁止有空格
    'space-in-parens': ['error', 'never'],
    // error; 操作符左右必须有空格, const ret = "hello" + "world";
    'space-infix-ops': 'error',
    // error; case 子句冒号前禁止有空格，冒号后必须有空格
    'switch-colon-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    // section 4: ES6 语法相关
    // off; 箭头函数返回值可以只是一个值，没必须一定用大括号写成多条语句.
    'arrow-body-style': 'off',
    // off; 箭头函数的参数必须用括号包裹起来，限制去掉。当只有一个参数时，没必要使用括号
    'arrow-parens': 'off',
    // error; 箭头函数的箭头前后必须有空格
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    // error; generator 的 * 前面禁止有空格，后面必须有空格
    'generator-star-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    // error; 禁止import重复模块
    'no-duplicate-imports': 'error',
    // error; 禁止采用var去定义变量，必须使用let或者const
    'no-var': 'error',
    // error; Promise 的 reject方法必须传入 Error 对象，而不能是字面量
    'prefer-promise-reject-errors': 'off',
    // off; 必须使用箭头函数作为回调，不采纳
    'prefer-arrow-callback': 'off',
    // error; 变量如果没有发生修改，则必须使用const进行命名
    'prefer-const': 'warn',
    // off; 强制使用结构的限制，不采纳
    'prefer-destructuring': 'off',
    // off; 不强制使用模板字符串，字符串拼接也是可取的
    'prefer-template': 'off',
    // error; ... 的后面禁止有空格
    'rest-spread-spacing': ['error', 'never'],
    // off; import 的排序不用限制
    'sort-imports': 'off',
    // error; 模板字符串内的首尾禁止有空格，比如${test}不要写成${ test }
    // TODO: 当jsx代码里有xxProp={``}会导致eslint出错奔溃，先注释
    // "template-curly-spacing": ["error", "never"],
    // error; yield* 后面必须加空格
    'yield-star-spacing': ['error', 'after'],
    'react/prop-types': 'off',
    // error; 缩进两个空格
    'indent': ['error', 2],

    // section 5: 重置vue
    // vue3
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    // vue2
    'vue/no-v-text-v-html-on-component': 'off'
  }
};