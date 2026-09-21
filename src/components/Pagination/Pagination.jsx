import { InputNumber, Select } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import "@components/Pagination/Pagination.css";

import { Button } from "@components/Button/Button";
import { ARROW_ICON_SIZE, DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_OPTIONS, DEFAULT_PAGINATION_SIZE, DEFAULT_PAGINATION_VARIANT, ELLIPSIS, ELLIPSIS_JUMP, SIBLING_COUNT } from "@components/Pagination/constants";

/** `[start, start + 1, …, end]` */
function pageRange(start, end) {
  const pages = [];
  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }
  return pages;
}

/**
 * Which page numbers to show, e.g. `1 … 5 6 7 … 20`. The first and last page
 * are always visible, with at most one ellipsis on each side.
 */
function getPageItems(current, totalPages) {
  // First, last, both ellipses, the current page, and its siblings.
  const windowSize = SIBLING_COUNT * 2 + 5;
  if (totalPages <= windowSize) {
    return pageRange(1, totalPages);
  }

  const firstSibling = Math.max(current - SIBLING_COUNT, 1);
  const lastSibling = Math.min(current + SIBLING_COUNT, totalPages);

  if (firstSibling <= 2) {
    return [...pageRange(1, windowSize - 2), ELLIPSIS, totalPages];
  }
  if (lastSibling >= totalPages - 1) {
    return [1, ELLIPSIS, ...pageRange(totalPages - windowSize + 3, totalPages)];
  }
  return [1, ELLIPSIS, ...pageRange(firstSibling, lastSibling), ELLIPSIS, totalPages];
}

/**
 * One cell of the row. Hover, focus and disabled all come from antd's Button,
 * so there is no interaction state to track here. `rounded-0` squares the cell:
 * they butt up against each other inside one rounded row, and the row's
 * `overflow-hidden` shapes the ends.
 *
 * The border colour is `border-secondary-emp-5`, not the `border-disable` you
 * might reach for: both are `!important`, and Bootstrap's utilities API emits
 * `.border` after `.border-disable`, so that one never wins.
 */
function Cell({
  children = null,
  size = DEFAULT_PAGINATION_SIZE,
  active = false,
  disabled = false,
  label = "",
  divider = false,
  className = "",
  onClick = null,
}) {
  return (
    <div className={divider ? "d-inline-flex border-start border-secondary-emp-5" : "d-inline-flex"}>
      <Button
        type={active ? "primary" : "secondary"}
        variant={active ? "filled-dark" : "ghost"}
        size={size}
        className={`rounded-0 ${className}`}
        disabled={disabled}
        aria-label={label || undefined}
        aria-current={active ? "page" : undefined}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
}

/**
 * Page navigation in three variants, built from two layouts.
 *
 * `icon` and `text` are the same layout — the full page list in one bordered
 * row — and differ only in whether the prev/next cells show chevrons or words,
 * which is the `showWords` condition below. `simple` is the one that differs:
 * it drops the list, the size changer and the jumper for a range readout and
 * two loose arrows.
 *
 * Controlled when `current` / `pageSize` are given, uncontrolled otherwise.
 *
 * ```jsx
 * <Pagination total={200} onChange={handleChange} />
 * <Pagination total={200} variant="text" size="large" />
 * <Pagination total={200} variant="simple" />
 * ```
 */
export function Pagination({
  variant = DEFAULT_PAGINATION_VARIANT,
  size = DEFAULT_PAGINATION_SIZE,
  total = 0,
  current: currentProp = null,
  defaultCurrent = 1,
  pageSize: pageSizeProp = null,
  defaultPageSize = DEFAULT_PAGE_SIZE,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  showSizeChanger = true,
  showQuickJumper = true,
  disabled = false,
  onChange = null,
  onShowSizeChange = null,
}) {
  const [innerCurrent, setInnerCurrent] = useState(defaultCurrent);
  const [innerPageSize, setInnerPageSize] = useState(defaultPageSize);
  // Controlled so the jumper can clear itself once it has taken you there.
  const [jumperValue, setJumperValue] = useState(null);

  const pageSize = pageSizeProp ?? innerPageSize;
  const totalPages = Math.max(Math.ceil(total / pageSize), 1);
  // Clamped, so a `total` that shrinks never leaves us on an out-of-range page.
  const current = Math.min(currentProp ?? innerCurrent, totalPages);

  const onFirstPage = disabled || current <= 1;
  const onLastPage = disabled || current >= totalPages;

  function goTo(page) {
    const next = Math.min(Math.max(page, 1), totalPages);
    setInnerCurrent(next);
    if (next !== current && onChange) {
      onChange(next, pageSize);
    }
  }

  function handlePrev() {
    goTo(current - 1);
  }

  function handleNext() {
    goTo(current + 1);
  }

  function handlePageSizeChange(nextSize) {
    const next = Math.min(current, Math.max(Math.ceil(total / nextSize), 1));
    setInnerPageSize(nextSize);
    setInnerCurrent(next);
    if (onShowSizeChange) {
      onShowSizeChange(next, nextSize);
    }
    if (onChange) {
      onChange(next, nextSize);
    }
  }

  function handleJumperEnter(event) {
    const page = Number(event.target.value);
    if (Number.isFinite(page) && page > 0) {
      goTo(page);
    }
    setJumperValue(null);
  }

  const isSimple = variant === "simple";

  // The only difference between `icon` and `text`: what the prev/next cells
  // hold. `simple` never sets `text`, so it takes the chevrons too.
  const showWords = variant === "text";
  const prevContent = showWords ? "Previous" : <ChevronLeft size={ARROW_ICON_SIZE} />;
  const nextContent = showWords ? "Next" : <ChevronRight size={ARROW_ICON_SIZE} />;

  let body;

  if (isSimple) {
    const firstResult = total === 0 ? 0 : (current - 1) * pageSize + 1;
    const lastResult = Math.min(current * pageSize, total);

    body = (
      <>
        <span>
          {firstResult} - {lastResult} of {total} results
        </span>
        <Cell
          size={size}
          disabled={onFirstPage}
          label="Previous page"
          className="pagination-arrow"
          onClick={handlePrev}
        >
          {prevContent}
        </Cell>
        <Cell size={size} disabled={onLastPage} label="Next page" className="pagination-arrow" onClick={handleNext}>
          {nextContent}
        </Cell>
      </>
    );
  } else {
    body = (
      <div className="d-inline-flex align-items-stretch border border-secondary-emp-5 rounded-1 overflow-hidden">
        <Cell size={size} disabled={onFirstPage} label="Previous page" onClick={handlePrev}>
          {prevContent}
        </Cell>

        {getPageItems(current, totalPages).map(function (item, index) {
          if (item === ELLIPSIS) {
            // The left ellipsis skips back, the right one skips forward.
            const target = index === 1 ? current - ELLIPSIS_JUMP : current + ELLIPSIS_JUMP;
            function handleJump() {
              goTo(target);
            }
            return (
              <Cell
                key={ELLIPSIS + index}
                size={size}
                divider
                disabled={disabled}
                label={`Jump ${ELLIPSIS_JUMP} pages`}
                onClick={handleJump}
              >
                {ELLIPSIS}
              </Cell>
            );
          }

          function handleGoToPage() {
            goTo(item);
          }
          return (
            <Cell
              key={item}
              size={size}
              divider
              active={item === current}
              disabled={disabled}
              label={`Page ${item}`}
              onClick={handleGoToPage}
            >
              {item}
            </Cell>
          );
        })}

        <Cell size={size} divider disabled={onLastPage} label="Next page" onClick={handleNext}>
          {nextContent}
        </Cell>
      </div>
    );
  }

  return (
    <nav aria-label="Pagination" className="d-inline-flex align-items-center gap-3 text-body">
      {body}

      {!isSimple && showSizeChanger && (
        <Select
          size={size}
          disabled={disabled}
          value={pageSize}
          aria-label="Page size"
          options={pageSizeOptions.map(function (option) {
            return { value: option, label: `${option} / page` };
          })}
          onChange={handlePageSizeChange}
        />
      )}

      {!isSimple && showQuickJumper && (
        <span className="d-inline-flex align-items-center gap-1 text-nowrap">
          Go to
          <InputNumber
            size={size}
            min={1}
            max={totalPages}
            controls={false}
            disabled={disabled}
            aria-label="Go to page"
            value={jumperValue}
            onChange={setJumperValue}
            onPressEnter={handleJumperEnter}
          />
        </span>
      )}
    </nav>
  );
}

export default Pagination;
