import { Spin, theme } from "antd";

import {
  DEFAULT_SPINNER_TYPE,
  SPINNER_COLOR_KEYS,
  SPINNER_DOTS,
  SPINNER_TYPES,
} from "@components/Spinner/constants";
import { antdTheme } from "@theme/antdTheme";

export function Spinner({ type = DEFAULT_SPINNER_TYPE, className = "", ...rest }) {
  const resolvedType = type in SPINNER_TYPES ? type : DEFAULT_SPINNER_TYPE;
  const { token } = theme.useToken();
  const spinTheme = token.Spin ?? antdTheme.components.Spin;
  const size = spinTheme.ringSize;
  const center = size / 2;
  const radius = center - spinTheme.ringDotRadius;
  const rotation = spinTheme.ringRotation;

  return (
    <Spin
      className={className}
      indicator={
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill={spinTheme[SPINNER_COLOR_KEYS[resolvedType]]}
          aria-hidden="true"
        >
          <g transform={`rotate(${rotation} ${center} ${center})`}>
            {SPINNER_DOTS.map((dot) => {
              const angle = (dot * 2 * Math.PI) / SPINNER_DOTS.length - Math.PI / 2;
              return (
                <circle
                  key={dot}
                  cx={center + radius * Math.cos(angle)}
                  cy={center + radius * Math.sin(angle)}
                  r={spinTheme.ringDotRadius}
                />
              );
            })}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${rotation} ${center} ${center}`}
              to={`${rotation + 360} ${center} ${center}`}
              dur={spinTheme.ringDuration}
              repeatCount="indefinite"
            />
          </g>
        </svg>
      }
      {...rest}
    />
  );
}

export default Spinner;
