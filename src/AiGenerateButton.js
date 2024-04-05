import { Fragment } from "@wordpress/element";
import { GiMagickTrick } from "react-icons/gi";
import PromptPopover from "./PromptPopover";
import { BlockControls, RichTextShortcut } from "@wordpress/block-editor";
import { toggleFormat, useAnchorRef } from "@wordpress/rich-text";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import CONSTS from "./constants";

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
		onChange(toggleFormat(value, { type: CONSTS.FORMAT_TYPE }));
	};

	const thePopover = isActive && (
		<PromptPopover
			onClose={() => {
				onChange(toggleFormat(value, { type: CONSTS.FORMAT_TYPE  }));
			}}
			anchorRef={anchorRef}
			// getAnchorRect={anchorRect}
		></PromptPopover>
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

export default AiGenerateButton;
