"use strict";

import { useState } from "react";
import { Button, Popover } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { PiMagicWandLight } from "react-icons/pi";

const PromptPopover = ({ ...props }) => {
	return (
		<Popover
			placement="bottom-start"
			focusOnMount="firstElement"
			key="block-editor-genai-prompt"
			expandOnMobile={true}
			headerTitle={__("Prompt", "block-editor-genai__prompt")}
            {...props}
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
};

export default PromptPopover;
