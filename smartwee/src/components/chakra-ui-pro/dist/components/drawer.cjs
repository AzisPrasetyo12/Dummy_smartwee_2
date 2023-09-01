'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const anatomy = require('@chakra-ui/anatomy');
const styledSystem = require('@chakra-ui/styled-system');

const { defineMultiStyleConfig, definePartsStyle } = styledSystem.createMultiStyleConfigHelpers(anatomy.modalAnatomy.keys);
const baseStyle = definePartsStyle({
  header: {
    px: { base: 4, md: 6 },
    pt: 6,
    pb: 0,
    fontSize: "md",
    fontWeight: "normal"
  },
  body: {
    px: { base: 4, md: 6 },
    py: 6
  },
  footer: {
    px: { base: 4, md: 6 },
    py: 4,
    display: "block"
  },
  dialog: {
    bg: "bg.surface",
    boxShadow: "lg"
  }
});
const drawer = defineMultiStyleConfig({ baseStyle });

exports.default = drawer;
