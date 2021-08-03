# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

:::snippet 通过 `v-button` 标签初始化按钮。

```html
<template>
  <div>
    <v-button>Default</v-button>
  </div>
</template>
```

:::

## 文本设置

:::snippet 通过 `text` 设置按钮文本。

```html
<template>
  <div>
    <v-button text="Default"></v-button>
  </div>
</template>
```

:::

## 事件绑定

:::snippet 绑定 `click` 事件。

```html
<template>
  <div>
    <v-button @click="handleButtonClick">{{text}}</v-button>
  </div>
</template>

<script>
  export default {
    data() {
      return { text: "Default" };
    },
    methods: {
      handleButtonClick() {
        alert(1);
      },
    },
  };
</script>
```

:::

## JSX 语法支持

:::snippet 示例代码支持`jsx`渲染。

```html
<script>
  export default {
    render() {
      return (
        <div>
          <v-button
            text="Default"
            onClick={() => {
              this.handleButtonClick();
            }}
          ></v-button>
        </div>
      );
    },
    methods: {
      handleButtonClick() {
        alert(1);
      },
    },
  };
</script>
```

:::

## Button Attributes

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| text | 按钮文本 | String | —      | —      |

## Button Events

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| click    | 单击触发 | event    |

## Button Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 按钮内容 |
