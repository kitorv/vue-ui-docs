<template>
  <div class="vc-snippet">
    <div class="vc-snippet--demo">
      <!-- 代码生成vue示例 -->
      <slot name="source" />
    </div>
    <div class="vc-snippet--desc">
      <!-- 示例描述说明 -->
      <slot name="desc" />
      <span class="vc-snippet--icon-code" @click="showCode = !showCode">
        <img alt="code" :src="codeIconSrc" />
      </span>
    </div>
    <div v-show="showCode" class="vc-snippet--code">
      <!-- 示例代码高亮显示 -->
      <slot name="code" />
    </div>
  </div>
</template>

<script>
import "highlight.js/styles/color-brewer.css";

export default {
  data() {
    return {
      showCode: false
    };
  },
  computed: {
    codeIconSrc() {
      return this.showCode
        ? "https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
        : "https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";
    }
  }
};
</script>

<style lang="scss" scoped>
.vc-snippet {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 16px;
  border-radius: 4px;
  transition: all 0.2s;
  box-shadow: 0 6px 12px -2px rgba(0, 32, 128, 0.1), 0 0 0 1px #f0f2f7;
  background-color: #ffffff;
  text-align: left;
  margin-bottom: 30px;
}

.vc-snippet--demo {
  box-sizing: border-box;
  padding: 30px 35px;
  color: #333333;
  border-bottom: 1px solid #ebedf0;
  font-size: 12px;
}

.vc-snippet--desc {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 44px;
  padding: 10px 50px 10px 20px;
  font-size: 14px;
  transition: background-color 0.4s;
  line-height: 1.8;

  code {
    background: #e6effb;
    border-radius: 3px;
    color: #5e6d82;
    padding: 2px 8px;
  }
}

.vc-snippet--icon-code {
  position: absolute;
  right: 16px;
  bottom: 13px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;

  > img {
    width: 18px;
    height: 18px;
  }
}
.vc-snippet--code {
  box-sizing: border-box;
  border-top: 1px solid #ebedf0;

  /deep/ {
    code {
      background: #f9f9f9;
      font-family: Consolas, Menlo, Courier, monospace;
      border: none;
      display: block;
      font-size: 14px;
      padding: 16px 32px;
      line-height: 1.5;
    }

    .hljs {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
