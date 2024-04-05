/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
// registerBlockType( metadata.name, {
// 	/**
// 	 * @see ./edit.js
// 	 */
// 	edit: Edit,

// 	/**
// 	 * @see ./save.js
// 	 */
// 	save,
// } );

import {
	registerFormatType,
} from "@wordpress/rich-text";
import { __ } from "@wordpress/i18n";
import AiGenerateButton from "./AiGenerateButton";
import CONSTS from "./constants";

registerFormatType(CONSTS.FORMAT_TYPE, {
	title: __("AI Assistant", "ai-assistant"),
	tagName: "span",
	className: "ksn-ai-assistant",
	edit: AiGenerateButton,
});
