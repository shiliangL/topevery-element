<template>
  <div class="cube-search-bar">
    <template v-if="data && data.length">
      <!-- 左边组件类型 -->
      <template v-if="data && data[0] && data[0].length">
        <div
          v-for="(item, index) in data[0]"
          :key="index"
          class="left"
        >
          <!-- 其他类型 -->
          <!-- <template v-if="item.type === 'cubeMoreType'">
            <div class="cubeMoreType">
              <CubeMoreType
                v-model="item.value"
                :class="item.class ? item.class :'w180' "
                :config="item.config || {} "
              />
            </div>
          </template> -->

          <!-- 输入框 -->
          <template v-if="item.type === 'input'">
            <el-input
              v-model="item.value"
              :class="item.class ? item.class :'w180' "
              :size="size"
              :clearable="item.clearable"
              :placeholder="item.placeholder|| '请输入'"
              @keyup.enter.native="search"
              @change="item.change ?item.change($event): null"
            />
          </template>

          <!-- 下拉选择 -->
          <template v-else-if="item.type === 'option'">
            <el-select
              v-model="item.value"
              :class="item.class?item.class:'w90'"
              :size="size"
              :clearable="item.clearable"
              filterable
              :placeholder="item.placeholder|| '请选择'"
              :multiple="item.multiple"
              collapse-tags
              @change="item.change ?item.change($event): null"
            >
              <el-option
                v-for="sub in item.options"
                :key="sub.value"
                :label="sub.label"
                :value="sub.value"
                :class="item.class"
              />
            </el-select>
          </template>

          <!-- cubeSelectTree -->
          <!-- <template v-if="item.type === 'cubeSelectTree'">
            <CubeSelectTree
              ref="selectTree"
              v-model="item.value"
              :size="size"
              :extra-param="item.extraParam ? item.extraParam : {} "
              :config="item.config || {} "
            />
          </template> -->
          <!-- cubeSelect -->
          <!-- <template v-if="item.type === 'cubeSelect'">
            <CubeSelect
              ref="CubeSelect"
              v-model="item.value"
              :size="size"
              :extra-param="item.extraParam ? item.extraParam : {} "
              :config="item.config || {} "
            />
          </template> -->
          <!-- cubeCascader -->
          <!-- <template v-if="item.type === 'cubeCascader'">
            <CubeCascader
              ref="CubeCascader"
              v-model="item.value"
              :size="size"
              :extra-param="item.extraParam ? item.extraParam : {} "
              :config="item.config || {} "
            />
          </template> -->
          <!-- 日期选择 -->
          <template v-if="item.type === 'date'">
            <el-date-picker
              v-model="item.value"
              :class="item.class?item.class:'w140'"
              :picker-options="item.pickerOptions || datePickerOptions"
              :size="size"
              type="date"
              :value-format="item.format || 'yyyy-MM-dd'"
              :placeholder="item.placeholder|| '请选择'"
              @change="item.change ?item.change($event): null"
            />
          </template>

          <!-- daterange 日期范围-->
          <template v-if="item.type === 'daterange'">
            <el-date-picker
              v-model="item.value"
              :size="size"
              :clearable="item.clearable"
              type="daterange"
              range-separator="至"
              :picker-options="item.pickerOptions||daterangePickerOptions"
              :class="item.class?item.class:'w300'"
              :value-format="item.format || 'yyyy-MM-dd'"
              :start-placeholder="item.placeholder1||'开始日期'"
              :end-placeholder="item.placeholder2||'结束日期'"
              @change="item.change ?item.change($event): null"
            />
          </template>

          <!-- datetimerange 日期时间范围 -->
          <template v-if="item.type === 'datetimerange'">
            <el-date-picker
              v-model="item.value"
              :size="size"
              :clearable="item.clearable"
              type="datetimerange"
              range-separator="至"
              :picker-options="item.pickerOptions||{}"
              :class="item.class?item.class:'w320'"
              :value-format="item.format || 'yyyy-MM-dd HH:mm:ss'"
              :start-placeholder="item.placeholder1"
              :end-placeholder="item.placeholder2"
              @change="item.change ?item.change($event): null"
            />
          </template>

          <!-- daterange 月份范围-->
          <template v-if="item.type === 'monthrange'">
            <el-date-picker
              v-model="item.value"
              :size="size"
              :clearable="item.clearable"
              type="monthrange"
              range-separator="至"
              :picker-options="item.pickerOptions|| monthrangePickerOptions"
              :class="item.class?item.class:'w300'"
              :value-format="item.format || 'yyyy-MM'"
              :start-placeholder="item.placeholder1||'开始月份'"
              :end-placeholder="item.placeholder2||'结束结束'"
              @change="item.change ?item.change($event): null"
            />
          </template>

          <template v-else-if="item.type === 'search'">
            <el-button
              :type="item.buttonType ? item.buttonType : 'primary'"
              :icon="item.icon ? item.icon : 'el-icon-search'"
              :size="size"
              @click="item.click ?item.click(): search"
            >
              {{ item.name }}
            </el-button>
          </template>
          <template v-else-if="item.type === 'reset'">
            <el-button
              :type="item.buttonType ? item.buttonType : 'primary'"
              :icon="item.icon ? item.icon : 'el-icon-refresh'"
              plain
              :size="size"
              @click="item.click ?item.click(): clickReset"
            >
              {{ item.name }}
            </el-button>
          </template>
        </div>
      </template>
      <!-- 右边操作区域 -->
      <template v-if="data && data[1] && data[1].length">
        <div class="right">
          <div
            v-for="(item, index) in data[1]"
            :key="index"
            class="left"
          >
            <template v-if="item.type === 'add'">
              <el-button
                :size="size"
                type="success"
                icon="el-icon-plus"
                @click.stop="item.click ? item.click() :clickAdd(item)"
              >
                {{ item.name ? item.name : '新增' }}
              </el-button>
            </template>

            <template v-if="item.type === 'del'">
              <el-button
                :size="size"
                type="danger"
                icon="el-icon-delete"
                @click.stop="item.click ? item.click() :clickDel(item)"
              >
                删除
              </el-button>
            </template>

            <template v-if="item.type === 'button'">
              <el-button
                v-if="item.ifShow ? item.ifShow(): true"
                :size="size"
                :icon="item.icon"
                :plain="item.plain"
                :type="item.btType"
                @click="item.click ? item.click($event) : null"
                @click.stop="item.action ? item.action() :clickBtn(item)"
              >
                {{ item.name }}
              </el-button>
            </template>

            <template v-else-if="item.type === 'more'">
              <el-dropdown
                trigger="click"
                @command="command"
              >
                <el-button
                  type="primary"
                  :size="size"
                  plain
                >
                  {{ item.name || '更多操作' }}<i class="el-icon-arrow-down el-icon--right" />
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="(itemK,i) in item.options"
                    :key="i"
                    :icon="itemK.icon"
                    :command="itemK.label"
                    @click.native="itemK.action ? itemK.action() : null"
                  >
                    {{ itemK.label }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>

//  常量类型
import { deepClone } from '@/utils/index.js'
import { Button, Input, Select, Option, Dropdown, DropdownItem, DropdownMenu, DatePicker } from 'element-ui'

const commonlyTypes = ['input', 'select', 'option', 'cascader', 'cubeCascader', 'date', 'datetime', 'date-month', 'cubeMoreType']

const timeRangeTime = ['daterange', 'datetimerange', 'monthrange']
//  特殊类型
const cubeType = ['cubeSelect', 'cubeSelectTree']

export default {
  name: 'CubeSearchBar',
  componentName: 'CubeSearchBar',
  components: {
    ElButton: Button,
    ElInput: Input,
    ElSelect: Select,
    ElOption: Option,
    ElDatePicker: DatePicker,
    ElDropdown: Dropdown,
    ElDropdownItem: DropdownItem,
    ElDropdownMenu: DropdownMenu
    // CubeMoreType,
    // CubeSelect,
    // CubeCascader,
    // CubeSelectTree
  },
  props: {
    size: {
      type: String,
      default: () => 'small'
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      datePickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      daterangePickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      monthrangePickerOptions: {
        shortcuts: [{
          text: '本月',
          onClick (picker) {
            picker.$emit('pick', [new Date(), new Date()])
          }
        }, {
          text: '今年至今',
          onClick (picker) {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近六个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  created () {
    this.initParam()
  },
  methods: {
    initParam () {
      if (this.data.length > 0 && this.data[0] && this.data[0].length > 0) {
        const items = this.data[0]
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          // 初始化 fix 配置中无value导致无法同步视图
          item.value = ''
          if (item.initValue) {
            item.value = item.initValue
          }
        }
      }
    },
    clickReset () {
      if (this.data.length > 0 && this.data[0] && this.data[0].length > 0) {
        const items = this.data[0]
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          if (item.type === 'search') {
            break
          } else if (item.initValue) {
            item.value = item.initValue
          } else {
            item.value = null
          }
        }
      }
      this.$emit('reset', this.getSearchParams())
    },
    search () {
      const params = this.getSearchParams()
      this.$emit('search', params)
    },
    getSearchParams () {
      // 获取选择参数
      const params = {}
      if (this.data.length > 0 && this.data[0] && this.data[0].length > 0) {
        const items = this.data[0]
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          if (commonlyTypes.indexOf(item.type) !== -1) {
            params[item.key] = item.multiple ? item.value ? item.value.toString() : item.value : item.value
          } else if (timeRangeTime.includes(item.type)) {
            if (item.value) {
              params[item.key1] = item.value[0] ? item.value[0] : ''
              params[item.key2] = item.value[1] ? item.value[1] : ''
            } else {
              params[item.key1] = null
              params[item.key2] = null
            }
          } else if (cubeType.includes(item.type)) {
            // 处理cube选择组件
            if (item.config && item.config.keyCode) {
              params[item.key] = item.value ? item.value[item.config.keyCode] ? item.value[item.config.keyCode] : '' : ''
            }
          } else if (item.type === 'search') {
            break
          }
        }
      }
      return deepClone(params)
    },
    clickAdd () {
      this.$emit('add')
    },
    clickDel () {
      this.$emit('del')
    },
    clickBtn (item) {
      this.$emit('button', item)
      this.$emit('clickBtn', item)
    },
    command (command) {
      this.$emit('command', command)
    },
    dateTimePicker (minDate, maxDate) {
      if (minDate && maxDate) {
        return {
          disabledDate: time => (time.getTime() > new Date(maxDate).getTime() || time.getTime() < new Date(minDate).getTime())
        }
      }
      if (maxDate) {
        return {
          disabledDate: time => (maxDate ? time.getTime() > new Date(maxDate).getTime() : false)
        }
      }
      if (minDate) {
        return {
          disabledDate: time => (minDate ? time.getTime() < new Date(minDate).getTime() : false)
        }
      }
      return {
        disabledDate: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cube-search-bar {
  width: 100%;
  background-color: white;
  clear: both;
  margin-top: -6px;
  margin-bottom: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid #dfecf9;

  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  .left {
    float: left;
    height: 40px;

    .cubeMoreType {
      margin-left: 4px;
    }

    .cube-select,
    .cubeMoreType,
    .cube-select-tree,
    > div {
      margin-right: 4px;
      margin-top: 10px;
    }

    .el-button {
      margin-top: 10px;
      margin-left: 4px;
    }

    .el-date-editor {
      margin-left: 4px;
      margin-right: 4px;
    }

    .el-date-editor--daterange {
      padding-left: 5px;
      padding-right: 0;
      width: 232px;
    }

    .el-date-editor--datetimerange {
      padding-left: 5px;
      padding-right: 0;
      width: 314px;
    }

    .el-date-editor .el-range-separator {
      padding: 0;
      line-height: 24px;
      margin-left: 3px;
      margin-right: 5px;
    }

    .el-range-input {
      min-width: 80px;
    }

    .el-date-editor--datetimerange {
      .el-range-input {
        min-width: 130px;
      }
    }
  }

  .right {
    float: right;
    .el-dropdown {
      margin: 0;
    }
    > div {
      margin-left: 4px;
    }
  }
}
</style>
