export const shortenString = (text, maxTextLength = 100, dots = true) =>
	`${text.slice(0, maxTextLength)}${
		text.length > maxTextLength && dots ? '...' : ''
	}`;
