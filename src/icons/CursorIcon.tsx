import React from 'react';

function CursorIcon ({ style, ...props }: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			style={{
				flex: 'none',
				lineHeight: 1,
				...(style || {}),
			}}
			viewBox="0 0 24 24"
			{...props}
		>
			<title>{'Cursor'}</title>
			<path fill="url(#a)" d="m11.925 24 10.425-6-10.425-6L1.5 18l10.425 6z" />
			<path fill="url(#b)" d="M22.35 18V6L11.925 0v12l10.425 6z" />
			<path fill="url(#c)" d="M11.925 0 1.5 6v12l10.425-6V0z" />
			<path fill="#555" d="M22.35 6 11.925 24V12L22.35 6z" />
			<path d="m22.35 6-10.425 6L1.5 6h20.85z" />
			<defs>
				<linearGradient
					id="a"
					x1={11.925}
					x2={11.925}
					y1={12}
					y2={24}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.16} stopOpacity={0.39} />
					<stop offset={0.658} stopOpacity={0.8} />
				</linearGradient>
				<linearGradient
					id="b"
					x1={22.35}
					x2={11.925}
					y1={6.037}
					y2={12.15}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.182} stopOpacity={0.31} />
					<stop offset={0.715} stopOpacity={0} />
				</linearGradient>
				<linearGradient
					id="c"
					x1={11.925}
					x2={1.5}
					y1={0}
					y2={18}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopOpacity={0.6} />
					<stop offset={0.667} stopOpacity={0.22} />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default CursorIcon;
