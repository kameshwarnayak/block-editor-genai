// "use strict";

// var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// // exports.default = void 0;
// var _react = require("react");
// var _compose = require("@wordpress/compose");
// var _element = require("@wordpress/element");
// var _i18n = require("@wordpress/i18n");
// // var _ = require("../");
// // var _searchResults = _interopRequireDefault(require("./search-results"));
// // var _constants = require("./constants");
// // var _useSearchHandler = _interopRequireDefault(require("./use-search-handler"));
// /**
//  * WordPress dependencies
//  */

// /**
//  * Internal dependencies
//  */

// // Must be a function as otherwise URLInput will default
// // to the fetchLinkSuggestions passed in block editor settings
// // which will cause an unintended http request.
// const noopSearchHandler = () => Promise.resolve([]);
// const noop = () => {};
// const LinkControlSearchInput = (0, _element.forwardRef)(({
//   value,
//   children,
//   currentLink = {},
//   className = null,
//   placeholder = null,
//   withCreateSuggestion = false,
//   onCreateSuggestion = noop,
//   onChange = noop,
//   onSelect = noop,
//   showSuggestions = true,
//   // renderSuggestions = props => (0, _react.createElement)(_searchResults.default, {
//   //   ...props
//   // }),
//   fetchSuggestions = null,
//   allowDirectEntry = true,
//   showInitialSuggestions = false,
//   suggestionsQuery = {},
//   withURLSuggestion = true,
//   createSuggestionButtonText,
//   hideLabelFromVision = false
// }, ref) => {
//   console.log("DEBUG - Created Item");
//   return (
//     <input></input>
//   )
//   // const genericSearchHandler = (0, _useSearchHandler.default)(suggestionsQuery, allowDirectEntry, withCreateSuggestion, withURLSuggestion);
//   // const searchHandler = showSuggestions ? fetchSuggestions || genericSearchHandler : noopSearchHandler;
//   // const instanceId = (0, _compose.useInstanceId)(LinkControlSearchInput);
//   // const [focusedSuggestion, setFocusedSuggestion] = (0, _element.useState)();

//   // /**
//   //  * Handles the user moving between different suggestions. Does not handle
//   //  * choosing an individual item.
//   //  *
//   //  * @param {string} selection  the url of the selected suggestion.
//   //  * @param {Object} suggestion the suggestion object.
//   //  */
//   // const onInputChange = (selection, suggestion) => {
//   //   onChange(selection);
//   //   setFocusedSuggestion(suggestion);
//   // };
//   // const handleRenderSuggestions = props => renderSuggestions({
//   //   ...props,
//   //   instanceId,
//   //   withCreateSuggestion,
//   //   createSuggestionButtonText,
//   //   suggestionsQuery,
//   //   handleSuggestionClick: suggestion => {
//   //     if (props.handleSuggestionClick) {
//   //       props.handleSuggestionClick(suggestion);
//   //     }
//   //     onSuggestionSelected(suggestion);
//   //   }
//   // });
//   // const onSuggestionSelected = async selectedSuggestion => {
//   //   let suggestion = selectedSuggestion;
//   //   if (_constants.CREATE_TYPE === selectedSuggestion.type) {
//   //     // Create a new page and call onSelect with the output from the onCreateSuggestion callback.
//   //     try {
//   //       suggestion = await onCreateSuggestion(selectedSuggestion.title);
//   //       if (suggestion?.url) {
//   //         onSelect(suggestion);
//   //       }
//   //     } catch (e) {}
//   //     return;
//   //   }
//   //   if (allowDirectEntry || suggestion && Object.keys(suggestion).length >= 1) {
//   //     const {
//   //       id,
//   //       url,
//   //       ...restLinkProps
//   //     } = currentLink !== null && currentLink !== void 0 ? currentLink : {};
//   //     onSelect(
//   //     // Some direct entries don't have types or IDs, and we still need to clear the previous ones.
//   //     {
//   //       ...restLinkProps,
//   //       ...suggestion
//   //     }, suggestion);
//   //   }
//   // };
//   // return (0, _react.createElement)("div", {
//   //   className: "block-editor-link-control__search-input-container-ksn"
//   // }, (0, _react.createElement)(_.URLInput, {
//   //   // disableSuggestions: currentLink?.url === value,
//   //   // __nextHasNoMarginBottom: true,
//   //   // label: (0, _i18n.__)('Link'),
//   //   // hideLabelFromVision: hideLabelFromVision,
//   //   // className: className,
//   //   // value: value,
//   //   // onChange: onInputChange,
//   //   // placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : (0, _i18n.__)('Search or type url'),
//   //   // __experimentalRenderSuggestions: showSuggestions ? handleRenderSuggestions : null,
//   //   // __experimentalFetchLinkSuggestions: searchHandler,
//   //   // __experimentalHandleURLSuggestions: true,
//   //   // __experimentalShowInitialSuggestions: showInitialSuggestions,
//   //   // onSubmit: (suggestion, event) => {
//   //   //   const hasSuggestion = suggestion || focusedSuggestion;

//   //   //   // If there is no suggestion and the value (ie: any manually entered URL) is empty
//   //   //   // then don't allow submission otherwise we get empty links.
//   //   //   if (!hasSuggestion && !value?.trim()?.length) {
//   //   //     event.preventDefault();
//   //   //   } else {
//   //   //     onSuggestionSelected(hasSuggestion || {
//   //   //       url: value
//   //   //     });
//   //   //   }
//   //   // },
//   //   // ref: ref
//   // }), children);
// });
// export default LinkControlSearchInput;



import { useState } from 'react';
import { Button, Popover } from '@wordpress/components';

const MyPopover = () => {
    const [ isVisible, setIsVisible ] = useState( false );
    const toggleVisible = () => {
        setIsVisible( ( state ) => ! state );
    };

    return (
        <Button variant="secondary" onClick={ toggleVisible }>
            Toggle Popover!
            { isVisible && <Popover>Popover is toggled!</Popover> }
        </Button>
    );
};

export default MyPopover;