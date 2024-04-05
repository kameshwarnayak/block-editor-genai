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
	RichTextToolbarButton,
	BlockControls,
	RichTextShortcut,
} from "@wordpress/block-editor";
import {
	registerFormatType,
	toggleFormat,
	useAnchorRef,
} from "@wordpress/rich-text";
import { __ } from "@wordpress/i18n";
import { ToolbarGroup, ToolbarButton, Popover } from "@wordpress/components";
import { tip, lifesaver } from "@wordpress/icons";
import { Fragment } from "@wordpress/element";
import { PiMagicWandLight } from "react-icons/pi";
import { GiMagickTrick } from "react-icons/gi";

const type = "ksn/ai-assistant";
let anchorRange;
let anchorRect;

const AiGenerateButton = ({ isActive, value, onChange, contentRef }) => {
	const anchorRef = useAnchorRef({ ref: contentRef, value });

	const onToggle = () => {
		// Set up the anchorRange when the Popover is opened.
		const selection = document.defaultView.getSelection();

		anchorRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

		// Pin the Popover to the caret position.
		const boundingClientRect = anchorRange
			? anchorRange.getBoundingClientRect()
			: null;

		anchorRect = anchorRange ? () => boundingClientRect : null;
		onChange(toggleFormat(value, { type }));
	};

	const thePopover = isActive && (
		<Popover
			placement="bottom-start"
			focusOnMount="firstElement"
			key="my-popover"
			expandOnMobile={true}
			headerTitle={__("Prompt", "block-editor-genai__prompt")}
			onClose={() => {
				onChange(toggleFormat(value, { type }));
			}}
			anchorRef={anchorRef}
			// getAnchorRect={anchorRect}
		>
			<div className="block-editor-genai__prompt-container">
				<div className="block-editor-genai__prompt-wrapper">
					<input
						className="block-editor-genai__prompt-input"
						placeholder="What would you like to generate?"
					></input>
					<div className="block-editor-genai__generate-button-container">
						<button className="block-editor-genai__generate-button">
							<PiMagicWandLight size="24" />
						</button>
					</div>
				</div>
			</div>
		</Popover>
	);
	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						// icon="editor-underline"
						icon={<GiMagickTrick />}
						title={__("AI Assistant", "ai-assistant")}
						onClick={() => {
							onToggle();
							console.log("Text --- ", value.text);
						}}
						isActive={isActive}
					/>
				</ToolbarGroup>
			</BlockControls>
			<Fragment>
				<RichTextShortcut
					type="primary"
					onUse={onToggle}
					contentRef={contentRef}
				/>
			</Fragment>
			{thePopover}
		</Fragment>
	);
};

registerFormatType(type, {
	title: __("AI Assistant", "ai-assistant"),
	tagName: "span",
	className: "ksn-ai-assistant",
	edit: AiGenerateButton,
});
