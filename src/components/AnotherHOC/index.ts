import withConfig from "../withConfig";
import HOC from "./AnotherHOC.vue";

export default withConfig(HOC, { test: "test" });
