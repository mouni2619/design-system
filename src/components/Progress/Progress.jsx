import { Progress as AntProgress } from "antd";

import {
  DEFAULT_PROGRESS_HEIGHT,
  DEFAULT_PROGRESS_PERCENT,
  DEFAULT_PROGRESS_STATUS,
  PROGRESS_PERCENT_POSITION,
  PROGRESS_STATUSES,
  STRIPE_ANGLE,
  STRIPE_WIDTH,
} from "@components/constants";

// The design writes the percent with a space before the sign.
function formatPercent(percent) {
  return `${percent} %`;
}

/**
 * Bands of the lighter ramp step over the fill, expressed as a gradient in
 * `strokeColor` rather than a stylesheet — antd writes the value straight onto
 * the track's `background`, so one prop carries the stripes and the colour
 * under them. Bootstrap's `.progress-bar-striped` is not an option here: this
 * build compiles only Bootstrap's utilities, not its components.
 */
function stripedFill(fill, stripe) {
  const bandEnd = STRIPE_WIDTH * 2;
  return `repeating-linear-gradient(${STRIPE_ANGLE}, ${stripe} 0 ${STRIPE_WIDTH}px, ${fill} ${STRIPE_WIDTH}px ${bandEnd}px)`;
}

/**
 * A progress bar in the four states the design specifies, as two independent
 * props: whether the percent shows on the bar, and whether the fill is striped.
 *
 * ```jsx
 * <Progress percent={65} />
 * <Progress percent={65} showInfo={false} />
 * <Progress percent={65} striped />
 * <Progress percent={65} striped status="warning" />
 * ```
 */
export function Progress({
  percent = DEFAULT_PROGRESS_PERCENT,
  status = DEFAULT_PROGRESS_STATUS,
  height = DEFAULT_PROGRESS_HEIGHT,
  showInfo = true,
  striped = false,
  format = formatPercent,
  ...rest
}) {
  const { fill, stripe } = PROGRESS_STATUSES[status] || PROGRESS_STATUSES[DEFAULT_PROGRESS_STATUS];

  // The rail carries the bar's rounded ends and clips its overflow, so the fill
  // rounds at the start and must stay square where it stops mid-rail — antd
  // would otherwise round that end too. The percent stays white on every
  // status: antd dims it to `rgba(0, 0, 0, .45)` whenever it reads the fill as
  // light, which catches `success` and `warning`, and that colour is a literal
  // in antd's stylesheet with no token behind it.
  return (
    <AntProgress
      percent={percent}
      showInfo={showInfo}
      format={format}
      size={{ height }}
      percentPosition={PROGRESS_PERCENT_POSITION}
      classNames={{ track: "rounded-0", indicator: "text-white" }}
      strokeColor={striped ? stripedFill(fill, stripe) : fill}
      {...rest}
    />
  );
}

export default Progress;
