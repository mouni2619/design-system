import { Input } from "antd";
import { Search as SearchIcon } from "lucide-react";

import { DEFAULT_SEARCH_SIZE, SEARCH_ICON_SIZES } from "@components/Search/constants";

/**
 * A search field: a text input with a magnifier at its end.
 *
 * Hover, focus and disabled are the field's own states, painted by the theme,
 * so there is nothing to pass for them. `value`, `onChange`, `placeholder`,
 * `status` and the rest are antd's Input, which is what lets a `Form.Item`
 * drive it.
 *
 * ```jsx
 * <Search placeholder="Search here..." />
 * <Search size="large" defaultValue="Mumbai" />
 * ```
 */
export function Search({ size = DEFAULT_SEARCH_SIZE, ...rest }) {
  const iconSize = SEARCH_ICON_SIZES[size] || SEARCH_ICON_SIZES[DEFAULT_SEARCH_SIZE];

  return (
    <Input
      size={size}
      suffix={<SearchIcon size={iconSize} className="text-secondary-emp-6" />}
      {...rest}
    />
  );
}

export default Search;
