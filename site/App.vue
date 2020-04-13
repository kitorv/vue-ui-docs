<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Microsoft YaHei, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  color: #333333;
  font-size: 12px;
}

ul,
ol {
  list-style: none;
}

a {
  color: #333333;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  transition: color 0.3s;
  cursor: pointer;
}

a:active,
a:hover {
  text-decoration: none;
  outline: 0;
}

.vc-snippet-doc {
  min-width: 600px;
  color: #3f536e;
  font-size: 14px;
  line-height: 1.5;

  > .tip,
  > .warning {
    padding: 12px 16px;
    border-radius: 4px;
    margin: 20px 0;
    line-height: 1.3;
  }

  > .tip {
    background-color: #ecf8ff;
    border-left: 5px solid #6190e8;
  }

  > .warning {
    background-color: #fff6f7;
    border-left: 5px solid #fe6c6f;
  }

  > h1 {
    font-size: 28px;
    font-weight: 600;
    margin: 22px 0 18px;
  }

  > h2 {
    font-size: 22px;
    font-weight: 600;
    margin: 18px 0 10px;
  }

  > h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0 10px;
  }

  > p {
    line-height: 1.8;
    color: #3f536e;
    font-size: 14px;
    margin-bottom: 5px;
  }

  > p > code {
    background: #e6effb;
    border-radius: 3px;
    color: #5e6d82;
    padding: 2px 8px;
  }

  > table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #ebedf0;
    width: 100%;
    margin: 8px 0 16px;
    font-size: 14px;

    th,
    td {
      color: #314659;
      border: 1px solid #ebedf0;
      text-align: left;
      padding: 8px 10px;
      vertical-align: middle;

      code {
        background: #e6effb;
        border-radius: 3px;
        color: #5e6d82;
        padding: 2px 8px;
      }
    }

    th {
      white-space: nowrap;
      color: #333333;
      font-weight: 500;
      background-color: #fafafa;
    }
  }

  > .hljs {
    padding: 0;
  }

  > ol {
    > li {
      margin: 8px 0 8px 20px;
      padding-left: 0;
      list-style-type: decimal;
      line-height: 1.6;
    }
  }

  code {
    background: #e6effb;
    border-radius: 3px;
    color: #5e6d82;
    padding: 2px 8px;
  }

  a:not(.n-link) {
    text-decoration: none;
    color: #333333;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a.n-snippent--markdown-it-anchor {
      opacity: 0;
    }

    &:hover a.n-snippent--markdown-it-anchor {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
}

.hljs > code {
  border: 1px solid #f0f2f7;
  background: #f9f9f9;
  font-family: Consolas, Menlo, Courier, monospace;
  display: block;
  font-size: 14px;
  padding: 8px 16px;
  line-height: 1.5;
  border-radius: 5px;
}

.hljs-comment {
  color: #608b4e;
}
</style>
