<template>
  <div :class="['base-input__wrapper', `base-input__wrapper-${wrapperClass}`]">
    <span class="base-input__suffix" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </span>

    <input
      :id="id"
      :class="['base-input', `base-input_${styleClass}`]"
      :placeholder="phTitle"
      :disabled="disabled"
      :value="modelValue"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="base-input__prefix" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  phTitle: {
    type: [String, Number, Date],
    default: "Поиск",
  },
  styleClass: {
    type: String,
    default: "",
  },
  id:{
    type:String,
    default:''
  },
  wrapperClass: {
    type: String,
    default: "",
  },

  disabled: {
    type: Boolean,
    default: () => false,
  },
  type: {
    type: String,
    default: () => "text",
  },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>
