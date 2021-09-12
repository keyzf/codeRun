window.monaco.editor.defineTheme("OneDarkPro", {
    base: "vs-dark",
    inherit: true,
    rules: [
        // 没有匹配到的其他所有字符
        {
            "token": "",
            "foreground": "ABB2BF"
        },
        // 注释
        {
            "token": "comment",
            "foreground": "7f848e"
        },
        // 文档类型注释，比如：/**sfdhg**/
        {
            "token": "comment.doc",
            "foreground": "7f848e"
        },
        // 数字
        {
            "token": "number",
            "foreground": "D19A66"
        },
        // 正则表达式
        {
            "token": "regexp",
            "foreground": "56B6C2"
        },
        // 大写字母开头的变量
        {
            "token": "type",
            "foreground": "e5c07b"
        },
        // 分隔符，比如()%=-;[]:.{},!等
        {
            "token": "delimiter",
            "foreground": "56B6C2"
        },
        // html文件，分隔符
        {
            "token": "delimiter.html",
            "foreground": "ABB2BF"
        },
        // 大括号
        {
            "token": "delimiter.bracket",
            "foreground": "e5c07b"
        },
        // html文件，标签名
        {
            "token": "tag",
            "foreground": "E06C75"
        },
        // html元标签内容，比如<!DOCTYPE html>里的html
        {
            "token": "metatag.content.html",
            "foreground": "D19A66"
        },
        // html元标签，比如<!DOCTYPE html>里的!DOCTYPE
        {
            "token": "metatag.html",
            "foreground": "E06C75"
        },
        // html文件、css文件，属性名
        {
            "token": "attribute.name",
            "foreground": "ABB2BF"
        },
        // html属性名
        {
            "token": "attribute.name.html",
            "foreground": "D19A66"
        },
        // css文件，属性值
        {
            "token": "attribute.value",
            "foreground": "D19A66"
        },
        // 字符串
        {
            "token": "string",
            "foreground": "98C379"
        },
        // 非法字符串
        {
            "token": "string.invalid",
            "foreground": "98C379"
        },
        // 关键词
        {
            "token": "keyword",
            "foreground": "C678DD"
        },
        // 标识符
        {
            "token": "identifier",
            "foreground": "E06C75"
        },
        // css文件，属性值为数字
        {
            "token": "attribute.value.number.css",
            "foreground": "D19A66"
        },
        // 属性值为数字，比如less文件
        {
            "token": "attribute.value.number",
            "foreground": "D19A66"
        },
        // css文件，属性值的单位
        {
            "token": "attribute.value.unit.css",
            "foreground": "E06C75"
        },
        // 属性值的单位，比如less文件
        {
            "token": "attribute.value.unit",
            "foreground": "E06C75"
        },
        // css文件，16进制，常见于颜色值
        {
            "token": "attribute.value.hex.css",
            "foreground": "D19A66"
        },
        // html文件，属性值
        {
            "token": "attribute.value.html",
            "foreground": "98C379"
        }
    ],
    colors: {
        "activityBar.background": "#282c34",
        "activityBar.foreground": "#d7dae0",
        "activityBarBadge.background": "#4d78cc",
        "activityBarBadge.foreground": "#f8fafd",
        "badge.background": "#282c34",
        "button.background": "#404754",
        "button.secondaryBackground": "#30333d",
        "button.secondaryForeground": "#c0bdbd",
        "checkbox.border": "#404754",
        "debugToolBar.background": "#21252b",
        "descriptionForeground": "#abb2bf",
        "diffEditor.insertedTextBackground": "#00809b33",
        "dropdown.background": "#21252b",
        "dropdown.border": "#21252b",
        "editor.background": "#282c34",
        "editor.findMatchBackground": "#42557b",
        "editor.findMatchBorder": "#457dff",
        "editor.findMatchHighlightBackground": "#6199ff2f",
        "editor.foreground": "#abb2bf",
        "editor.lineHighlightBackground": "#2c313c",
        "editorLineNumber.activeForeground": "#abb2bf",
        "editorGutter.addedBackground": "#109868",
        "editorGutter.deletedBackground": "#9A353D",
        "editorGutter.modifiedBackground": "#948B60",
        "editorOverviewRuler.addedBackground": "#109868",
        "editorOverviewRuler.deletedBackground": "#9A353D",
        "editorOverviewRuler.modifiedBackground": "#948B60",
        "editor.selectionBackground": "#67769660",
        "editor.selectionHighlightBackground": "#ffffff10",
        "editor.selectionHighlightBorder": "#dddddd",
        "editor.wordHighlightBackground": "#d2e0ff2f",
        "editor.wordHighlightBorder": "#7f848e",
        "editor.wordHighlightStrongBackground": "#abb2bf26",
        "editor.wordHighlightStrongBorder": "#7f848e",
        "editorActiveLineNumber.foreground": "#737984",
        "editorBracketMatch.background": "#515a6b",
        "editorBracketMatch.border": "#515a6b",
        "editorCursor.background": "#ffffffc9",
        "editorCursor.foreground": "#528bff",
        "editorError.foreground": "#c24038",
        "editorGroup.background": "#181a1f",
        "editorGroup.border": "#181a1f",
        "editorGroupHeader.tabsBackground": "#21252b",
        "editorHoverWidget.background": "#21252b",
        "editorHoverWidget.border": "#181a1f",
        "editorIndentGuide.activeBackground": "#c8c8c859",
        "editorIndentGuide.background": "#3b4048",
        "editorLineNumber.foreground": "#495162",
        "editorMarkerNavigation.background": "#21252b",
        "editorRuler.foreground": "#abb2bf26",
        "editorSuggestWidget.background": "#21252b",
        "editorSuggestWidget.border": "#181a1f",
        "editorSuggestWidget.selectedBackground": "#2c313a",
        "editorWarning.foreground": "#d19a66",
        "editorWhitespace.foreground": "#3b4048",
        "editorWidget.background": "#21252b",
        "focusBorder": "#3e4452",
        "gitDecoration.ignoredResourceForeground": "#636b78",
        "input.background": "#1d1f23",
        "list.activeSelectionBackground": "#2c313a",
        "list.activeSelectionForeground": "#d7dae0",
        "list.focusBackground": "#323842",
        "list.focusForeground": "#f0f0f0",
        "list.highlightForeground": "#c5c5c5",
        "list.hoverBackground": "#2c313a",
        "list.hoverForeground": "#fff",
        "list.inactiveSelectionBackground": "#323842",
        "list.inactiveSelectionForeground": "#d7dae0",
        "list.warningForeground": "#d19a66",
        "menu.foreground": "#abb2bf",
        "menu.separatorBackground": "#343a45",
        "minimapGutter.addedBackground": "#109868",
        "minimapGutter.deletedBackground": "#9A353D",
        "minimapGutter.modifiedBackground": "#948B60",
        "panelSectionHeader.background": "#21252b",
        "peekViewEditor.background": "#1b1d23",
        "peekViewEditor.matchHighlightBackground": "#29244b",
        "peekViewResult.background": "#22262b",
        "scrollbar.shadow": "#23252c",
        "scrollbarSlider.activeBackground": "#747d9180",
        "scrollbarSlider.background": "#4e566660",
        "scrollbarSlider.hoverBackground": "#5a637580",
        "settings.focusedRowBackground": "#282c34",
        "settings.headerForeground": "#fff",
        "sideBar.background": "#21252b",
        "sideBar.foreground": "#abb2bf",
        "sideBarSectionHeader.background": "#282c34",
        "sideBarSectionHeader.foreground": "#abb2bf",
        "statusBar.background": "#21252b",
        "statusBar.debuggingBackground": "#cc6633",
        "statusBar.debuggingBorder": "#66017a",
        "statusBar.debuggingForeground": "#ffffff",
        "statusBar.foreground": "#9da5b4",
        "statusBar.noFolderBackground": "#21252b",
        "statusBarItem.hoverBackground": "#2c313a",
        "statusBarItem.remoteBackground": "#4d78cc",
        "statusBarItem.remoteForeground": "#f8fafd",
        "tab.activeBackground": "#282c34",
        "tab.activeForeground": "#dcdcdc",
        "tab.border": "#181a1f",
        "tab.hoverBackground": "#323842",
        "tab.inactiveBackground": "#21252b",
        "tab.unfocusedHoverBackground": "#323842",
        "terminal.ansiBlack": "#3f4451",
        "terminal.ansiBlue": "#4aa5f0",
        "terminal.ansiBrightBlack": "#4f5666",
        "terminal.ansiBrightBlue": "#4dc4ff",
        "terminal.ansiBrightCyan": "#4cd1e0",
        "terminal.ansiBrightGreen": "#a5e075",
        "terminal.ansiBrightMagenta": "#de73ff",
        "terminal.ansiBrightRed": "#ff616e",
        "terminal.ansiBrightWhite": "#d7dae0",
        "terminal.ansiBrightYellow": "#f0a45d",
        "terminal.ansiCyan": "#42b3c2",
        "terminal.ansiGreen": "#8cc265",
        "terminal.ansiMagenta": "#c162de",
        "terminal.ansiRed": "#e05561",
        "terminal.ansiWhite": "#e6e6e6",
        "terminal.ansiYellow": "#d18f52",
        "terminal.background": "#282c34",
        "terminal.border": "#abb2bf",
        "terminal.foreground": "#abb2bf",
        "terminal.selectionBackground": "#abb2bf30",
        "textBlockQuote.background": "#2e3440",
        "textBlockQuote.border": "#4b5362",
        "textLink.foreground": "#61afef",
        "textPreformat.foreground": "#d19a66",
        "titleBar.activeBackground": "#282c34",
        "titleBar.activeForeground": "#9da5b4",
        "titleBar.inactiveBackground": "#21252b",
        "titleBar.inactiveForeground": "#6b717d",
        "walkThrough.embeddedEditorBackground": "#2e3440",
        "welcomePage.buttonHoverBackground": "#404754"
    },
});