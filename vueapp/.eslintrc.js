module.exports = {
    extends: [
    'plugin:vue/vue3-recommended',  
    ],
    rules: {
        "vue/multi-word-component-names": "off"
    },
    "globals": {
        "defineProps": "readonly",
        "defineEmits": "readonly",
        "defineExpose": "readonly",
        "withDefaults": "readonly"
    }
}


//   "eslintConfig": {
//     "root": true,
//     "env": {
//       "node": true
//     },
//     "extends": [
//       "plugin:vue/vue3-essential",
//       "eslint:recommended"
//     ],
//     "parserOptions": {
//       "parser": "@babel/eslint-parser"
//     },
//     "rules": {
//       "vue/multi-word-component-names": "off"
//     },
//     "globals": {
//       "defineProps": "readonly",
//       "defineEmits": "readonly",
//       "defineExpose": "readonly",
//       "withDefaults": "readonly"
//     }
//   },